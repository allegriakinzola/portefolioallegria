import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#1a8917]">Belela</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#1a8917]">Home</a>
            <a href="#features" className="text-gray-600 hover:text-[#1a8917]">Comment ça marche</a>
            <a href="#about" className="text-gray-600 hover:text-[#1a8917]">À propos</a>
            <a href="#contact" className="text-gray-600 hover:text-[#1a8917]">Contact</a>
            <div className="relative group">
              <button className="text-gray-600 hover:text-[#1a8917] flex items-center">
                Safety
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#download" className="bg-[#1a8917] text-white px-4 py-2 rounded-full hover:bg-[#147811]">
              Télécharger
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-[#1a8917]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
