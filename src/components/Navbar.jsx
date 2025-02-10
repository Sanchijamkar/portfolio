import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50'>
      <div className='container py-2 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold cursor-pointer text-sky-400'>Sanchi</div>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-orange-400'>Home</a>
          <a href="#about" className='hover:text-orange-400'>About Me</a>
          <a href="#service" className='hover:text-orange-400'>Services</a>
          <a href="#project" className='hover:text-orange-400'>Projects</a>
          <a href="#contact" className='hover:text-orange-400'>Contacts</a>
        </div>

        {/* Connect Button */}
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>

        {/* Hamburger Menu */}
        <button
          className='md:hidden text-white'
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-black text-center space-y-2 py-4'>
          <a href="#home" className='block hover:text-orange-400'>Home</a>
          <a href="#about" className='block hover:text-orange-400'>About Me</a>
          <a href="#service" className='block hover:text-orange-400'>Services</a>
          <a href="#project" className='block hover:text-orange-400'>Projects</a>
          <a href="#contact" className='block hover:text-orange-400'>Contacts</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
