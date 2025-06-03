"use client";
import React, { useState, useEffect } from "react";
import {
  Heart,
  Star,
  ShoppingBag,
  Share2,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Truck,
  Shield,
  RotateCcw,
  Gift,
  Sparkles,
  Leaf,
  Award,
  Check,
  ChevronDown,
  Zap,
  Eye,
  MessageCircle,
  ThumbsUp,
  Camera,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  Info,
} from "lucide-react";

// Mock product data
const mockProduct = {
  id: 1,
  name: "Aurora Veil Lipstick",
  price: 32.00,
  originalPrice: 38.00,
  description: "Experience the perfect fusion of comfort and color with our Aurora Veil Lipstick. This weightless, hydrating formula delivers rich, buildable coverage with a luxurious matte finish that doesn't compromise on comfort.",
  longDescription: `Discover the magic of Aurora Veil, where innovative beauty meets conscious luxury. Our signature lipstick combines the finest natural waxes with cutting-edge color technology to create a weightless formula that hugs your lips in velvety comfort.

Each shade is carefully crafted to complement all skin tones, with buildable coverage that transitions seamlessly from a subtle tint to full opacity. The hydrating complex, enriched with hyaluronic acid and vitamin E, ensures your lips stay moisturized and comfortable throughout the day.

The sleek, refillable packaging reflects our commitment to sustainability without compromising on luxury. Each Aurora Veil Lipstick is a testament to our belief that beauty should be both transformative and responsible.`,
  category: "Makeup",
  subcategory: "Lips",
  sku: "BLB-AV-001",
  brand: "Blushberry",
  rating: 4.8,
  reviewCount: 124,
  inStock: true,
  stockCount: 15,
  shades: [
    { name: "Crimson Blush", color: "#DC143C", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=750&fit=crop&crop=center" },
    { name: "Rose Petal", color: "#E91E63", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=750&fit=crop&crop=center" },
    { name: "Berry Crush", color: "#8E24AA", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=750&fit=crop&crop=center" },
    { name: "Coral Dreams", color: "#FF5722", image: "https://images.unsplash.com/photo-1583241800942-aa3b9ab2ebe8?w=600&h=750&fit=crop&crop=center" },
    { name: "Nude Elegance", color: "#D2691E", image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&h=750&fit=crop&crop=center" },
  ],
  images: [
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&h=1000&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=1000&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=1000&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1583241800942-aa3b9ab2ebe8?w=800&h=1000&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&h=1000&fit=crop&crop=center",
  ],
  video: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
  ingredients: [
    "Hyaluronic Acid - Deep hydration",
    "Vitamin E - Antioxidant protection", 
    "Natural Carnauba Wax - Smooth application",
    "Jojoba Oil - Nourishment",
    "Iron Oxides - Natural color",
  ],
  keyFeatures: [
    "16-hour wear",
    "Hydrating formula",
    "Buildable coverage",
    "Cruelty-free",
    "Refillable packaging",
    "Vegan formula",
  ],
  badges: ["Bestseller", "Cruelty-Free", "Vegan"],
  relatedProducts: [
    {
      id: 2,
      name: "Moonlit Dew Serum",
      price: 58.00,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop&crop=center",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Ethereal Skin Tint",
      price: 42.00,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop&crop=center",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Rose Gold Highlighter",
      price: 38.00,
      image: "https://images.unsplash.com/photo-1583241800942-aa3b9ab2ebe8?w=400&h=500&fit=crop&crop=center",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Velvet Dream Foundation",
      price: 52.00,
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=500&fit=crop&crop=center",
      rating: 4.8,
    },
  ],
};

// Mock reviews
const mockReviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2024-01-15",
    title: "Absolutely perfect!",
    content: "This lipstick is everything I've been looking for. The color is stunning, it lasts all day, and my lips actually feel moisturized. The packaging is so luxurious too!",
    verified: true,
    helpful: 12,
    shade: "Crimson Blush",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b602?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    author: "Jessica L.",
    rating: 5,
    date: "2024-01-12",
    title: "My new favorite",
    content: "I've tried so many lipsticks and this one is definitely my new go-to. The formula is incredibly comfortable and the color payoff is amazing.",
    verified: true,
    helpful: 8,
    shade: "Rose Petal",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    author: "Emma K.",
    rating: 4,
    date: "2024-01-10",
    title: "Beautiful color",
    content: "Love the shade and how it applies so smoothly. Only wish it came in more colors!",
    verified: true,
    helpful: 5,
    shade: "Berry Crush",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
];

// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-pink-200 rounded-full opacity-30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
};

// Image Gallery Component
const ImageGallery = ({ images, video, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const allMedia = [...images, ...(video ? [{ type: 'video', src: video }] : [])];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % allMedia.length);
    setShowVideo(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
    setShowVideo(false);
  };

  const currentMedia = allMedia[currentIndex];
  const isVideoItem = currentMedia && typeof currentMedia === 'object' && currentMedia.type === 'video';

  return (
    <div className="space-y-4">
      {/* Main Image/Video */}
      <div className="relative aspect-square bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl overflow-hidden group">
        {isVideoItem ? (
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              autoPlay={isPlaying}
              muted={isMuted}
              loop
              poster={images[0]}
            >
              <source src={currentMedia.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <img
            src={typeof currentMedia === 'string' ? currentMedia : currentMedia?.src || images[0]}
            alt={`${productName} - Image ${currentIndex + 1}`}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in hover:scale-105'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
            onError={(e) => (e.target.src = "https://placehold.co/800x800/f8c8dc/6B4F4F?text=Product+Image")}
          />
        )}
        
        {/* Navigation Arrows */}
        {allMedia.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Zoom Indicator */}
        {!isVideoItem && (
          <div className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Eye size={16} className="text-gray-600" />
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
        {allMedia.map((media, index) => {
          const isVideo = typeof media === 'object' && media.type === 'video';
          const src = isVideo ? images[0] : (typeof media === 'string' ? media : media.src);
          
          return (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setShowVideo(isVideo);
              }}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === index
                  ? 'border-pink-500 shadow-lg scale-110'
                  : 'border-gray-200 hover:border-pink-300'
              }`}
            >
              <div className="relative w-full h-full">
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = "https://placehold.co/100x100/cccccc/FFFFFF?text=Thumb")}
                />
                {isVideo && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play size={16} className="text-white" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Color Selector Component
const ColorSelector = ({ shades, selectedShade, onShadeChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">
          Shade: <span className="text-pink-600">{shades[selectedShade]?.name}</span>
        </h3>
        <span className="text-xs text-gray-500">{shades.length} shades available</span>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {shades.map((shade, index) => (
          <button
            key={shade.name}
            onClick={() => onShadeChange(index)}
            className={`group relative w-12 h-12 rounded-full border-3 transition-all duration-300 ${
              selectedShade === index
                ? 'border-gray-800 scale-110 shadow-lg'
                : 'border-gray-300 hover:border-gray-400 hover:scale-105'
            }`}
            style={{ backgroundColor: shade.color }}
          >
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            {selectedShade === index && (
              <div className="absolute inset-0 rounded-full border-2 border-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

// Quantity Selector Component
const QuantitySelector = ({ quantity, onQuantityChange, maxQuantity = 10 }) => {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700">Quantity:</span>
      <div className="flex items-center border border-gray-300 rounded-lg">
        <button
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-l-lg transition-colors"
          disabled={quantity <= 1}
        >
          <Minus size={16} />
        </button>
        <span className="px-4 py-2 text-center min-w-[3rem] font-medium">{quantity}</span>
        <button
          onClick={() => onQuantityChange(Math.min(maxQuantity, quantity + 1))}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-r-lg transition-colors"
          disabled={quantity >= maxQuantity}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};

// Product Benefits Component
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

// Product Tabs Component
const ProductTabs = ({ product, reviews }) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description", count: null },
    { id: "ingredients", label: "Ingredients", count: product.ingredients.length },
    { id: "reviews", label: "Reviews", count: product.reviewCount },
    { id: "shipping", label: "Shipping", count: null },
  ];

  return (
    <div className="space-y-6">
      {/* Tab Headers */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all ${
              activeTab === tab.id
                ? 'bg-white text-pink-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
            {tab.count && (
              <span className="ml-2 text-xs text-gray-500">({tab.count})</span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px]">
        {activeTab === "description" && (
          <div className="prose prose-pink max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {product.longDescription}
            </p>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check size={16} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "ingredients" && (
          <div className="space-y-4">
            <p className="text-gray-700">
              We believe in transparency. Here are all the ingredients that make our {product.name} so special:
            </p>
            <div className="grid gap-3">
              {product.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-pink-50 rounded-lg">
                  <Leaf size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            {/* Review Stats */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-gray-900">{product.rating}</div>
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{product.reviewCount} reviews</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium">
                  Write Review
                </button>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={(e) => (e.target.src = "https://placehold.co/100x100/cccccc/FFFFFF?text=User")}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-gray-900">{review.author}</h4>
                          {review.verified && (
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">Shade: {review.shade}</span>
                      </div>
                      
                      <h5 className="font-medium text-gray-900 mb-1">{review.title}</h5>
                      <p className="text-gray-700 text-sm leading-relaxed">{review.content}</p>
                      
                      <div className="flex items-center space-x-4 mt-3">
                        <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
                          <ThumbsUp size={14} />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                        <button className="text-sm text-gray-500 hover:text-gray-700">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="space-y-6">
            <div className="grid gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Truck className="mr-2 text-emerald-600" size={20} />
                  Standard Shipping
                </h4>
                <p className="text-gray-700 text-sm mb-2">Free on orders over $50</p>
                <p className="text-gray-600 text-sm">Delivery: 5-7 business days</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="mr-2 text-blue-600" size={20} />
                  Express Shipping
                </h4>
                <p className="text-gray-700 text-sm mb-2">$12.99</p>
                <p className="text-gray-600 text-sm">Delivery: 2-3 business days</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Gift className="mr-2 text-pink-600" size={20} />
                  Gift Options
                </h4>
                <p className="text-gray-600 text-sm">Complimentary gift wrapping available at checkout</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Related Products Component
const RelatedProducts = ({ products }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-serif font-bold text-gray-900">You Might Also Love</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden">
            <div className="aspect-square overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => (e.target.src = "https://placehold.co/300x300/cccccc/FFFFFF?text=Product")}
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-1">
                {product.name}
              </h4>
              <div className="flex items-center mt-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <button className="p-2 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all">
                  <ShoppingBag size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Product Detail Page Component
export const ProductDetailPage = () => {
  const [selectedShade, setSelectedShade] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAddingToBag, setIsAddingToBag] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleAddToBag = async () => {
    setIsAddingToBag(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsAddingToBag(false);
    // Show success message or redirect
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this amazing ${mockProduct.name} from Blushberry!`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'pinterest':
        window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // Show toast notification
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50/30 via-white to-pink-50/20 relative">
      <FloatingParticles />
      
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <a href="#" className="hover:text-pink-600 transition-colors">Home</a>
          <ChevronRight size={16} />
          <a href="#" className="hover:text-pink-600 transition-colors">{mockProduct.category}</a>
          <ChevronRight size={16} />
          <span className="text-gray-900">{mockProduct.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-6">
            <ImageGallery 
              images={mockProduct.images} 
              video={mockProduct.video}
              productName={mockProduct.name}
            />
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{mockProduct.brand}</p>
                  <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mt-1">
                    {mockProduct.name}
                  </h1>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`p-3 rounded-full transition-all ${
                      isFavorited ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-400 hover:bg-pink-50 hover:text-pink-500'
                    }`}
                  >
                    <Heart size={24} className={isFavorited ? 'fill-current' : ''} />
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="p-3 bg-gray-100 text-gray-400 hover:bg-pink-50 hover:text-pink-500 rounded-full transition-all"
                    >
                      <Share2 size={24} />
                    </button>
                    {showShareMenu && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Share on Facebook
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Share on Twitter
                        </button>
                        <button
                          onClick={() => handleShare('pinterest')}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Pin to Pinterest
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Copy Link
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${i < Math.floor(mockProduct.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {mockProduct.rating} ({mockProduct.reviewCount} reviews)
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {mockProduct.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${mockProduct.price.toFixed(2)}
                </span>
                {mockProduct.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${mockProduct.originalPrice.toFixed(2)}
                  </span>
                )}
                {mockProduct.originalPrice && (
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-sm font-medium rounded">
                    Save ${(mockProduct.originalPrice - mockProduct.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span className="text-sm text-gray-700">
                  {mockProduct.inStock ? `In stock (${mockProduct.stockCount} left)` : 'Out of stock'}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">{mockProduct.description}</p>
            </div>

            {/* Color Selection */}
            <ColorSelector 
              shades={mockProduct.shades}
              selectedShade={selectedShade}
              onShadeChange={setSelectedShade}
            />

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <QuantitySelector 
                quantity={quantity}
                onQuantityChange={setQuantity}
                maxQuantity={mockProduct.stockCount}
              />
              
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToBag}
                  disabled={!mockProduct.inStock || isAddingToBag}
                  className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-full font-semibold hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isAddingToBag ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <ShoppingBag size={20} className="mr-2" />
                      Add to Bag - ${(mockProduct.price * quantity).toFixed(2)}
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Product Benefits */}
            <ProductBenefits />

            {/* Product Details */}
            <div className="bg-gray-50 p-6 rounded-xl space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">SKU:</span>
                <span className="font-medium">{mockProduct.sku}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-medium">{mockProduct.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium">{mockProduct.subcategory}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mb-16">
          <ProductTabs product={mockProduct} reviews={mockReviews} />
        </div>

        {/* Related Products */}
        <RelatedProducts products={mockProduct.relatedProducts} />
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(2deg); }
          66% { transform: translateY(4px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};
