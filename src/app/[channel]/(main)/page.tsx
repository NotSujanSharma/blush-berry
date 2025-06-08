import HomePage from "@/app/Home/page";

export const metadata = {
	title: "ACME Storefront, powered by Saleor & Next.js",
	description:
		"Storefront Next.js Example for building performant e-commerce experiences with Saleor - the composable, headless commerce platform for global brands.",
};

export default async function Page(props: { params: Promise<{ channel: string }> }) {
	const params = await props.params;
	
	return (
		// <section className="mx-auto max-w-7xl p-8 pb-16">
		<section>
			<h2 className="sr-only">Product list</h2>
			{/* <ProductList products={products} /> */}
			<HomePage channel={params.channel} />
		</section>
	);
}
