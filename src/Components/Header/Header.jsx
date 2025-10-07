import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';

const DiscountBar = () => (
  <div className="w-full bg-black text-white text-center py-3 text-sm">
    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline ml-2 cursor-pointer">ShopNow</span>
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();

  // Show user profile icon only on profile-related pages
  const user = location.pathname.startsWith('/profile') || 
  location.pathname.startsWith('/wishlist') ||
               location.pathname === '/account' || 
               location.pathname === '/my-account' ||
               location.pathname === '/dashboard' ||
               location.pathname === '/checkout' ||
               location.pathname === '/about' ||
               location.pathname === '/contact' ||
               location.pathname === '/404' ||
               location.pathname === '/details';

  // Hide action icons on auth pages
  const isAuthPage = location.pathname === '/login' || 
                     location.pathname === '/signup' || 
                     location.pathname === '/sign-up' ||
                     location.pathname === '/register';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className={`w-full border-b border-gray-200 flex flex-col items-center sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <DiscountBar />
     
      {/* Main Navigation Section */}
      <nav className="w-full  max-w-[1170px] flex items-center justify-between    px-0 pt-[20px] msm:pt-[24px] sm:pt-[28px] md:pt-[32px] mlg:pt-[36px] lg:pt-[38px] sxl:pt-[40px] pb-[8px] msm:pb-[10px] sm:pb-[12px] md:pb-[13px] mlg:pb-[14px] lg:pb-[15px] sxl:pb-[16px]">
        <div className="flex mx-[10px] max-sm:mx-3 sm:mx-4 md:mx-[10px] xl:mx-[10px] jxl:mx-0 lg:mx-[10px] w-full items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-black cursor-pointer font-['Inter'] text-lg sm:text-xl md:text-2xl lg:text-2xl sxl:text-[24px] font-bold tracking-wide hover:opacity-80 transition-opacity duration-200">
              Exclusive
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 mlg:gap-8 lg:gap-10 sxl:gap-12">
            <Link to="/" className="text-sm lg:text-base sxl:text-[16px] font-normal text-black hover:text-gray-600 transition-colors duration-200 hover:underline hover:underline-offset-4">
              Home
            </Link>
            <Link to="/contact" className="text-sm lg:text-base sxl:text-[16px] font-normal text-black hover:text-gray-600 transition-colors duration-200 hover:underline hover:underline-offset-4">
              Contact
            </Link>
            <Link to="/about" className="text-sm lg:text-base sxl:text-[16px] font-normal text-black hover:text-gray-600 transition-colors duration-200 hover:underline hover:underline-offset-4">
              About
            </Link>
            <Link to="/signup" className="text-sm lg:text-base sxl:text-[16px] font-normal text-black hover:text-gray-600 transition-colors duration-200 hover:underline hover:underline-offset-4 whitespace-nowrap">
              Sign Up
            </Link>
          </div>

          {/* Right Section: Search + Icons */}
          <div className="flex items-center justify-end  gap-3 sm:gap-4 md:gap-5 lg:gap-6 sxl:gap-6">
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center w-[200px] md:w-[220px] lg:w-[240px] sxl:w-[243px] h-[34px] md:h-[36px] lg:h-[38px] sxl:h-[38px] bg-gray-50 rounded-sm pl-[12px] md:pl-[16px] lg:pl-[20px] pr-[8px] md:pr-[10px] lg:pr-[12px] focus-within:bg-white focus-within:ring-2 focus-within:ring-gray-200 transition-all duration-200">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full min-w-0 border-none focus:outline-none bg-transparent text-[11px] md:text-xs placeholder-gray-400 text-gray-700 placeholder:truncate"
              />
              <button className="flex-shrink-0 flex items-center justify-center cursor-pointer text-black hover:text-gray-600 transition-colors duration-200 ml-1 md:ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Action Icons Container - Hidden on auth pages */}
           {!isAuthPage && (
  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 sxl:gap-4">  
    {/* Heart/Wishlist Icon */}
    <Link to="/wishlist" className="text-black hover:text-red-500 transition-colors duration-200 group cursor-pointer" aria-label="Wishlist">
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 sxl:w-[32px] sxl:h-[32px] group-hover:scale-110 transition-transform duration-200" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>

    {/* Shopping Cart Icon with Badge */}
    <Link to="/cart" className="text-black hover:text-blue-600 transition-colors duration-200 relative group cursor-pointer" aria-label="Shopping Cart">
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 sxl:w-[32px] sxl:h-[32px] group-hover:scale-110 transition-transform duration-200" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 5H7L10 22H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">2</span>
    </Link>

                {/* Profile Icon with Dropdown */}
                 {user && (
                <div className="relative pl-[16px]" ref={profileRef}>
                 
                    <button 
  onClick={toggleProfile}
  className={`text-white w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 sxl:w-[32px] sxl:h-[32px] bg-red-500 hover:bg-red-600 transition-all duration-200 rounded-full flex items-center justify-center cursor-pointer group`}
  aria-label="Profile"
>
  <svg 
    viewBox="0 0 32 32" 
    className="w-7 h-7 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 sxl:w-[32px] sxl:h-[32px] group-hover:scale-110 transition-transform duration-200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23" 
      stroke="white" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z" 
      stroke="white" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
</button>
                  

                  {/* Dropdown Menu */}
                  <div className={`absolute right-0 mt-2 w-56 rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${isProfileOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible hidden -translate-y-2'}`} style={{background: `linear-gradient(to bottom, #b5b5b5, rgba(181,181,181,0)), linear-gradient(to left, #1e1e1e, rgba(181,181,181,0)), linear-gradient(to right, #a86cc7, rgba(181,181,181,0))`}}>
                    <div className="py-2">
                      <Link to="/my-account" className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors duration-150" onClick={() => setIsProfileOpen(false)}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm">Manage My Account</span>
                      </Link>
                      <Link to="/checkout" className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors duration-150" onClick={() => setIsProfileOpen(false)}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm">My Order</span>
                      </Link>
                      <Link to="/404" className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors duration-150" onClick={() => setIsProfileOpen(false)}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm">My Cancellations</span>
                      </Link>
                      <Link to="/details" className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors duration-150" onClick={() => setIsProfileOpen(false)}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.049 2.927C11.3483 2.00636 12.6517 2.00636 12.951 2.927L14.4699 7.60081C14.6038 8.01284 14.9877 8.29266 15.4209 8.29266H20.3354C21.3041 8.29266 21.7068 9.53493 20.9232 10.1008L16.9474 12.9895C16.5969 13.2441 16.4503 13.6955 16.5841 14.1075L18.1029 18.7813C18.4022 19.702 17.3365 20.4698 16.5529 19.9039L12.5771 17.0152C12.2266 16.7606 11.7734 16.7606 11.4229 17.0152L7.44707 19.9039C6.66347 20.4698 5.59779 19.702 5.8971 18.7813L7.41593 14.1075C7.54974 13.6955 7.40309 13.2441 7.05263 12.9895L3.07683 10.1008C2.29324 9.53493 2.69592 8.29266 3.66461 8.29266H8.57911C9.01231 8.29266 9.39623 8.01284 9.53004 7.60081L11.049 2.927Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm">My Reviews</span>
                      </Link>
                      <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors duration-150" onClick={() => setIsProfileOpen(false)}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 16L21 12M21 12L17 8M21 12H7M13 16V17C13 17.7956 12.6839 18.5587 12.1213 19.1213C11.5587 19.6839 10.7956 20 10 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H10C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm">Logout</span>
                      </Link>
                    </div>
                  </div>
                </div>
                 )}
              </div>
            )}
            

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex items-center justify-center p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer" 
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              <svg 
                className={`w-6 h-6 text-black transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

     {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden w-full bg-white border-t border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4 px-6 space-y-1">
          <Link 
            to="/" 
            className="text-black text-base font-normal hover:text-gray-600 hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-md"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/contact" 
            className="text-black text-base font-normal hover:text-gray-600 hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-md"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link 
            to="/about" 
            className="text-black text-base font-normal hover:text-gray-600 hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-md"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/signup" 
            className="text-black text-base font-normal hover:text-gray-600 hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-md"
            onClick={closeMenu}
          >
            Sign Up
          </Link>
          
          {/* Mobile Search Bar in Menu */}
          <div className="sm:hidden pt-4 mt-2 border-t border-gray-200">
            <div className="flex items-center justify-between w-full h-[40px] bg-gray-50 rounded px-3 focus-within:bg-white focus-within:ring-2 focus-within:ring-gray-200 transition-all duration-200">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 border-none focus:outline-none bg-transparent text-sm placeholder-gray-400 text-gray-700"
              />
              <button className="flex items-center justify-center cursor-pointer text-black hover:text-gray-600 transition-colors duration-200 ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;