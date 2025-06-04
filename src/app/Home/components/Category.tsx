

import { ChevronRight } from "lucide-react";

const mockCategories = [
    {
      name: "Artisan Makeup",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop&crop=center",
      link: "#",
      description: "Curated colors, luxurious textures.",
    },
    {
      name: "Ritual Skincare",
      image:
        "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&h=600&fit=crop&crop=center",
      link: "#",
      description: "Nourish your skin, elevate your routine.",
    },
    {
      name: "Signature Scents",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop&crop=center",
      link: "#",
      description: "Unforgettable fragrances, uniquely yours.",
    },
  ];
export function Category(){
    return (

        <section className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
                        Discover Our World
                    </h2>
                    <p className="mt-2 text-3xl lg:text-4xl font-serif font-bold text-gray-900">
                        Crafted for You
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {mockCategories.map((category, index) => (
                        <a
                            key={category.name}
                            href={category.link}
                            className={`group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${index === 1 ? "md:scale-105 md:z-10" : ""}`}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                                
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                <h3 className="text-2xl lg:text-3xl font-serif font-semibold">
                                    {category.name}
                                </h3>
                                <p className="mt-1 text-sm text-pink-100 group-hover:text-white transition-colors">
                                    {category.description}
                                </p>
                                <span className="mt-4 inline-flex items-center text-sm font-medium text-pink-300 group-hover:text-pink-100 transition-colors">
                                    Explore <ChevronRight className="ml-1 h-4 w-4" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
