import React, { useState, useEffect, useRef } from 'react';
import one from '../../../assets/1.png';
import two from '../../../assets/2.png';
import three from '../../../assets/3.png';
import four from '../../../assets/4.png';

const Todays = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const products = [
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      originalPrice: 160,
      discount: '-40%',
      rating: 5,
      reviews: 88,
      image: one
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960,
      originalPrice: 1160,
      discount: '-35%',
      rating: 4,
      reviews: 75,
      image: two,
     
    },
    {
      id: 3,
      name: 'IPS LCD Gaming Monitor',
      price: 370,
      originalPrice: 400,
      discount: '-30%',
      rating: 5,
      reviews: 99,
      image: three
    },
    {
      id: 4,
      name: 'S-Series Comfort Chair',
      price: 375,
      originalPrice: 400,
      discount: '-25%',
      rating: 4.5,
      reviews: 99,
      image: four
    },
    {
      id: 5,
      name: 'S-Series Comfort Chair',
      price: 375,
      originalPrice: 400,
      discount: '-25%',
      rating: 4.5,
      reviews: 99,
      image: four
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        <svg width="20" height="20" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33"/>
</svg>

      </span>
    ));
  };

  return (
    <div className="w-full flex   bg-white py-8 sm:py-12 lg:py-16  ">
      <div className="w-full max-w-[1170px]  mx-auto  overflow-x-auto  ">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10   ">
          <div className="flex gap-3 ">
            <div className="w-4 sm:w-5 h-8 sm:h-10 bg-red-500 rounded"></div>
            <h3 className="text-red-500 font-semibold text-sm sm:text-base">Today's</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-12 lg:gap-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Inter']">Flash Sales</h2>
              
              {/* Countdown Timer */}
              <div className="flex items-center gap-2 sm:gap-3 font-['Inter']">
                <div className="text-center">
                  <div className="text-xs text-gray-600 mb-1">Days</div>
                  <div className="text-[32px] font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                </div>
                <span className="text-[32px] text-red-500 font-bold">:</span>
                <div className="text-center">
                  <div className="text-xs text-gray-600 mb-1">Hours</div>
                  <div className="text-[32px] font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                </div>
                <span className="text-[32px] text-red-500 font-bold">:</span>
                <div className="text-center">
                  <div className="text-xs text-gray-600 mb-1">Minutes</div>
                  <div className="text-[32px] font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                </div>
                <span className="text-[32px] text-red-500 font-bold">:</span>
                <div className="text-center">
                  <div className="text-xs text-gray-600 mb-1">Seconds</div>
                  <div className="text-[32px] font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors ${
                  canScrollLeft 
                    ? 'bg-gray-100 hover:bg-gray-200 cursor-pointer' 
                    : 'bg-gray-50 cursor-not-allowed opacity-50'
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 5L4 12L11 19M4 12H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors ${
                  canScrollRight 
                    ? 'bg-gray-100 hover:bg-gray-200 cursor-pointer' 
                    : 'bg-gray-50 cursor-not-allowed opacity-50'
                }`}
              >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-[30px] mb-8 sm:mb-12 lg:mb-15 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="group relative flex-shrink-0">
              {/* Product Card */}
              <div className="bg-gray-50 flex items-center justify-center rounded-[4px] p-3 mb-4 relative overflow-hidden w-[270px] h-[250px]">
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                  {product.discount}
                </div>
                
                {/* Action Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                  </button>
                  <button className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                  </button>
                </div>
                
                {/* Product Image */}
                <div className="w-full h-full  max-h-[180px] max-w-[190px] flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className=" h-full w-full object-contain"
                  />
                </div>
                
                {/* Add to Cart Button (shown on hover for desktop, always visible for product 2) */}
                {product.showAddToCart && (
                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm font-medium hover:bg-gray-900 transition-colors cursor-pointer">
                    Add To Cart
                  </button>
                )}
                
                {/* Add to Cart on Hover for other products */}
                <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  Add To Cart
                </button>
              </div>
              
              {/* Product Info */}
              <div className="w-[270px]">
                <h3 className="font-medium text-base mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-red-500 font-medium text-base">${product.price}</span>
                  <span className="text-gray-400 line-through text-base">${product.originalPrice}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-medium ">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-500 text-sm font-semibold">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center">
          <button className="bg-[#DB4444] text-white px-8 sm:px-12 py-3 sm:py-4 rounded hover:bg-red-600 transition-colors text-sm sm:text-base font-medium cursor-pointer">
            View All Products
          </button>
        </div>

        {/* Bottom Border */}
        <div className="border-b border-gray-200 mt-8 sm:mt-12 lg:mt-16"></div>
        
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Todays;