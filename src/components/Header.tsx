import  { useState } from 'react';
import image from '/logow.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:w-5/6 mx-auto p-6 flex justify-between items-center relative">
      <img draggable={false} src={image} alt="image logo" className='h-10' />

      <div className='hidden md:flex items-center gap-x-8 lg:gap-x-16 text-white text-sm font-bold'>
        <p className='cursor-pointer hover:underline'>Women</p>
        <p className='cursor-pointer hover:underline'>Kids</p>
        <p className='cursor-pointer hover:underline'>Shopping</p>
        <p className='cursor-pointer hover:underline'>Shop All</p>
      </div>

      <div className='hidden md:flex items-center gap-2 text-white font-bold'>
        <i className='bx bx-cart bx-md'></i>
        <i className='bx bx-user bx-md'></i>
      </div>
      
      <div className='md:hidden items-center gap-2 text-white font-bold'>
        <i className='bx bx-menu bx-md cursor-pointer' onClick={toggleMenu}></i>
      </div>

      {isMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-white text-black p-4 flex flex-col items-start space-y-4 z-50 md:hidden'>
          <p className='cursor-pointer hover:underline'>Women</p>
          <p className='cursor-pointer hover:underline'>Kids</p>
          <p className='cursor-pointer hover:underline'>Shopping</p>
          <p className='cursor-pointer hover:underline'>Shop All</p>
        </div>
      )}
    </div>
  );
};

export default Header;
