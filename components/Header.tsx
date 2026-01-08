
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="w-full sticky top-0 z-50 glass-effect border-b border-slate-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-lg">
            <i className="fas fa-rocket text-sm"></i>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">OTA Hub</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
