import edjsHTML from "editorjs-html";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import { type ResolvingMetadata, type Metadata } from "next";
import xss from "xss";
import { invariant } from "ts-invariant";
import { type WithContext, type Product } from "schema-dts";
import { AddButton } from "./AddButton";
import { VariantSelector } from "@/ui/components/VariantSelector";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";
import { executeGraphQL } from "@/lib/graphql";
import { formatMoney, formatMoneyRange } from "@/lib/utils";
import { CheckoutAddLineDocument, ProductDetailsDocument, ProductListDocument } from "@/gql/graphql";
import * as Checkout from "@/lib/checkout";
import { AvailabilityMessage } from "@/ui/components/AvailabilityMessage";
// import { Category } from "@/app/Home/components/Category";
import {
	Truck,
	Shield,
	RotateCcw,
	Gift,
	Star,

} from "lucide-react";

const ProductBenefits = () => {
	const benefits = [
		{ icon: Truck, text: "Free shipping on orders over $50", color: "text-emerald-600" },
		{ icon: RotateCcw, text: "30-day easy returns", color: "text-blue-600" },
		{ icon: Shield, text: "2-year warranty included", color: "text-purple-600" },
		{ icon: Gift, text: "Complimentary gift wrapping", color: "text-pink-600" },
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
			{benefits.map((benefit, index) => (
				<div key={index} className="flex items-center space-x-3">
					<benefit.icon size={20} className={benefit.color} />
					<span className="text-sm text-gray-700">{benefit.text}</span>
				</div>
			))}
		</div>
	);
};

export async function generateMetadata(
	props: {
		params: Promise<{ slug: string; channel: string }>;
		searchParams: Promise<{ variant?: string }>;
	},
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const [searchParams, params] = await Promise.all([props.searchParams, props.params]);

	const { product } = await executeGraphQL(ProductDetailsDocument, {
		variables: {
			slug: decodeURIComponent(params.slug),
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!product) {
		notFound();
	}

	const productName = product.seoTitle || product.name;
	const variantName = product.variants?.find(({ id }) => id === searchParams.variant)?.name;
	const productNameAndVariant = variantName ? `${productName} - ${variantName}` : productName;

	return {
		title: `${product.name} | ${product.seoTitle || (await parent).title?.absolute}`,
		description: product.seoDescription || productNameAndVariant,
		alternates: {
			canonical: process.env.NEXT_PUBLIC_STOREFRONT_URL
				? process.env.NEXT_PUBLIC_STOREFRONT_URL + `/products/${encodeURIComponent(params.slug)}`
				: undefined,
		},
		openGraph: product.thumbnail
			? {
				images: [
					{
						url: product.thumbnail.url,
						alt: product.name,
					},
				],
			}
			: null,
	};
}

export async function generateStaticParams({ params }: { params: { channel: string } }) {
	const { products } = await executeGraphQL(ProductListDocument, {
		revalidate: 60,
		variables: { first: 20, channel: params.channel },
		withAuth: false,
	});

	const paths = products?.edges.map(({ node: { slug } }) => ({ slug })) || [];
	return paths;
}

const parser = edjsHTML();

export default async function Page(props: {
	params: Promise<{ slug: string; channel: string }>;
	searchParams: Promise<{ variant?: string }>;
}) {
	const [searchParams, params] = await Promise.all([props.searchParams, props.params]);
	const { product } = await executeGraphQL(ProductDetailsDocument, {
		variables: {
			slug: decodeURIComponent(params.slug),
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!product) {
		notFound();
	}

	const firstImage = product.thumbnail;
	const description = product?.description ? parser.parse(JSON.parse(product?.description)) : null;

	const variants = product.variants;
	const selectedVariantID = searchParams.variant;
	const selectedVariant = variants?.find(({ id }) => id === selectedVariantID);

	async function addItem() {
		"use server";

		const checkout = await Checkout.findOrCreate({
			checkoutId: await Checkout.getIdFromCookies(params.channel),
			channel: params.channel,
		});
		invariant(checkout, "This should never happen");

		await Checkout.saveIdToCookie(params.channel, checkout.id);

		if (!selectedVariantID) {
			return;
		}

		// TODO: error handling
		await executeGraphQL(CheckoutAddLineDocument, {
			variables: {
				id: checkout.id,
				productVariantId: decodeURIComponent(selectedVariantID),
			},
			cache: "no-cache",
		});

		revalidatePath("/cart");
	}

	const isAvailable = variants?.some((variant) => variant.quantityAvailable) ?? false;

	const price = selectedVariant?.pricing?.price?.gross
		? formatMoney(selectedVariant.pricing.price.gross.amount, selectedVariant.pricing.price.gross.currency)
		: isAvailable
			? formatMoneyRange({
				start: product?.pricing?.priceRange?.start?.gross,
				stop: product?.pricing?.priceRange?.stop?.gross,
			})
			: "";


	const productJsonLd: WithContext<Product> = {
		"@context": "https://schema.org",
		"@type": "Product",
		image: product.thumbnail?.url,
		...(selectedVariant
			? {
				name: `${product.name} - ${selectedVariant.name}`,
				description: product.seoDescription || `${product.name} - ${selectedVariant.name}`,
				offers: {
					"@type": "Offer",
					availability: selectedVariant.quantityAvailable
						? "https://schema.org/InStock"
						: "https://schema.org/OutOfStock",
					priceCurrency: selectedVariant.pricing?.price?.gross.currency,
					price: selectedVariant.pricing?.price?.gross.amount,
				},
			}
			: {
				name: product.name,

				description: product.seoDescription || product.name,
				offers: {
					"@type": "AggregateOffer",
					availability: product.variants?.some((variant) => variant.quantityAvailable)
						? "https://schema.org/InStock"
						: "https://schema.org/OutOfStock",
					priceCurrency: product.pricing?.priceRange?.start?.gross.currency,
					lowPrice: product.pricing?.priceRange?.start?.gross.amount,
					highPrice: product.pricing?.priceRange?.stop?.gross.amount,
				},
			}),
	};

	return (
		<section className="mx-auto grid max-w-7xl p-8">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(productJsonLd),
				}}
			/>
			<form className="grid gap-2 sm:grid-cols-2 lg:grid-cols-8" action={addItem}>
				<div className="md:col-span-1 lg:col-span-5">
					{firstImage && (
						<ProductImageWrapper
							priority={true}
							alt={firstImage.alt ?? ""}
							width={1024}
							height={1024}
							src={firstImage.url}
						/>
					)}
				</div>
				<div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
					<div>
						<div className="mb-4">

							<p className="text-sm text-gray-500 uppercase tracking-wider">Blush Berry</p>
							<h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mt-1">
								{product?.name}
							</h3>

						</div>
						<div className="flex items-center space-x-4 mb-4">
							<div className="flex items-center">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										size={18}
										className={`${i < Math.floor(product.rating ?? 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
									/>
								))}
							</div>
							<span className="text-sm text-gray-600">
								{product.rating ?? 0}
							</span>
						</div>

						<div className="flex flex-wrap gap-2 mb-4">

							<span

								className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full"
							>
								{product.category?.name}
							</span>

						</div>

						<div className="flex items-center space-x-3 mb-6">
							<span className="text-3xl font-bold text-gray-900">
								{price}
							</span>
							{/* {price && (
							<span className="text-xl text-gray-500 line-through">
								{price}
							</span>
							)}
							{price && (
							<span className="px-2 py-1 bg-red-100 text-red-700 text-sm font-medium rounded">
								Save {price}
							</span>
							)} */}
						</div>
						<div className="flex items-center space-x-2 mb-6">
							<div className={`w-3 h-3 ${isAvailable ? 'bg-emerald-400' : 'bg-red-400'} rounded-full`}></div>
							<span className="text-sm text-gray-700">

								{isAvailable ? `In stock` : `Out of stock`}
							</span>
						</div>

						{variants && (
							<VariantSelector
								selectedVariant={selectedVariant}
								variants={variants}
								product={product}
								channel={params.channel}
							/>
						)}
						{description && (
							<div className="mt-8 space-y-6 text-sm text-neutral-500">
								{description.map((content) => (
									<div key={content} dangerouslySetInnerHTML={{ __html: xss(content) }} />
								))}
							</div>
						)}
						<AvailabilityMessage isAvailable={isAvailable} />
						<div className="my-8">
							<AddButton disabled={!selectedVariantID || !selectedVariant?.quantityAvailable} />
						</div>
						{/* Product Benefits */}
						<ProductBenefits />

					</div>
				</div>
			</form>
		</section>
	);
}
