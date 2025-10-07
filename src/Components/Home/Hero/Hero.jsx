import React, { useState, useRef, useEffect } from 'react';
import applogo from '../../../assets/app-logo.png';
import pro from '../../../assets/14pro.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    { name: "Woman's Fashion", hasSubmenu: true },
    { name: "Men's Fashion", hasSubmenu: true },
    { name: "Electronics", hasSubmenu: false },
    { name: "Home & Lifestyle", hasSubmenu: false },
    { name: "Medicine", hasSubmenu: false },
    { name: "Sports & Outdoor", hasSubmenu: false },
    { name: "Baby's & Toys", hasSubmenu: false },
    { name: "Groceries & Pets", hasSubmenu: false },
    { name: "Health & Beauty", hasSubmenu: false },
  ];

  const slides = [0, 1, 2, 3, 4];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCategories(false);
      }
    };

    if (showCategories) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCategories]);

  return (
    <div className="w-full bg-white">
      {/* Main container matching header width */}
      <div className="max-w-[1170px] w-full mx-auto ">
        <div className="flex flex-col lg:flex-row gap-0 pt-4 sm:pt-6 md:pt-10">
          
          {/* Categories Button for Mobile/Tablet */}
          <div className="lg:hidden relative mb-4" ref={dropdownRef}>
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center justify-between w-full sm:w-auto gap-2 border border-gray-300 rounded-md px-4 py-2.5 font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <span>Browse Categories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transform transition-transform ${showCategories ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Panel */}
            {showCategories && (
              <div className="absolute top-full left-0 mt-2 w-full sm:w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                <nav className="p-3">
                  {categories.map((category, index) => (
                    <div key={index} className="group">
                      <div className={`flex items-center justify-between hover:bg-gray-50 rounded-md px-3 py-2.5 cursor-pointer transition-colors ${index === categories.length - 1 ? '' : 'mb-1'}`}>
                        <span className="text-sm sm:text-base text-gray-900">{category.name}</span>
                        {category.hasSubmenu && (
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 16 16" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-900"
                          >
                            <path 
                              d="M6 12L10 8L6 4" 
                              stroke="currentColor" 
                              strokeWidth="1.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Categories Sidebar - Desktop Only */}
          <aside className="hidden lg:block w-full lg:w-[233px] mb-0 sm:mb-10 max-sm:mb-5 lg:pr-4 border-r-0 lg:border-r border-gray-200">
            <nav className="space-y-0">
              {categories.map((category, index) => (
                <div key={index} className="group">
                  <div className={`flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors ${index === categories.length - 1 ? '' : 'pb-4'}`}>
                    <span className="text-base text-gray-900">{category.name}</span>
                    {category.hasSubmenu && (
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-900"
                      >
                        <path 
                          d="M6 12L10 8L6 4" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          {/* Hero Banner */}
          <div className="flex-1 w-full lg:max-w-[calc(100%-233px)] sxl:w-[892px] lg:pl-[45px]">
            <div className="bg-black overflow-hidden relative h-[280px] sm:h-[320px] md:h-[340px] sxl:h-[344px] rounded-sm">
              <div className="flex h-full pl-4 sm:pl-8 md:pl-12 sxl:pl-16">
                
                {/* Left Content */}
                <div className="flex-1 text-white space-y-2 sm:space-y-3 md:space-y-4 sxl:space-y-5 mt-6 sm:mt-8 md:mt-12 sxl:mt-[58px] z-10 max-w-[294px]">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 sxl:gap-6">
                    <img src={applogo} alt="App Logo" className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] sxl:w-[50px] sxl:h-[50px]" />
                    <h2 className="text-xs sm:text-sm md:text-base font-normal">iPhone 14 Series</h2>
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl md:text-4xl sxl:text-5xl font-semibold font-['Inter'] leading-tight sm:leading-tight md:leading-tight sxl:leading-[60px] w-full text-nowrap tracking-normal sm:tracking-wide md:tracking-wider sxl:tracking-widest">
                    Up to 10%<br />off Voucher
                  </h1>
                  
                  <button className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base group mt-3 sm:mt-4 md:mt-6 sxl:mt-8 cursor-pointer">
                    <span className="border-b border-white pb-0.5 sm:pb-1">Shop Now</span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5 md:w-6 md:h-6"
                    >
                      <path 
                        d="M5 12H19M19 12L12 5M19 12L12 19" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Right Image - iPhone */}
                <div className="hidden sm:flex sxl:flex items-end justify-end flex-1 relative">
                  <div className="relative h-full w-full max-w-[360px] sm:max-w-[400px] md:max-w-[450px] sxl:max-w-[496px]">
                    <img 
                      src={pro} 
                      alt="iPhone 14 Pro" 
                      className="absolute pt-4 sm:pt-[14px] sxl:pt-[16px] w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 sm:left-[50%] md:left-[52%] lg:left-[55%] sxl:left-[429px] transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
                {slides.map((slide) => (
                  <button
                    key={slide}
                    onClick={() => setCurrentSlide(slide)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === slide 
                        ? 'bg-red-500 ring-2 ring-white ring-opacity-50' 
                        : 'bg-gray-500 bg-opacity-50 hover:bg-opacity-75'
                    }`}
                    aria-label={`Go to slide ${slide + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Hero;