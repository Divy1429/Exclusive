import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import det1 from '../../assets/det1.png';
import det2 from '../../assets/det2.png';
import det3 from '../../assets/det3.png';
import det4 from '../../assets/det4.png';
import detmain from '../../assets/detmain.png';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(2);
  const [isFavorite, setIsFavorite] = useState(false);
  const [relatedFavorites, setRelatedFavorites] = useState({});

  const productImages = [det1, det2, det3, det4];

  const colors = [
    { name: 'white', value: '#A0BCE0', border: '#D0D0D0' },
    { name: 'red', value: '#E07575', border: '#DB4444' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const relatedProducts = [
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      originalPrice: 160,
      discount: '-40%',
      rating: 5,
      reviews: 88,
      image: det1
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960,
      originalPrice: 1160,
      discount: '-35%',
      rating: 4,
      reviews: 75,
      image: det2,
      showAddToCart: true
    },
    {
      id: 3,
      name: 'IPS LCD Gaming Monitor',
      price: 370,
      originalPrice: 400,
      discount: '-30%',
      rating: 5,
      reviews: 99,
      image: det3
    },
    {
      id: 4,
      name: 'RGB liquid CPU Cooler',
      price: 160,
      originalPrice: 170,
      discount: null,
      rating: 4.5,
      reviews: 65,
      image: det4
    }
  ];

  const handleQuantityDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleBuyNow = () => {
    alert(`Purchase Details:\n\nProduct: Havic HV G-92 Gamepad\nColor: ${selectedColor}\nSize: ${selectedSize}\nQuantity: ${quantity}\nTotal: $${(192 * quantity).toFixed(2)}`);
  };

  const toggleRelatedFavorite = (productId) => {
    setRelatedFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleAddToCart = (productName, price) => {
    alert(`Added to cart:\n${productName}\nPrice: $${price}`);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-yellow-400"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33"/>
</svg>
</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="text-yellow-400"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="black"/>
</svg>

</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="black"/>
</svg>
</span>);
      }
    }
    return stars;
  };

  return (
    <div className="w-full bg-white py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 sxl:py-20 sxl:px-0">
      <div className="max-w-[1170px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm mb-6 sm:mb-8 lg:mb-10 sxl:text-sm sxl:mb-20 flex-wrap">
          <Link to="/my-account" className="text-gray-400 hover:text-black cursor-pointer">Account</Link>
          <span className="text-gray-400">/</span>
          <Link to="/gaming" className="text-gray-400 hover:text-black cursor-pointer">Gaming</Link>
          <span className="text-gray-400">/</span>
          <span className="text-black">Havic HV G-92 Gamepad</span>
        </div>

        <div className="flex flex-col xl:flex-row justify-between gap-8 xl:gap-0 2xl:justify-between">
         {/* Left Section - Images */}
<div className="flex w-full xl:max-w-[698px] flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-4">
  {/* Thumbnail Images */}
  <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 md:gap-4 xl:gap-4 overflow-x-auto sm:overflow-visible">
    {productImages.map((image, index) => (
      <div
        key={index}
        onClick={() => setSelectedImage(index)}
        className={`
          w-20 h-16 
          sm:w-24 sm:h-20 
          md:w-28 md:h-24 
          lg:w-32 lg:h-28 
          xl:w-[170px] xl:h-[138px]
          overflow-hidden bg-gray-100 rounded cursor-pointer 
          flex items-center justify-center flex-shrink-0 
          transition-all border-2 
          ${selectedImage === index ? 'border-black' : 'border-transparent hover:border-gray-300'}
        `}
      >
        <img 
          src={image} 
          alt={`View ${index + 1}`} 
          className="w-full h-full object-contain rounded-[4px]"
        />
      </div>
    ))}
  </div>

  {/* Main Image */}
  <div className="
    flex-1 bg-gray-100 rounded 
    flex items-center justify-center 
    h-64 
    sm:h-80 
    md:h-96 
    lg:h-[450px] 
    xl:h-[600px] xl:w-[500px]
    w-full
  ">
    <img 
      src={detmain} 
      alt="Product main view" 
      className="w-full h-full object-contain rounded-[4px]"
    />
  </div>
</div>
          {/* Right Section - Product Info */}
<div className="flex items-start xl:items-end justify-start xl:justify-end w-full xl:w-auto sxl:items-end sxl:justify-end">
  <div className="flex flex-col items-start justify-end w-full xl:max-w-[400px] sxl:max-w-[400px] h-full sxl:max-h-[600px]">
    {/* Product Title */}
    <h1 className="text-xl sm:text-2xl 2xl:text-2xl font-semibold font-['Inter'] tracking-tight mb-3 sm:mb-4 2xl:mb-4">Havic HV G-92 Gamepad</h1>

    {/* Rating and Stock */}
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 2xl:gap-4 flex-wrap mb-2 sm:mb-3 2xl:mb-3">
      <div className="flex items-center gap-2">
        <div className="flex">
          {renderStars(4)}
        </div>
        <span className="text-xs sm:text-sm 2xl:text-sm text-gray-500">(150 Reviews)</span>
      </div>
      <span className="text-gray-300">|</span>
      <span className="text-[#00FF66] text-xs sm:text-sm 2xl:text-sm">In Stock</span>
    </div>

    {/* Price */}
    <div className="text-xl sm:text-2xl 2xl:text-2xl font-['Inter'] mb-4 sm:mb-5 md:mb-6 2xl:mb-6">$192.00</div>

    {/* Description */}
    <p className="text-xs sm:text-sm 2xl:text-sm leading-relaxed pb-4 sm:pb-5 md:pb-6 2xl:pb-6 border-b border-gray-300 mb-4 sm:mb-5 md:mb-6 2xl:mb-6">
      PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
    </p>

    {/* Colors */}
    <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 2xl:gap-6 mb-4 sm:mb-5 md:mb-6 2xl:mb-6">
      <span className="text-base sm:text-lg md:text-xl 2xl:text-xl font-['Inter']">Colours:</span>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color.name)}
            className={`relative w-5 h-5 2xl:w-5 2xl:h-5 rounded-full transition-all cursor-pointer hover:scale-110 ${
              selectedColor === color.name 
                ? 'ring-2 ring-black ring-offset-2' 
                : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
            }`}
            style={{ 
              backgroundColor: color.value,
              border: color.name === 'white' ? '1px solid #e5e7eb' : 'none'
            }}
          />
        ))}
      </div>
    </div>

    {/* Sizes */}
    <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 2xl:gap-6 mb-4 sm:mb-5 md:mb-6 2xl:mb-6">
      <span className="text-base sm:text-lg md:text-xl 2xl:text-xl font-['Inter']">Size:</span>
      <div className="flex gap-2 sm:gap-3 md:gap-4 2xl:gap-4">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-7 h-7 sm:w-8 sm:h-8 2xl:w-8 2xl:h-8 rounded-[4px] border text-xs sm:text-sm 2xl:text-sm font-medium transition-all cursor-pointer hover:scale-105 ${
              selectedSize === size
                ? 'bg-[#DB4444] text-white border-red-500'
                : 'border-gray-400 hover:border-red-500 hover:bg-gray-50'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    {/* Quantity and Buy Now */}
    <div className="flex items-stretch gap-2 sm:gap-3 md:gap-4 2xl:gap-4 mb-6 sm:mb-8 md:mb-10 2xl:mb-10 w-full flex-wrap sm:flex-nowrap">
      {/* Quantity Selector */}
      <div className="flex items-center border border-gray-400 rounded overflow-hidden">
        <button
          onClick={handleQuantityDecrease}
          className="w-9 h-10 sm:w-10 sm:h-11 2xl:w-10 2xl:h-11 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors text-lg sm:text-xl 2xl:text-xl border-r border-gray-400 cursor-pointer hover:scale-105"
        >
          −
        </button>
        <div className="w-16 h-10 sm:w-20 sm:h-11 2xl:w-20 2xl:h-11 flex items-center justify-center font-medium text-lg sm:text-xl 2xl:text-xl">
          {quantity}
        </div>
        <button
          onClick={handleQuantityIncrease}
          className="w-9 h-10 sm:w-10 sm:h-11 2xl:w-10 2xl:h-11 flex items-center justify-center bg-[#DB4444] hover:bg-red-600 text-white transition-colors text-lg sm:text-xl 2xl:text-xl border-l border-gray-400 cursor-pointer hover:scale-105"
        >
          +
        </button>
      </div>

      {/* Buy Now Button */}
      <button
        onClick={handleBuyNow}
        className="flex-1 px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-12 h-10 sm:h-11 2xl:h-11 bg-[#DB4444] hover:bg-red-600 text-white rounded font-medium transition-all text-sm sm:text-base 2xl:text-base cursor-pointer hover:scale-105 hover:shadow-lg"
      >
        Buy Now
      </button>

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="w-10 h-10 sm:w-10 sm:h-11 2xl:w-10 2xl:h-11 flex items-center justify-center border border-gray-400 rounded hover:bg-gray-50 transition-all cursor-pointer hover:scale-105 hover:shadow-md"
      >
        <svg className={`w-5 h-5 sm:w-6 sm:h-6 2xl:w-6 2xl:h-6 transition-all ${isFavorite ? 'fill-red-500 text-red-500' : 'fill-none hover:text-red-500'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>

    {/* Delivery Info */}
    <div className="border w-full border-gray-400 rounded">
      {/* Free Delivery */}
      <div className="flex w-full items-start gap-3 sm:gap-4 2xl:gap-4 p-3 sm:p-4 2xl:p-4 border-b border-gray-400">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-10 2xl:h-10 text-black flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_1)">
            <path d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M31.3333 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_1_1">
              <rect width="40" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <div>
          <h3 className="font-medium text-sm sm:text-base 2xl:text-base mb-1 sm:mb-2 2xl:mb-2">Free Delivery</h3>
          <p className="text-xs 2xl:text-xs underline cursor-pointer">
            Enter your postal code for Delivery Availability
          </p>
        </div>
      </div>

      {/* Return Delivery */}
      <div className="flex items-start gap-3 sm:gap-4 2xl:gap-4 p-3 sm:p-4 2xl:p-4">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-10 2xl:h-10 text-black flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2_1)">
            <path d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.64328 12.2619 7.51935 15.0001M6.66602 10.0001V15.0001H11.666" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1975C21.2467 33.5764 24.2266 32.9793 26.7907 31.498C29.3547 30.0167 31.3554 27.7382 32.4794 25M33.3327 30V25H28.3327" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_2_1">
              <rect width="40" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <div>
          <h3 className="font-medium text-sm sm:text-base 2xl:text-base mb-1 sm:mb-2 2xl:mb-2">Return Delivery</h3>
          <p className="text-xs 2xl:text-xs">
            Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

  {/* Related Items Section */}
<div className="mt-32">
  {/* Section Header */}
  <div className="flex items-center gap-4 mb-16">
    <div className="w-5 h-10 bg-red-500 rounded"></div>
    <h2 className="text-red-500 font-semibold text-base">Related Item</h2>
  </div>

  {/* Related Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
    {relatedProducts.map((product) => (
      <div key={product.id} className="group cursor-pointer">
        {/* Product Card */}
        <div className="relative bg-neutral-100 rounded mb-4 flex items-center justify-center h-[250px] overflow-hidden">
          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded">
              {product.discount}
            </div>
          )}

          {/* Action Icons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button 
              onClick={() => toggleRelatedFavorite(product.id)}
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm cursor-pointer hover:scale-110 hover:shadow-md"
            >
              <svg className={`w-5 h-5 transition-all ${relatedFavorites[product.id] ? 'fill-red-500 text-red-500' : 'fill-none text-black hover:text-red-500'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm cursor-pointer hover:scale-110 hover:shadow-md">
              <svg className="w-5 h-5 text-black hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Product Image */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Add To Cart Button - Only shows on hover */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button 
              onClick={() => handleAddToCart(product.name, product.price)}
              className="w-full bg-black text-white py-2 text-base font-medium hover:bg-gray-900 transition-all cursor-pointer hover:shadow-lg"
            >
              Add To Cart
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-medium text-base">{product.name}</h3>
          
          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-red-500 font-medium text-base">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-base">${product.originalPrice}</span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-500 font-semibold">({product.reviews})</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default ProductDetails;