'use client';
import React, { useState, useEffect } from "react";
import {
  Heart,
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  Star,
  Search,
  X,
  Sparkles,
  Leaf,
  Award,
  TrendingUp,
  Zap,
  ShoppingBag,
  ArrowUpDown,
  Eye,
  Plus,
} from "lucide-react";
import { Footer } from "@/ui/components/Footer";

// Enhanced mock products for the products page
const mockProducts = [
  {
    id: 1,
    name: "Aurora Veil Lipstick",
    price: 32.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=750&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=750&fit=crop&crop=center",
    category: "Makeup",
    subcategory: "Lips",
    description: "A weightless, hydrating matte lipstick with a velvety finish.",
    badge: "Bestseller",
    rating: 4.8,
    reviewCount: 124,
    colors: ["#FF6B6B", "#E91E63", "#8E24AA", "#FF5722"],
    isNew: false,
    isOnSale: false,
    ingredients: ["Hyaluronic Acid", "Vitamin E", "Natural Wax"],
  },
  {
    id: 2,
    name: "Moonlit Dew Serum",
    price: 58.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=750&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=750&fit=crop&crop=center",
    category: "Skincare",
    subcategory: "Serums",
    description: "Revitalize your skin overnight with this potent, illuminating serum.",
    badge: "New",
    rating: 4.9,
    reviewCount: 89,
    colors: null,
    isNew: true,
    isOnSale: false,
    ingredients: ["Niacinamide", "Retinol", "Peptides"],
  },
  {
    id: 3,
    name: "Mystic Bloom Parfum",
    price: 95.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=750&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=750&fit=crop&crop=center",
    category: "Fragrance",
    subcategory: "Eau de Parfum",
    description: "An enchanting blend of rare florals and warm amber notes.",
    badge: "Limited",
    rating: 4.7,
    reviewCount: 156,
    colors: null,
    isNew: false,
    isOnSale: false,
    ingredients: ["Rose Absolute", "Amber", "Sandalwood"],
  },
  {
    id: 4,
    name: "Ethereal Skin Tint",
    price: 42.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=750&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=750&fit=crop&crop=center",
    category: "Makeup",
    subcategory: "Face",
    description: "A breathable, light-coverage tint for a naturally flawless look.",
    badge: "Trending",
    rating: 4.6,
    reviewCount: 203,
    colors: ["#F5DEB3", "#DEB887", "#CD853F", "#A0522D", "#8B4513"],
    isNew: false,
    isOnSale: false,
    ingredients: ["Hyaluronic Acid", "SPF 30", "Vitamin C"],
  },
  {
    id: 5,
    name: "Rose Gold Highlighter",
    price: 38.00,
    originalPrice: 45.00,
    image: "https://images.unsplash.com/photo-1583241800942-aa3b9ab2ebe8?w=600&h=750&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&h=750&fit=crop&crop=center",
    category: "Makeup",
    subcategory: "Face",
    description: "Luminous powder highlighter for an ethereal glow.",
    badge: "Sale",
    rating: 4.5,
    reviewCount: 87,
    colors: ["#FFD700", "#FFC0CB", "#E6E6FA"],
    isNew: false,
    isOnSale: true,
    ingredients: ["Mica", "Pearl Powder", "Jojoba Oil"],
  },
  {
    id: 6,
    name: "Velvet Dream Foundation",
    price: 52.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=750&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&h=750&fit=crop&crop=center",
    category: "Makeup",
    subcategory: "Face",
    description: "Full-coverage foundation with a velvety, airbrushed finish.",
    badge: "Bestseller",
    rating: 4.8,
    reviewCount: 312,
    colors: ["#FDBCB4", "#E7B8A8", "#D1A3A4", "#A77B5B", "#6F4E37"],
    isNew: false,
    isOnSale: false,
    ingredients: ["Hyaluronic Acid", "SPF 25", "Vitamin E"],
  },
  {
    id: 7,
    name: "Botanical Eye Cream",
    price: 65.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&h=750&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=750&fit=crop&crop=center",
    category: "Skincare",
    subcategory: "Eye Care",
    description: "Luxurious eye cream that reduces puffiness and fine lines.",
    badge: "New",
    rating: 4.7,
    reviewCount: 45,
    colors: null,
    isNew: true,
    isOnSale: false,
    ingredients: ["Caffeine", "Peptides", "Botanical Extracts"],
  },
  {
    id: 8,
    name: "Sunset Blush Palette",
    price: 44.00,
    originalPrice: 52.00,
    image: "https://images.unsplash.com/photo-1583241800942-aa3b9ab2ebe8?w=600&h=750&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=750&fit=crop&crop=center",
    category: "Makeup",
    subcategory: "Cheeks",
    description: "Four harmonious blush shades inspired by golden hour.",
    badge: "Sale",
    rating: 4.6,
    reviewCount: 178,
    colors: ["#FF6B6B", "#FFB347", "#FF7F7F", "#FFE4E1"],
    isNew: false,
    isOnSale: true,
    ingredients: ["Natural Pigments", "Vitamin E", "Jojoba Oil"],
  },
];

const categories = [
  { name: "All Products", count: mockProducts.length },
  { name: "Makeup", count: mockProducts.filter(p => p.category === "Makeup").length },
  { name: "Skincare", count: mockProducts.filter(p => p.category === "Skincare").length },
  { name: "Fragrance", count: mockProducts.filter(p => p.category === "Fragrance").length },
];

const subcategories = [
  "All",
  "Lips",
  "Face",
  "Cheeks",
  "Eyes",
  "Serums",
  "Cleansers",
  "Eye Care",
  "Eau de Parfum",
  "Body",
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "bestselling", label: "Best Selling" },
];

const priceRanges = [
  { min: 0, max: 30, label: "Under $30" },
  { min: 30, max: 50, label: "$30 - $50" },
  { min: 50, max: 80, label: "$50 - $80" },
  { min: 80, max: 999, label: "$80+" },
];

// Floating Animation Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-pink-200 rounded-full opacity-40 animate-float"
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

// Filter Sidebar Component
const FilterSidebar = ({ 
  isOpen, 
  onClose, 
  selectedCategory, 
  onCategoryChange,
  selectedSubcategory,
  onSubcategoryChange,
  selectedPriceRange,
  onPriceRangeChange,
  showOnSale,
  onSaleToggle,
  showNewProducts,
  onNewToggle,
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 bg-white shadow-xl lg:shadow-none
        transform transition-transform duration-300 ease-in-out z-50 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:w-64 lg:block overflow-y-auto
      `}>
        <div className="p-6 border-b border-gray-200 lg:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => onCategoryChange(category.name)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm flex items-center justify-between ${
                    selectedCategory === category.name
                      ? 'bg-pink-50 text-pink-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs text-gray-400">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Subcategories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Product Type
            </h3>
            <div className="space-y-2">
              {subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => onSubcategoryChange(subcategory)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                    selectedSubcategory === subcategory
                      ? 'bg-pink-50 text-pink-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Price Range
            </h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => onPriceRangeChange(range)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                    selectedPriceRange?.label === range.label
                      ? 'bg-pink-50 text-pink-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Special Filters */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Special Offers
            </h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showOnSale}
                  onChange={onSaleToggle}
                  className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                />
                <span className="ml-2 text-sm text-gray-600">Sale Items</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showNewProducts}
                  onChange={onNewToggle}
                  className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                />
                <span className="ml-2 text-sm text-gray-600">New Arrivals</span>
              </label>
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              onCategoryChange("All Products");
              onSubcategoryChange("All");
              onPriceRangeChange(null);
              onSaleToggle(false);
              onNewToggle(false);
            }}
            className="w-full py-2.5 px-4 text-sm font-medium text-pink-600 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

// Product Card Component
const ProductCard = ({ product, viewMode = "grid" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Bestseller": return "bg-emerald-100 text-emerald-700";
      case "New": return "bg-blue-100 text-blue-700";
      case "Limited": return "bg-purple-100 text-purple-700";
      case "Trending": return "bg-orange-100 text-orange-700";
      case "Sale": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  if (viewMode === "list") {
    return (
      <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <div className="flex p-6">
          <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
            <img
              src={isHovered && product.hoverImage ? product.hoverImage : product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              onError={(e) => (e.target.src = "https://placehold.co/300x300/cccccc/FFFFFF?text=Product+Error")}
            />
            {product.badge && (
              <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-full ${getBadgeColor(product.badge)}`}>
                {product.badge}
              </span>
            )}
          </div>
          
          <div className="flex-1 ml-6 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{product.category} • {product.subcategory}</p>
                </div>
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isFavorited ? 'text-pink-500 bg-pink-50' : 'text-gray-400 hover:text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  <Heart size={20} className={isFavorited ? 'fill-current' : ''} />
                </button>
              </div>
              
              <p className="text-gray-600 mt-2 text-sm line-clamp-2">{product.description}</p>
              
              {/* Rating */}
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all">
                  <Eye size={18} />
                </button>
                <button className="px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-pink-600 transition-colors text-sm font-medium">
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          onError={(e) => (e.target.src = "https://placehold.co/400x533/cccccc/FFFFFF?text=Product+Error")}
        />
        
        {/* Badges */}
        {product.badge && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full ${getBadgeColor(product.badge)} shadow-sm`}>
            {product.badge}
          </span>
        )}
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className={`p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg ${
              isFavorited 
                ? 'bg-pink-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-pink-50 hover:text-pink-500'
            }`}
          >
            <Heart size={18} className={isFavorited ? 'fill-current' : ''} />
          </button>
          <button className="p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-all duration-300 shadow-lg">
            <Eye size={18} />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-gray-900 text-white py-2.5 rounded-full hover:bg-pink-600 transition-colors text-sm font-medium shadow-lg backdrop-blur-sm">
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">
            ({product.reviewCount})
          </span>
        </div>

        {/* Colors */}
        {product.colors && (
          <div className="flex items-center space-x-1 mb-3">
            {product.colors.slice(0, 4).map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-5 h-5 rounded-full border-2 transition-all ${
                  selectedColor === index ? 'border-gray-800 scale-110' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 4}</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="p-2 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all">
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Products Page Component
export const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [showOnSale, setShowOnSale] = useState(false);
  const [showNewProducts, setShowNewProducts] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Filter and sort products
  useEffect(() => {
    let filtered = [...mockProducts];

    // Category filter
    if (selectedCategory !== "All Products") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Subcategory filter
    if (selectedSubcategory !== "All") {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
    }

    // Price range filter
    if (selectedPriceRange) {
      filtered = filtered.filter(product => 
        product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max
      );
    }

    // Sale filter
    if (showOnSale) {
      filtered = filtered.filter(product => product.isOnSale);
    }

    // New products filter
    if (showNewProducts) {
      filtered = filtered.filter(product => product.isNew);
    }

    // Sort products
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "bestselling":
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, selectedSubcategory, selectedPriceRange, showOnSale, showNewProducts, sortBy]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50/30 via-white to-pink-50/20 relative">
      <FloatingParticles />
      
      <div className="relative max-w-screen-2xl mx-auto">
        <div className="flex min-h-screen">
          {/* Filter Sidebar */}
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedSubcategory={selectedSubcategory}
            onSubcategoryChange={setSelectedSubcategory}
            selectedPriceRange={selectedPriceRange}
            onPriceRangeChange={setSelectedPriceRange}
            showOnSale={showOnSale}
            onSaleToggle={(checked) => setShowOnSale(checked)}
            showNewProducts={showNewProducts}
            onNewToggle={(checked) => setShowNewProducts(checked)}
          />

          {/* Main Content */}
          <div className="flex-1 lg:ml-4">
            {/* Header */}
            <div className=" top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-pink-100 shadow-sm">
              <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
                      {selectedCategory}
                    </h1>
                    <p className="text-gray-600 mt-1">
                      Discover {filteredProducts.length} curated products
                    </p>
                  </div>
                  
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex items-center px-4 py-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-colors"
                  >
                    <Filter size={18} className="mr-2" />
                    Filters
                  </button>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    {/* Sort Dropdown */}
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ArrowUpDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === "grid" ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      <Grid3X3 size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === "list" ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className="px-4 sm:px-6 lg:px-8 py-8">
              {currentProducts.length > 0 ? (
                <>
                  <div className={
                    viewMode === "grid" 
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                      : "space-y-6"
                  }>
                    {currentProducts.map((product) => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        viewMode={viewMode}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center mt-16 space-x-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                            currentPage === page
                              ? 'bg-pink-600 text-white'
                              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                /* No Products Found */
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Try adjusting your filters to see more results
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All Products");
                      setSelectedSubcategory("All");
                      setSelectedPriceRange(null);
                      setShowOnSale(false);
                      setShowNewProducts(false);
                    }}
                    className="inline-flex items-center px-6 py-3 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(3deg); }
          66% { transform: translateY(5px) rotate(-2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
