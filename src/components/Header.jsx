import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b">
      <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaBell className="text-xl text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1 rounded-full">3</span>
        </div>
        <FaUserCircle className="text-2xl text-gray-600" />
      </div>
    </div>
  );
};

export default Header;
