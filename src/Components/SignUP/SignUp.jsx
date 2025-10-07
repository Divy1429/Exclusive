import React, { useState } from 'react';
import signup1 from '../../assets/signupog.png';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
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

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google clicked');
  };

  return (
    <div className="flex items-start bg-white mx-0 px-0 mb-35 mt-[60px]">
      <div className="w-full max-w-[1305px] flex flex-col lg:flex-row justify-between mx-0 px-0">
        
        {/* Left Side - Image */}
        <div className="hidden max-w-[805px] w-full h-[600px] lg:flex items-center justify-center bg-[#CBE4E8]">
          <div className="relative w-full h-full flex items-center justify-center">
            <img src={signup1} alt="Sign Up" className="w-full h-full" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex items-center justify-center w-full lg:w-auto lg:pr-[10px] py-12 lg:py-0">
          <div className="w-full max-w-md px-6 sm:px-8 md:px-12 xl:px-0 xl:pl-16 2xl:pl-24">
            
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">Create an account</h1>
              <p className="text-base text-gray-600">Enter your details below</p>
            </div>

            {/* Form */}
            <div className="space-y-8">
              
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full pb-2 border-b border-gray-300 focus:border-gray-500 outline-none text-base transition-colors placeholder:text-gray-400"
                />
              </div>

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
            
              <div className="space-y-4 pt-4"> 
                {/* Create Account Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-4 rounded transition-colors"
                >
                  Create Account
                </button>

                {/* Sign up with Google Button */}
                <button
                  onClick={handleGoogleSignUp}
                  className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-4 rounded transition-colors flex items-center justify-center gap-3"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M19.8 10.2273C19.8 9.51819 19.7364 8.83637 19.6182 8.18182H10.2V12.05H15.6109C15.3773 13.3 14.6564 14.3591 13.5818 15.0682V17.5773H16.8273C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"/>
                    <path d="M10.2 20C12.9 20 15.1709 19.1045 16.8273 17.5773L13.5818 15.0682C12.6773 15.6682 11.5364 16.0227 10.2 16.0227C7.59546 16.0227 5.38182 14.2636 4.58637 11.9H1.22728V14.4909C2.87273 17.7591 6.30001 20 10.2 20Z" fill="#34A853"/>
                    <path d="M4.58637 11.9C4.38637 11.3 4.27273 10.6591 4.27273 10C4.27273 9.34091 4.38637 8.7 4.58637 8.1V5.50909H1.22728C0.545455 6.85909 0.136364 8.38636 0.136364 10C0.136364 11.6136 0.545455 13.1409 1.22728 14.4909L4.58637 11.9Z" fill="#FBBC05"/>
                    <path d="M10.2 3.97727C11.6591 3.97727 12.9682 4.48182 13.9864 5.44545L16.8727 2.55909C15.1664 0.945455 12.8955 0 10.2 0C6.30001 0 2.87273 2.24091 1.22728 5.50909L4.58637 8.1C5.38182 5.73636 7.59546 3.97727 10.2 3.97727Z" fill="#EA4335"/>
                  </svg>
                  Sign up with Google
                </button>
              </div>
            </div>

            {/* Log In Link */}
            <div className="mt-8 text-center">
              <span className="text-base text-gray-600">Already have account? </span>
              <a href="#" className="text-base text-gray-800 font-medium underline hover:text-gray-600 transition-colors ml-1">
                Log in
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;