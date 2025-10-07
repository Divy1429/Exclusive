import React, { useState } from 'react';

const MyAccount = () => {
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [activeSection, setActiveSection] = useState('profile');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', formData);
  };

  const handleCancel = () => {
    setFormData({
      ...formData,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="w-full bg-white pt-6 sm:pt-8 lg:pt-20 pb-35">
      <div className="max-w-[1170px] w-full mx-auto ">
        
        {/* Header with Breadcrumb and Welcome */}
        <div className="flex justify-between items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-black font-medium">My Account</span>
          </div>
          <div className="text-sm">
            <span className="text-black">Welcome! </span>
            <span className="text-[#DB4444] font-medium">Md Rimel</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
          {/* Sidebar Navigation */}
          <div className="space-y-6">
            {/* Manage My Account */}
            <div>
              <h3 className="font-medium text-base mb-4">Manage My Account</h3>
              <div className="space-y-2 pl-8">
                <button
                  onClick={() => setActiveSection('profile')}
                  className={`block w-full text-left text-base transition-colors ${
                    activeSection === 'profile' ? 'text-[#DB4444]' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  My Profile
                </button>
                <button
                  onClick={() => setActiveSection('address')}
                  className={`block w-full text-left text-base transition-colors ${
                    activeSection === 'address' ? 'text-[#DB4444]' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  Address Book
                </button>
                <button
                  onClick={() => setActiveSection('payment')}
                  className={`block w-full text-left text-base transition-colors ${
                    activeSection === 'payment' ? 'text-[#DB4444]' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  My Payment Options
                </button>
              </div>
            </div>

            {/* My Orders */}
            <div>
              <h3 className="font-medium text-base mb-4">My Orders</h3>
              <div className="space-y-2 pl-8">
                <button
                  onClick={() => setActiveSection('returns')}
                  className={`block w-full text-left text-base transition-colors ${
                    activeSection === 'returns' ? 'text-[#DB4444]' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  My Returns
                </button>
                <button
                  onClick={() => setActiveSection('cancellations')}
                  className={`block w-full text-left text-base transition-colors ${
                    activeSection === 'cancellations' ? 'text-[#DB4444]' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  My Cancellations
                </button>
              </div>
            </div>

            {/* My Wishlist */}
            <div>
              <button
                onClick={() => setActiveSection('wishlist')}
                className={`font-medium text-base transition-colors ${
                  activeSection === 'wishlist' ? 'text-[#DB4444]' : 'text-black hover:text-[#DB4444]'
                }`}
              >
                My Wishlist
              </button>
            </div>
          </div>

          {/* Main Content - Edit Profile Form */}
          <div className="bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded p-8 lg:p-12">
            <h2 className="text-[#DB4444] text-xl font-medium mb-6">Edit Your Profile</h2>

            <div className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 text-gray-400 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-base mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 text-gray-400 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Email and Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 text-gray-400 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-base mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 text-gray-400 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Password Changes */}
              <div className="space-y-4 pt-6">
                <h3 className="text-base font-medium">Password Changes</h3>
                
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Current Password"
                  className="w-full px-4 py-3 bg-gray-100 text-gray-400 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-gray-400"
                />
                
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="New Password"
                  className="w-full px-4 py-3 bg-gray-100 text-gray-400 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-gray-400"
                />
                
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm New Password"
                  className="w-full px-4 py-3 bg-gray-100 text-gray-400 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-gray-400"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end items-center gap-6 pt-4">
                <button
                  onClick={handleCancel}
                  className="text-base text-black hover:text-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveChanges}
                  className="px-12 py-4 bg-[#DB4444] hover:bg-red-600 text-white rounded font-medium transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;