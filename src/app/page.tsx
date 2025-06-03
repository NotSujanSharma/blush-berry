// import { redirect } from "next/navigation";

// export default function EmptyPage() {
// 	redirect("/default-channel");
// }

"use client";
import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Heart,
  User,
  Search,
  ChevronRight,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  Sparkles,
  Droplet,
  Leaf,
  Gift,
  Wand2,
  Star,
  MessageCircle,
  Play,
  ArrowRight,
} from "lucide-react";

// Mock product data - updated for a more curated feel
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


// Helper component for Navigation Links
const NavLink = ({ href, children, isMobile = false }) => (
  <a
    href={href}
    className={`relative group font-medium transition-all duration-300 ${
      isMobile
        ? "block px-4 py-3 rounded-lg text-base text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600"
        : "text-gray-600 hover:text-pink-600 px-4 py-2 text-sm"
    }`}
  >
    {children}
    {!isMobile && (
      <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300" />
    )}
  </a>
);

// Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-pink-100"
          : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with gradient */}
          <div className="flex-shrink-0">
            <a href="#" className="group">
              <span className="text-4xl font-serif font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
                Blushberry
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink href="#">New In</NavLink>
            <NavLink href="#">Makeup</NavLink>
            <NavLink href="#">Skincare</NavLink>
            <NavLink href="#">Fragrance</NavLink>
            <NavLink href="#">Journal</NavLink>
            <NavLink href="#">Sale</NavLink>
          </nav>

          {/* Enhanced Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 group">
              <Search
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </button>
            <button className="p-2 text-gray-500 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 group">
              <User
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </button>
            <button className="p-2 relative text-gray-500 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 group">
              <Heart
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="relative flex items-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full group hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              <ShoppingBag
                size={18}
                className="mr-2 group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium">2</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-pink-600 focus:outline-none p-2 rounded-lg hover:bg-pink-50 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 top-3" : "top-1"}`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-xl border-t border-pink-100">
          <nav className="px-4 pt-4 pb-6 space-y-2">
            <NavLink href="#" isMobile>
              New In
            </NavLink>
            <NavLink href="#" isMobile>
              Makeup
            </NavLink>
            <NavLink href="#" isMobile>
              Skincare
            </NavLink>
            <NavLink href="#" isMobile>
              Fragrance
            </NavLink>
            <NavLink href="#" isMobile>
              Journal
            </NavLink>
            <NavLink href="#" isMobile>
              Sale
            </NavLink>
          </nav>
          <div className="px-4 py-4 border-t border-pink-100 flex items-center justify-around bg-gradient-to-r from-pink-50 to-rose-50">
            <button className="p-3 text-gray-500 hover:text-pink-600 hover:bg-white rounded-full transition-all duration-300">
              <Search size={22} />
            </button>
            <button className="p-3 text-gray-500 hover:text-pink-600 hover:bg-white rounded-full transition-all duration-300">
              <User size={22} />
            </button>
            <button className="p-3 relative text-gray-500 hover:text-pink-600 hover:bg-white rounded-full transition-all duration-300">
              <Heart size={22} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-3 relative text-gray-500 hover:text-pink-600 hover:bg-white rounded-full transition-all duration-300">
              <ShoppingBag size={22} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section className="relative min-h-[80vh] md:min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
    <div className="absolute inset-0 opacity-30">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="heroPattern"
            patternUnits="userSpaceOnUse"
            width="50"
            height="50"
            patternTransform="scale(2) rotate(45)"
          >
            <path
              d="M25 0 L50 25 L25 50 L0 25 Z"
              fill="rgba(236, 72, 153, 0.05)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroPattern)" />
      </svg>
    </div>
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left py-12 md:py-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-gray-900">
            <span className="block">Beauty, Reimagined.</span>
            <span className="block text-pink-600 mt-2">Elegance Unveiled.</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg text-gray-700">
            Discover Blushberry's world of curated beauty, where luxury meets
            conscious living.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Explore Collection
              <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-pink-200 text-base font-medium rounded-full text-pink-600 bg-transparent hover:bg-pink-50 hover:border-pink-300 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Our Philosophy
            </a>
          </div>
        </div>
        <div className="relative h-80 md:h-[500px] lg:h-[600px]">
          <img
            src="https://placehold.co/800x1000/f8c8dc/6B4F4F?text=Elegant+Beauty+Display"
            alt="Artistic beauty product display"
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transform md:rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/800x1000/fce4ec/888888?text=Image+Error")
            }
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-rose-400 rounded-lg opacity-60 transform rotate-12"></div>
        </div>
      </div>
    </div>
  </section>
);
// Categories Section
const CategoriesSection = () => (
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
              onError={(e) =>
                (e.target.src = `https://placehold.co/600x450/cccccc/FFFFFF?text=${category.name.replace(/\s/g, "+")}+Error`)
              }
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

// Editor's Pick Section
const EditorsPickSection = () => {
  const featuredProduct = mockProducts[1];
  const [userConcern, setUserConcern] = useState("");
  const [generatedAdvice, setGeneratedAdvice] = useState("");
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
    setGeneratedAdvice("");

    const prompt = `You are a friendly and knowledgeable beauty advisor for Blushberry.
A customer is interested in our featured product: "${featuredProduct.name}" which is a ${featuredProduct.category} described as: "${featuredProduct.description}".
Their beauty concern/question is: "${userConcern}".
Please provide a concise, helpful, and encouraging beauty tip (2-3 sentences) that addresses their concern. If relevant, mention how the "${featuredProduct.name}" could help or be incorporated. If it's not directly relevant, provide general advice for their concern. Sign off with a positive note from Blushberry.`;

    try {
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const result = await response.json();
      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        const text = result.candidates[0].content.parts[0].text;
        setGeneratedAdvice(text);
      } else {
        console.error("Unexpected API response structure:", result);
        throw new Error(
          "Failed to get advice. The response from the AI was not as expected.",
        );
      }
    } catch (e) {
      console.error("Error fetching beauty advice:", e);
      setError(
        e.message ||
          "Sorry, we couldn't fetch your personalized advice right now. Please try again later.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-pink-50/50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="w-full max-w-md mx-auto md:max-w-none h-auto object-contain rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/600x750/cccccc/FFFFFF?text=Featured+Product+Error")
              }
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
                  rows="3"
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
            {generatedAdvice && (
              <div className="mt-6 p-4 bg-pink-50 border border-pink-200 rounded-lg shadow-sm">
                <h4 className="text-md font-semibold text-pink-700 mb-2">
                  ✨ Your Personalized Tip:
                </h4>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {generatedAdvice}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// NEW SECTION: The Blushberry Ritual
const BlushberryRitualSection = () => (
  <section className="py-20 bg-white overflow-hidden">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
            Our Philosophy
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            The Art of the Ritual
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            At Blushberry, we believe beauty is more than skin deep—it's a daily
            ritual, a moment of self-care that nurtures both body and soul. Each
            product is thoughtfully crafted, blending the finest natural
            extracts with innovative science to create an experience that
            delights the senses and delivers visible results.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Embrace the journey to radiant well-being. Transform your routine
            into a cherished ritual.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 border-2 border-pink-500 text-base font-medium rounded-full text-pink-600 bg-transparent hover:bg-pink-50 hover:border-pink-600 transition-transform transform hover:scale-105 shadow-sm"
          >
            Discover Our Ingredients <Leaf size={18} className="ml-2" />
          </a>
        </div>
        <div className="relative order-1 md:order-2 h-96 md:h-[550px]">
          <img
            src="https://placehold.co/800x1000/fde6f0/7A5C58?text=Sensory+Beauty+Experience"
            alt="Artistic display of beauty product textures and ingredients"
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl transform md:-rotate-2 transition-all duration-500 hover:rotate-0 hover:scale-105"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/800x1000/fde6f0/888888?text=Image+Error")
            }
          />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-rose-300 rounded-full opacity-40 animate-blob filter blur-lg animation-delay-4000"></div>
        </div>
      </div>
    </div>
  </section>
);

// Product Card Component
const ProductCard = ({ product }) => (
  <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
    <div className="relative w-full aspect-[3/4] overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) =>
          (e.target.src =
            "https://placehold.co/400x533/cccccc/FFFFFF?text=Product+Error")
        }
      />
      <div className="absolute top-3 right-3">
        <button className="p-2 bg-white/70 backdrop-blur-sm rounded-full text-gray-600 hover:text-pink-500 hover:bg-white transition-all">
          <Heart size={18} />
        </button>
      </div>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-base font-semibold text-gray-800 mb-1">
        <a href="#" className="hover:text-pink-600 transition-colors">
          <span aria-hidden="true" className="absolute inset-0" />
          {product.name}
        </a>
      </h3>
      <p className="text-xs text-gray-500 mb-2">{product.category}</p>
      <p className="text-lg font-bold text-pink-700 mb-3">{product.price}</p>
      <button className="mt-auto w-full bg-gray-800 text-white py-2.5 px-4 rounded-md hover:bg-pink-600 transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
        Add to Bag
      </button>
    </div>
  </div>
);

// Featured Products Section
const FeaturedProductsSection = () => (
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

// NEW SECTION: Community Glow
const CommunityGlowSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah L.",
      quote:
        "Blushberry has transformed my skin! The Moonlit Dew Serum is pure magic. My face has never felt so soft and radiant.",
      image: "https://placehold.co/400x400/E6A4B4/FFFFFF?text=Sarah+L.",
      stars: 5,
    },
    {
      id: 2,
      name: "Jessica M.",
      quote:
        "I'm obsessed with the Aurora Veil Lipstick. The color is stunning and it feels so luxurious. Finally found my perfect red!",
      image: "https://placehold.co/400x400/D988B9/FFFFFF?text=Jessica+M.",
      stars: 5,
    },
    {
      id: 3,
      name: "Chloe K.",
      quote:
        "The attention to detail and quality is amazing. Plus, knowing it's cruelty-free makes me love Blushberry even more.",
      image: "https://placehold.co/400x400/C7A2CB/FFFFFF?text=Chloe+K.",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
            Community Glow
          </h2>
          <p className="mt-2 text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            Loved by You, For You
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-pink-50/40 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:scale-105"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                onError={(e) =>
                  (e.target.src =
                    "https://placehold.co/100x100/cccccc/FFFFFF?text=User")
                }
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {testimonial.name}
              </h3>
              <div className="flex items-center mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-gray-300" />
                ))}
              </div>
              <MessageCircle size={24} className="text-pink-400 mb-2" />
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-2.5 border border-pink-500 text-sm font-medium rounded-full text-pink-600 bg-transparent hover:bg-pink-50 transition-colors"
          >
            Share Your Glow <Heart size={16} className="ml-2 text-pink-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Unique Promotional Section
const UniquePromoSection = () => (
  <section className="py-20 my-16 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <Sparkles className="absolute top-1/4 left-1/4 w-32 h-32 text-pink-300 animate-pulse" />
      <Sparkles className="absolute bottom-1/4 right-1/4 w-24 h-24 text-purple-300 animate-ping animation-delay-1000" />
    </div>
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
        Exclusive Offer
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
        Unlock Your Radiance
      </h2>
      <p className="mt-4 text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
        Join the Blushberry family and receive{" "}
        <span className="font-bold text-yellow-300">15% OFF</span> your first
        indulgence. Plus, early access to new arrivals and secret sales.
      </p>
      <a
        href="#"
        className="mt-10 inline-block bg-white text-pink-600 font-semibold py-3.5 px-10 rounded-full shadow-xl hover:bg-pink-50 transition-transform transform hover:scale-105 text-lg"
      >
        Claim Your Welcome Gift
      </a>
    </div>
  </section>
);

// Brand Promise Section
const BrandPromiseSection = () => (
  <section className="py-20 bg-pink-50/30">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
          The Blushberry Difference
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Beauty that aligns with your values. Pure, potent, and always
          principled.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 text-center">
        <div className="p-6">
          <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 text-white mx-auto shadow-lg">
            <Leaf size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Consciously Crafted
          </h3>
          <p className="text-gray-600 text-sm">
            Ethically sourced ingredients, 100% cruelty-free. Beauty that feels
            good, inside and out.
          </p>
        </div>
        <div className="p-6">
          <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 text-white mx-auto shadow-lg">
            <Sparkles size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Visible Radiance
          </h3>
          <p className="text-gray-600 text-sm">
            Formulated for efficacy. Experience transformative results you can
            see and feel.
          </p>
        </div>
        <div className="p-6">
          <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-yellow-400 text-white mx-auto shadow-lg">
            <Gift size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Exquisite Experience
          </h3>
          <p className="text-gray-600 text-sm">
            From our packaging to your daily ritual, indulge in a touch of
            luxury.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Newsletter Section Component
const NewsletterSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Mail size={48} className="mx-auto text-pink-500 mb-4" />
      <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
        Join Our Inner Circle
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Be the first to know about new arrivals, exclusive beauty insights, and
        members-only offers from Blushberry.
      </p>
      <form className="mt-10 sm:flex max-w-lg mx-auto">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-6 py-3.5 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-full shadow-sm sm:max-w-xs mx-auto sm:mx-0 text-sm"
          placeholder="yourname@example.com"
        />
        <div className="mt-3 rounded-full shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
          >
            Subscribe Now
          </button>
        </div>
      </form>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 font-sans">
    <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
          <a
            href="#"
            className="text-3xl font-serif font-bold text-pink-500 tracking-tight"
          >
            Blushberry
          </a>
          <p className="mt-4 text-sm">
            Crafting moments of beauty, ethically and artfully.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
            Shop
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                Makeup
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                Skincare
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                Fragrance
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                New Arrivals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                Gifts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
            Our World
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                Journal
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                Sustainability
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                Collaborations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
            Support
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                Shipping & Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors text-sm"
              >
                My Account
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
            Connect
          </h3>
          <div className="flex space-x-5 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Twitter size={22} />
            </a>
          </div>
          <p className="mt-6 text-sm">
            Email us:{" "}
            <a
              href="mailto:care@blushberry.com"
              className="hover:text-pink-400 underline"
            >
              care@blushberry.com
            </a>
          </p>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center md:flex md:justify-between">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Blushberry Co. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4 md:mt-0 text-xs">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Main Homepage Component
const BlushberryHomepage = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <EditorsPickSection />
        <BlushberryRitualSection /> {/* New Section */}
        <FeaturedProductsSection />
        <CommunityGlowSection /> {/* New Section */}
        <UniquePromoSection />
        <BrandPromiseSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

// App component to render the homepage (for preview)
export default function App() {
  return <BlushberryHomepage />;
}

// Add some basic CSS for animations if not covered by Tailwind directly
const GlobalStyles = () => (
  <style jsx global>{`
    @keyframes blob {
      0% {
        transform: scale(1) translate(0px, 0px);
      }
      33% {
        transform: scale(1.1) translate(30px, -50px);
      }
      66% {
        transform: scale(0.9) translate(-20px, 20px);
      }
      100% {
        transform: scale(1) translate(0px, 0px);
      }
    }
    .animate-blob {
      animation: blob 15s infinite ease-in-out;
    }
    .animation-delay-1000 {
      /* For UniquePromoSection */
      animation-delay: 1s;
    }
    .animation-delay-2000 {
      /* For EditorsPickSection */
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      /* For BlushberryRitualSection */
      animation-delay: 4s;
    }
    /* Basic spinner for loading state */
    .animate-spin {
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}</style>
);

// If you were to use GlobalStyles in the App component:
// export default function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <BlushberryHomepage />
//     </>
//   );
// }
