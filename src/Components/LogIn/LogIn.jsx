import React, { useState } from 'react';
import signup from '../../assets/signupog.png';

const LogInPage = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-start bg-white mx-0 px-0 mb-35 mt-[60px]">
      <div className="w-full max-w-[1305px] flex flex-col lg:flex-row justify-between mx-0 px-0">
        
        {/* Left Side - Image */}
        <div className="hidden max-w-[805px] w-full h-[600px] lg:flex items-center justify-center bg-[#CBE4E8]">
          <div className="relative w-full h-full flex items-center justify-center">
            <img src={signup} alt="Log In" className="w-full h-full" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex items-center justify-center w-full lg:w-auto lg:pr-[10px] py-12 lg:py-0">
          <div className="w-full max-w-md px-6 sm:px-8 md:px-12 xl:px-0 xl:pl-16 2xl:pl-24">
            
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">Log in to Exclusive</h1>
              <p className="text-base text-gray-600">Enter your details below</p>
            </div>

            {/* Form */}
            <div className="space-y-8">
              
              {/* Email or Phone Input */}
              <div className="relative">
                <input
                  type="text"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  placeholder="Email or Phone Number"
                  className="w-full pb-2 border-b border-gray-300 focus:border-gray-500 outline-none text-base transition-colors placeholder:text-gray-400"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pb-2 border-b border-gray-300 focus:border-gray-500 outline-none text-base transition-colors placeholder:text-gray-400"
                />
              </div>
            
              {/* Log In Button and Forget Password */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-12 rounded transition-colors"
                  >
                    Log In
                  </button>
                  
                  <a href="#" className="text-red-500 hover:underline font-normal">
                    Forget Password?
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LogInPage;