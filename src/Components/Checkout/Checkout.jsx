import React, { useState } from 'react';
import one from '../../Assets/1.png';
import three from '../../Assets/3.png';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [couponCode, setCouponCode] = useState('');

  const cartItems = [
    {
      id: 1,
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: three
    },
    {
      id: 2,
      name: 'H1 Gamepad',
      price: 550,
      quantity: 2,
      image: one
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    console.log('Order placed:', formData, paymentMethod);
  };

  return (
    <div className="w-full  bg-white pt-6 sm:pt-8 lg:pt-20 pb-35">
      <div className="max-w-[1170px] w-full mx-auto ">
        
        {/* Breadcrumb */}
        <div className="flex flex-wrap  items-center gap-2 text-sm mb-8 sm:mb-12 lg:mb-16 ">
          <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">Account</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">My Account</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">Product</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">View Cart</span>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">CheckOut</span>
        </div>

        <h1 className="text-[36px] font-['Inter'] font-medium mb-12">Billing Details</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Billing Form */}
          <div className="space-y-8">
            {/* First Name */}
            <div>
              <label className="block text-gray-400 text-base mb-2">
                First Name<span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-gray-400 text-base mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-gray-400 text-base mb-2">
                Street Address<span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Apartment */}
            <div>
              <label className="block text-gray-400 text-base mb-2">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Town/City */}
            <div>
              <label className="block text-gray-400 text-base mb-2">
                Town/City<span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-400 text-base mb-2">
                Phone Number<span className="text-red-300">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-400 text-base mb-2">
                Email Address<span className="text-red-300">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Save Info Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="saveInfo"
                className="w-5 h-5 accent-red-500"
              />
              <label htmlFor="saveInfo" className="text-base text-black">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            {/* Cart Items */}
            <div className="space-y-6 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12  rounded flex items-center justify-center">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full" />
                    </div>
                    <span className="text-base">{item.name}</span>
                  </div>
                  <span className="text-base">${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            {/* Pricing Details */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-base">Subtotal:</span>
                <span className="text-base">${subtotal}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-base">Shipping:</span>
                <span className="text-base">Free</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-base">Total:</span>
                <span className="text-base font-medium">${total}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="bank"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 accent-black"
                  />
                  <label htmlFor="bank" className="text-base">Bank</label>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 px-2 bg-white border border-gray-300 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold">bKash</span>
                  </div>
                  <div className="h-6 px-2 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-white">VISA</span>
                  </div>
                  <div className="h-6 w-8 bg-red-500 rounded-full"></div>
                  <div className="h-6 px-2 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-white">bKash</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5 accent-black"
                />
                <label htmlFor="cash" className="text-base">Cash on delivery</label>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="flex gap-4 mb-8">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-4 py-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="px-8 py-3 bg-[#DB4444] hover:bg-red-600 text-white rounded font-medium transition-colors cursor-pointer">
                Apply Coupon
              </button>
            </div>

            {/* Place Order Button */}
            <button 
              onClick={handlePlaceOrder}
              className="w-full sm:w-auto px-12 py-4 bg-[#DB4444] hover:bg-red-600 text-white rounded font-medium transition-colors cursor-pointer"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;