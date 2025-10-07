import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Message sent:', formData);
  };

  return (
    <div className="w-full bg-white pt-6 sm:pt-8 lg:pt-20 pb-35">
      <div className="max-w-[1170px] w-full mx-auto ">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8 sm:mb-12 lg:mb-20">
          <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
          {/* Left Section - Contact Info */}
          <div className="bg-white shadow-md rounded-lg p-8 space-y-8 h-full">
            {/* Call To Us */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                  <FaPhone className="text-white text-lg  rotate-90" />
                </div>
                <h2 className="text-base font-medium">Call To Us</h2>
              </div>
              
              <div className="space-y-4 text-sm">
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300"></div>

            {/* Write To Us */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <h2 className="text-base font-medium">Write To US</h2>
              </div>
              
              <div className="space-y-4 text-sm">
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="space-y-8">
              {/* Name, Email, Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-[#F5F5F5] rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500 "
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-[#F5F5F5] rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-[#F5F5F5] rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500 "
                />
              </div>

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Your Massage"
                value={formData.message}
                onChange={handleInputChange}
                rows="8"
                className="w-full px-4 py-3 bg-[#F5F5F5] rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500  resize-none"
              />

              {/* Submit Button */}
              <div className="flex justify-end">
                <button 
                  onClick={handleSubmit}
                  className="px-12 py-4 bg-[#DB4444] hover:bg-red-600 text-white rounded font-medium transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
