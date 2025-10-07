import React, { useState, useEffect, useRef } from 'react';

const Categories = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = [
    {
      id: 1,
      name: 'Phones',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3438 7.33353 14.3438 8.84375V47.1562C14.3438 48.6665 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6562 48.6665 41.6562 47.1562V8.84375C41.6562 7.33353 40.4477 6.125 38.9375 6.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25.6667 7H30.3333" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 44.0833V44.1" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="15.1667" y1="39.8333" x2="40.8333" y2="39.8333" stroke="black" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 2,
      name: 'Computers',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.6667 9.33334H9.33333C8.04467 9.33334 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33334 46.6667 9.33334Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.3333 46.6667H39.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 37.3333V46.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M35 37.3333V46.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 32H48" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 3,
      name: 'SmartWatch',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 14H21C18.7909 14 17 15.7909 17 18V28C17 30.2091 18.7909 32 21 32H35C37.2091 32 39 30.2091 39 28V18C39 15.7909 37.2091 14 35 14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 32V39C21 40.6569 22.3431 42 24 42H32C33.6569 42 35 40.6569 35 39V32" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 14V7C21 5.34315 22.3431 4 24 4H32C33.6569 4 35 5.34315 35 7V14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="25" y1="23" x2="25" y2="27" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          <line x1="28" y1="23" x2="31" y2="23" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 4,
      name: 'Camera',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6667 16.3333H14L16.3333 11.6667H28L30.3333 16.3333H44.3333C45.0406 16.3333 45.7189 16.6143 46.219 17.1144C46.719 17.6145 47 18.2928 47 19V42C47 42.7072 46.719 43.3855 46.219 43.8856C45.7189 44.3857 45.0406 44.6667 44.3333 44.6667H11.6667C10.9594 44.6667 10.2811 44.3857 9.78105 43.8856C9.28095 43.3855 9 42.7072 9 42V19C9 18.2928 9.28095 17.6145 9.78105 17.1144C10.2811 16.6143 10.9594 16.3333 11.6667 16.3333Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 37C32.4183 37 36 33.4183 36 29C36 24.5817 32.4183 21 28 21C23.5817 21 20 24.5817 20 29C20 33.4183 23.5817 37 28 37Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      isActive: true
    },
    {
      id: 5,
      name: 'HeadPhones',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.3333 28V35C16.3333 36.2377 15.3376 37.2333 14.1 37.2333H11.6667C10.429 37.2333 9.43333 36.2377 9.43333 35V28C9.43333 20.8203 15.1537 15.1 22.3333 15.1H23.3333C30.513 15.1 36.2333 20.8203 36.2333 28V35C36.2333 36.2377 35.2376 37.2333 34 37.2333H31.5667C30.329 37.2333 29.3333 36.2377 29.3333 35V28" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 6,
      name: 'Gaming',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.6667 14H9.33333C6.57191 14 4.33333 16.2386 4.33333 19V35C4.33333 37.7614 6.57191 40 9.33333 40H46.6667C49.4281 40 51.6667 37.7614 51.6667 35V19C51.6667 16.2386 49.4281 14 46.6667 14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 23.3333V30.3333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.5 26.8333H17.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="35" cy="23.3333" r="1.16667" fill="black"/>
          <circle cx="39.6667" cy="26.8333" r="1.16667" fill="black"/>
        </svg>
      )
    },
    {
      id: 7,
      name: 'Phones',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3438 7.33353 14.3438 8.84375V47.1562C14.3438 48.6665 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6562 48.6665 41.6562 47.1562V8.84375C41.6562 7.33353 40.4477 6.125 38.9375 6.125Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25.6667 7H30.3333" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 44.0833V44.1" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="15.1667" y1="39.8333" x2="40.8333" y2="39.8333" stroke="black" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 8,
      name: 'Computers',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.6667 9.33334H9.33333C8.04467 9.33334 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33334 46.6667 9.33334Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.3333 46.6667H39.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 37.3333V46.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M35 37.3333V46.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 32H48" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

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

  return (
    <div className="w-full flex items-center justify-center bg-white py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1170px] mx-auto ">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="w-4 sm:w-5 h-8 sm:h-10 bg-red-500 rounded"></div>
            <h3 className="text-red-500 font-semibold text-sm sm:text-base">Categories</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Inter']">Browse By Category</h2>
            
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

        {/* Categories Slider */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 lg:gap-[30px] pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex-shrink-0 flex flex-col items-center justify-center rounded border transition-all cursor-pointer w-[170px] h-[145px] ${
                category.isActive
                  ? 'bg-red-500 border-red-500 text-white'
                  : 'bg-white border-gray-300 hover:bg-red-500 hover:border-red-500 hover:text-white group'
              }`}
            >
              <div className={`mb-4 ${category.isActive ? '[&_path]:stroke-white [&_line]:stroke-white [&_circle]:fill-white' : 'group-hover:[&_path]:stroke-white group-hover:[&_line]:stroke-white group-hover:[&_circle]:fill-white'}`}>
                {category.icon}
              </div>
              <span className="text-base font-normal">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="border-b border-gray-200 mt-8 sm:mb-12 lg:mt-16"></div>
        
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Categories;