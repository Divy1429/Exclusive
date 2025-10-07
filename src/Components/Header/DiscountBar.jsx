import React from 'react'

const DiscountBar = () => {
  return (
    <div className="w-full bg-black flex flex-col h-full min-h-[48px] sm:flex-row items-center justify-between px-4 py-3 sm:px-8 sm:py-0 md:px-16 lg:px-24 sxl:px-0 sxl:pl-[445px] sxl:pr-[136px] gap-4 sm:gap-8 md:gap-12 lg:gap-16 sxl:gap-[231px]">
      {/* Left side - Promotional message and ShopNow button */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 sxl:gap-[8px] text-left">
        <span className="text-white text-xs sm:text-sm md:text-sm lg:text-sm sxl:text-[14px] font-normal leading-tight text-center sm:text-left whitespace-nowrap sm:whitespace-normal">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <button className="text-white text-xs sm:text-sm md:text-sm lg:text-sm sxl:text-[14px] font-semibold underline hover:no-underline hover:text-gray-200 transition-all duration-200 whitespace-nowrap cursor-pointer">
          ShopNow
        </button>
      </div>

      {/* Right side - Language selector */}
      <div className="flex items-center justify-center sm:justify-end gap-1 md:gap-2 lg:gap-2 sxl:gap-[5px]">
        <span className="text-white text-xs sm:text-sm md:text-sm lg:text-sm sxl:text-[14px] font-normal">
          English
        </span>
        <button 
          className="text-white hover:text-gray-200 transition-colors duration-200 flex items-center justify-center ml-1 cursor-pointer" 
          aria-label="Select language"
        >
          <svg 
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 sxl:w-6 sxl:h-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" 
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default DiscountBar