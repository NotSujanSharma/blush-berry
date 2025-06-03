
import React from "react";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

export function FeaturedProductsSection() {
    const mockProducts = [
        {
          id: 1,
          name: "Aurora Veil Lipstick",
          price: "$32.00",
          image:
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=750&fit=crop&crop=center",
          category: "Makeup",
          description:
            "A weightless, hydrating matte lipstick with a velvety finish.",
          badge: "Bestseller",
        },
        {
          id: 2,
          name: "Moonlit Dew Serum",
          price: "$58.00",
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=750&fit=crop&crop=center",
          category: "Skincare",
          description:
            "Revitalize your skin overnight with this potent, illuminating serum.",
          badge: "New",
        },
        {
          id: 3,
          name: "Mystic Bloom Parfum",
          price: "$95.00",
          image:
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=750&fit=crop&crop=center",
          category: "Fragrance",
          description: "An enchanting blend of rare florals and warm amber notes.",
          badge: "Limited",
        },
        {
          id: 4,
          name: "Ethereal Skin Tint",
          price: "$42.00",
          image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=750&fit=crop&crop=center",
          category: "Makeup",
          description:
            "A breathable, light-coverage tint for a naturally flawless look.",
          badge: "Trending",
        },
      ];
    return (
        <section className="py-20 bg-pink-50/30">
            {" "}
            {/* Changed background slightly */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
                        You Might Also Love
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        Handpicked selections from our latest collections, just for you.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {mockProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center px-8 py-3 border-2 border-pink-500 text-base font-medium rounded-full text-pink-600 bg-transparent hover:bg-pink-500 hover:text-white transition-all duration-300 group"
                    >
                        View All Products{" "}
                        <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
  