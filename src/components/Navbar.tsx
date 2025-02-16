"use client";

import React, { useState } from 'react';
import { CgDetailsMore } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white top-0 fixed w-full z-10 h-20 shadow-sm px-6 md:px-20">
      <div className='flex justify-between h-full items-center'>
        <h3 className='text-2xl font-bold'>Belela</h3>

        {/* Menu pour grand écran */}
        <div className='hidden md:flex items-center'>
          <ul className='flex space-x-4'>
            <li className='text-md'>Home</li>
            <li className='text-md'>About</li>
            <li className='text-md'>Contact</li>
          </ul>
          <button className='bg-red-600 text-white py-2 px-4 rounded-md ml-4'>Télécharger</button>
        </div>

        {/* Bouton du menu mobile */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>

          {isOpen ? <CgDetailsMore size={24} /> : <CgDetailsMore size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-slate-300 w-full py-4 space-y-4'>
          <a href="#" className='text-md'>Home</a>
          <a href="#" className='text-md'>About</a>
          <a href="#" className='text-md'>Contact</a>
          <button className='bg-red-600 text-white py-2 px-4 rounded-md'>Télécharger</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
