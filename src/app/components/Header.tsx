import React from "react";
import { Menu, Search, Home, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-linear-to-r from-[#FA8112] to-[#FF9A3D] shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button className="sm:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
            <Menu size={28} className="text-white" />
          </button>

          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="sm:block w-10 h-10 bg-white rounded-full flex text-center items-center justify-center">
              <span className="text-[#FA8112] font-bold text-xl">S</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Shop<span className="text-[#222222]">Here</span>
            </h1>
          </Link>



          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#FA8112] transition-colors" size={20} />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border-2 border-transparent focus:border-[#FA8112] focus:outline-none focus:shadow-lg shadow-[#FA8112]/20 transition-all placeholder-gray-400"
                placeholder="Search for products, brands, and more..."
              />
            </div>
          </div>

          {/* Cart & Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/cart" 
              className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
            >
              <ShoppingCart size={26} className="text-white group-hover:text-[#222222]" />
            </Link>
            

          </div>

        </div>

        {/* Mobile Search */}
        <div className="mt-4 sm:hidden">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-[#FA8112] focus:outline-none focus:shadow-lg shadow-[#FA8112]/20 transition-all placeholder-gray-400"
              placeholder="Search products..."
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;