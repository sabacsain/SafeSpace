import React from 'react';

/**
 * Banner for heading of subpages.
 * @param {string} image Path in string format. Must be in the public folder.
 * @returns
 */
const Banner = ({ title, image , description }) => {
  return (
<div className='relative flex flex-col justify-center items-center px-10 w-full h-[42vh]'>
  {/* Overlay with transparency */}
  <div className="absolute inset-0 bg-gradient-to-b from-secondary-200 to-secondary-200/70"></div>
  
  {/* Background image */}
  <div 
    style={{ 
      backgroundImage: `url(${image})`, 
      zIndex: -1,
    }} 
    className='absolute inset-0 bg-cover bg-center select-none'
  ></div>
  
  {/* Content */}
  <h1 className='text-primary text-[2.5rem] font-bold uppercase relative z-10'>{title}</h1>
  <h2 className='text-primary font-small relative z-10 max-w-[40%] text-center'>{description}</h2>
</div>



  );
};

export default Banner;