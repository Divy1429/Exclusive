import React, { useState } from 'react';
import one from '../../Assets/1.png';
import three from '../../Assets/3.png';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
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
  ]);

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="w-full bg-white pt-6 sm:pt-8 lg:pt-12 pb-[140px] lg:pb-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-6 xl:px-0">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8 sm:mb-12 lg:mb-16">
          <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">Cart</span>
        </div>

        {/* Cart Table */}
        <div className="mb-6 overflow-x-auto xl:overflow-visible w-full max-w-[1170px] mx-auto">
          {/* Desktop Table Header - Horizontal Scroll Wrapper */}
          <div className=" mx-0 mb-6">
            <div className="min-w-[800px] px-0">
              <div className="h-[72px] w-[1170px] flex items-center justify-center mx-auto shadow-[0_0_8px_theme('colors.gray.100')] bg-white rounded-[4px]">
                <div className="max-w-[1091px] w-full flex justify-between items-center">
                  <div className="font-normal text-base">Product</div>
                  <div className="font-normal text-base text-center">Price</div>
                  <div className="font-normal text-base text-center">Quantity</div>
                  <div className="font-normal text-base text-right">Subtotal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Items - Horizontal Scroll Wrapper */}
          <div className=" mx-0">
            <div className=" w-[1170px] xl:min-w-0 px-0">
              <div className="mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="w-full h-[102px]  flex items-center justify-center mx-auto shadow-[0_0_8px_theme('colors.gray.100')] bg-white rounded-[4px] mb-6">
                    <div className="max-w-[1091px] w-full flex items-center">
                      {/* Product */}
                      <div className="flex items-center gap-6 pr-[177px] max-w-[350px]">
                        <div className="relative">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="absolute -top-2 -left-2 w-6 h-6 bg-[#DB4444] text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10 cursor-pointer"
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <div className="w-[54px] h-[54px] bg-gray-50 rounded flex items-center justify-center p-2">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        <h3 className="font-normal text-nowrap text-base">{item.name}</h3>
                      </div>

                      {/* Price - center aligned */}
                      <div className="font-normal text-base text-center pr-[282px]">${item.price}</div>

                      {/* Quantity - center aligned */}
                      <div className="flex justify-center pr-[281px]">
                        <div className="relative w-[72px] h-[44px] border border-gray-300 rounded-[4px]">
                          <input
                            type="text"
                            value={String(item.quantity).padStart(2, '0')}
                            readOnly
                            className="w-full h-full text-start p-2 text-base font-normal outline-none bg-white rounded-[4px]"
                          />
                          <div className="absolute right-0 top-0 h-full w-[24px] flex flex-col border-l border-gray-300">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="flex-1 hover:bg-gray-50 transition-colors flex items-center justify-center border-b border-gray-300 cursor-pointer"
                            >
                              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 0L10 6H0L5 0Z" fill="#000"/>
                              </svg>
                            </button>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="flex-1 hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer"
                            >
                              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 6L0 0H10L5 6Z" fill="#000"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Subtotal - right aligned */}
                      <div className="font-normal text-base text-right">${item.price * item.quantity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-12 sm:mb-16 lg:mb-20">
            <button className="bg-white hover:bg-gray-50 border border-black text-black px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 rounded font-medium transition-colors text-sm sm:text-base w-full sm:w-auto cursor-pointer">
              Return To Shop
            </button>
            <button className="bg-white hover:bg-gray-50 border border-black text-black px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 rounded font-medium transition-colors text-sm sm:text-base w-full sm:w-auto cursor-pointer">
              Update Cart
            </button>
          </div>
        </div>

        {/* Coupon & Cart Total Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-[173px]">
          {/* Coupon Section */}
          <div className="flex flex-col sm:flex-row gap-4 max-h-[56px] h-full">
            <input
              type="text"
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 pl-[24px] max-w-[300px] w-full border border-black rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button className="bg-[#DB4444] max-w-[211px] w-full hover:bg-red-600 text-white rounded font-medium transition-colors text-sm sm:text-base whitespace-nowrap cursor-pointer">
              Apply Coupon
            </button>
          </div>

          {/* Cart Total */}
          <div className="border-2 border-black rounded px-6 py-6 sm:px-6 sm:py-8 lg:max-w-[470px] max-h-[324px] h-full lg:ml-auto w-full">
            <h3 className="text-lg sm:text-xl font-medium mb-6">Cart Total</h3>
            
            <div className="space-y-0">
              {/* Subtotal */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-sm sm:text-base text-black">Subtotal:</span>
                <span className="text-sm sm:text-base font-normal text-black">${subtotal}</span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <span className="text-sm sm:text-base text-black">Shipping:</span>
                <span className="text-sm sm:text-base font-normal text-black">Free</span>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-4">
                <span className="text-sm sm:text-base text-black">Total:</span>
                <span className="text-sm sm:text-base font-normal text-black">${total}</span>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button className="bg-[#DB4444] hover:bg-red-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded font-medium transition-colors text-sm sm:text-base cursor-pointer">
                Procees to checkout
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;