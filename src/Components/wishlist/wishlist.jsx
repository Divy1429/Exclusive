import React from 'react';
import { Link } from 'react-router-dom';
import cooler from '../../assets/cooler.png';
import gucci from '../../assets/gucci.png';
import table from '../../assets/table.png';
import coat from '../../assets/coat.png';

const Wishlist = () => {
  const wishlistProducts = [
    {
      id: 1,
      name: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160,
      discount: '-35%',
      image: gucci,
      bgColor: 'bg-gray-100'
    },
    {
      id: 2,
      name: 'RGB liquid CPU Cooler',
      price: 1960,
      originalPrice: null,
      image: cooler,
      bgColor: 'bg-gray-50'
    },
    {
      id: 3,
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      originalPrice: null,
      image: table,
      bgColor: 'bg-gray-100'
    },
    {
      id: 4,
      name: 'Quilted Satin Jacket',
      price: 750,
      originalPrice: null,
      image: coat,
      bgColor: 'bg-gray-50'
    }
  ];

  const justForYouProducts = [
    {
      id: 5,
      name: 'ASUS FHD Gaming Laptop',
      price: 960,
      originalPrice: 1160,
      discount: '-35%',
      rating: 5,
      reviews: 65,
      image: coat,
      bgColor: 'bg-gray-100'
    },
    {
      id: 6,
      name: 'IPS LCD Gaming Monitor',
      price: 1160,
      originalPrice: null,
      rating: 5,
      reviews: 65,
      image: gucci,
      bgColor: 'bg-gray-50'
    },
    {
      id: 7,
      name: 'HAVIT HV-G92 Gamepad',
      price: 560,
      originalPrice: null,
      rating: 5,
      reviews: 65,
      badge: 'NEW',
      image: cooler,
      bgColor: 'bg-gray-100'
    },
    {
      id: 8,
      name: 'AK-900 Wired Keyboard',
      price: 200,
      originalPrice: null,
      rating: 5,
      reviews: 65,
      image: table,
      bgColor: 'bg-gray-50'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        <svg width="20" height="20" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="currentColor"/>
        </svg>
      </span>
    ));
  };

  return (
    <div className="w-full bg-white py-8 sm:py-12 sxl:pt-20 sxl:pb-35">
      <div className="max-w-[1170px] w-full mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8 sm:mb-12 lg:mb-16">
          <Link to="/" className="text-gray-400 hover:text-black cursor-pointer transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">Wishlist</span>
        </div>

        {/* Wishlist Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12 sxl:mb-16">
          <h2 className="text-xl sm:text-2xl font-normal font-['Inter']">
            Wishlist ({wishlistProducts.length})
          </h2>
          <button className="bg-white hover:bg-gray-50 border border-gray-300 text-black px-8 sm:px-10 sxl:px-12 py-3 sm:py-3.5 sxl:py-4 rounded font-medium transition-colors cursor-pointer text-sm sm:text-base w-fit">
            Move All To Bag
          </button>
        </div>

        {/* Wishlist Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 sxl:gap-[30px] mb-12 sm:mb-16 sxl:mb-20">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="group">
              {/* Product Image Container */}
              <div className={`${product.bgColor} flex items-center justify-center rounded-[4px] p-3 mb-4 relative overflow-hidden w-full h-[220px] sm:h-[240px] sxl:h-[250px]`}>
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-500 text-white text-[10px] sm:text-xs font-medium px-2 py-1 rounded z-10">
                    {product.discount}
                  </div>
                )}

                {/* Delete Icon */}
                <button className="absolute top-2 sm:top-3 right-2 sm:right-3 w-8 h-8 sm:w-[34px] sm:h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors cursor-pointer z-10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                    <path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Product Image */}
                <div className="w-full h-full max-h-[150px] sm:max-h-[170px] sxl:max-h-[180px] max-w-[160px] sm:max-w-[180px] sxl:max-w-[190px] flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Add to Cart Button - Appears on hover */}
                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-gray-800 transition-all cursor-pointer opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 w-5 h-5 sm:w-6 sm:h-6">
                      <path d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.75 3.75H5.75L8 16.5H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Add To Cart
                  </button>
                </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-medium text-sm sm:text-base line-clamp-1">{product.name}</h3>
                
                {/* Price */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-red-500 font-semibold text-sm sm:text-base">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm sm:text-base">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Just For You Section */}
        <div className="border-t border-gray-200 pt-8 sm:pt-12 sxl:pt-16">
          <div className="flex items-center justify-between mb-8 sm:mb-12 sxl:mb-16">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-4 sm:w-5 h-8 sm:h-10 bg-red-500 rounded"></div>
              <h2 className="text-xl sm:text-2xl font-normal font-['Inter']">Just For You</h2>
            </div>
            <button className="bg-white hover:bg-gray-50 border border-gray-300 text-black px-8 sm:px-10 sxl:px-12 py-3 sm:py-3.5 sxl:py-4 rounded font-medium transition-colors cursor-pointer text-sm sm:text-base">
              See All
            </button>
          </div>

          {/* Just For You Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 sxl:gap-[30px]">
            {justForYouProducts.map((product) => (
              <div key={product.id} className="group">
                {/* Product Image Container */}
                <div className={`${product.bgColor} flex items-center justify-center rounded-[4px] p-3 mb-4 relative overflow-hidden w-full h-[220px] sm:h-[240px] sxl:h-[250px]`}>
                  {/* Discount/Badge */}
                  {product.discount && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-500 text-white text-[10px] sm:text-xs font-medium px-2 py-1 rounded z-10">
                      {product.discount}
                    </div>
                  )}
                  {product.badge && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-green-500 text-white text-[10px] sm:text-xs font-medium px-2 py-1 rounded z-10">
                      {product.badge}
                    </div>
                  )}

                  {/* Eye Icon */}
                  <button className="absolute top-2 sm:top-3 right-2 sm:right-3 w-8 h-8 sm:w-[34px] sm:h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer z-10">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                      <path d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  {/* Product Image */}
                  <div className="w-full h-full max-h-[150px] sm:max-h-[170px] sxl:max-h-[180px] max-w-[160px] sm:max-w-[180px] sxl:max-w-[190px] flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Add to Cart Button - Appears on hover */}
                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-gray-800 transition-all cursor-pointer opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 w-5 h-5 sm:w-6 sm:h-6">
                      <path d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.75 3.75H5.75L8 16.5H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Add To Cart
                  </button>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="font-medium text-sm sm:text-base line-clamp-1">{product.name}</h3>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-red-500 font-semibold text-sm sm:text-base">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm sm:text-base">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-gray-500 text-xs sm:text-sm font-semibold">({product.reviews})</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Wishlist;