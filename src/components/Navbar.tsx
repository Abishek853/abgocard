import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">LUXEWEAR</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-black">Men</a>
              <a href="#" className="text-gray-700 hover:text-black">Women</a>
              <a href="#" className="text-gray-700 hover:text-black">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-black">Sale</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-black">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-black">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-black relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}