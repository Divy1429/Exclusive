import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="w-full bg-white pt-6 sm:pt-8 lg:pt-20 pb-35">
      <div className="max-w-[1170px] w-full mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8 sm:mb-12 lg:mb-10">
          <span className="text-gray-400 hover:text-black cursor-pointer transition-colors" onClick={handleBackToHome}>
            Home
          </span>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">404 Error</span>
        </div>

        {/* Error Content */}
        <div className="flex flex-col items-center justify-center text-center py-12 sm:py-16 lg:py-24">
          {/* 404 Not Found Heading */}
          <h1 className="text-[60px] sm:text-[80px] lg:text-[110px] font-medium mb-8 sm:mb-10 tracking-tight">
            404 Not Found
          </h1>

          {/* Description */}
          <p className="text-base mb-12 sm:mb-16 lg:mb-20 max-w-md">
            Your visited page not found. You may go home page.
          </p>

          {/* Back to Home Button */}
          <button 
            onClick={handleBackToHome}
            className="px-12 py-4 bg-[#DB4444] hover:bg-red-600 text-white rounded font-medium transition-colors"
          >
            Back to home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
