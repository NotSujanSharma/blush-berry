"use client";
import { Wand2 } from "lucide-react";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export const EditorsPickSection = () => {
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
  const featuredProduct = mockProducts[1];
  const [userConcern, setUserConcern] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAdviceForm, setShowAdviceForm] = useState(false);
  
  const handleGetBeautyAdvice = async () => {
    if (!userConcern.trim()) {
      setError("Please tell us your beauty concern or question.");
      return;
    }
    setIsLoading(true);
    setError("");
  
      
  
    return (
      <section className="py-20 bg-pink-50/50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full max-w-md mx-auto md:max-w-none h-auto object-contain rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105"
                
              />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-300 rounded-full opacity-30 animate-blob filter blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-purple-400 to-pink-300 rounded-full opacity-30 animate-blob animation-delay-2000 filter blur-xl"></div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
                Editor's Obsession
              </span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-serif font-bold text-gray-900">
                {featuredProduct.name}
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                {featuredProduct.description}
              </p>
              <p className="mt-3 text-2xl font-semibold text-pink-600">
                {featuredProduct.price}
              </p>
              <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center md:items-start">
                <a
                  href="#"
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-900 transition-transform transform hover:scale-105 shadow-lg"
                >
                  Discover the Magic
                </a>
                <button
                  onClick={() => setShowAdviceForm(!showAdviceForm)}
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-pink-500 text-base font-medium rounded-full text-pink-600 bg-transparent hover:bg-pink-50 hover:border-pink-600 transition-transform transform hover:scale-105 shadow-sm"
                >
                  <Wand2 size={20} className="mr-2" /> ✨ Get Personalized Advice
                </button>
              </div>
  
              {showAdviceForm && (
                <div className="mt-6 p-6 bg-white rounded-lg shadow-lg transition-all duration-500 ease-in-out">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    What's your beauty goal or concern?
                  </h4>
                  <textarea
                    value={userConcern}
                    onChange={(e) => setUserConcern(e.target.value)}
                    placeholder="e.g., How can I achieve a dewy glow? or I have dry skin patches."
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors text-sm"
                   
                  />
                  <button
                    onClick={handleGetBeautyAdvice}
                    disabled={isLoading}
                    className="mt-3 w-full inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 transition-colors"
                  >
                    {isLoading ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <Sparkles size={18} className="mr-2" />
                    )}
                    {isLoading ? "Getting Advice..." : "✨ Get My Tip!"}
                  </button>
                </div>
              )}
  
              {error && (
                <p className="mt-4 text-sm text-red-600 bg-red-100 p-3 rounded-md">
                  {error}
                </p>
              )}
              
            </div>
          </div>
        </div>
      </section>
    );
  };
  
}