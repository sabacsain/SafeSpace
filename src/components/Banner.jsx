import React from 'react';

/**
 * Banner for heading of subpages.
 * @param {string} image Path in string format. Must be in the public folder.
 * @returns
 */
const Banner = ({ title, image  }) => {
  return (
    <div className='sticky top-0 left-0 flex justify-between items-center px-10 w-full h-[16vh] bg-secondary-200 overflow-hidden -z-30'>
        <div style={{ backgroundImage: `url(${image})` }} className='w-44 h-full bg-cover bg-center'></div>
        <h1 className='text-primary text-[2.5rem] font-bold uppercase'>{title}</h1>
        <div style={{ backgroundImage: `url(${image})` }} className='w-44 h-full bg-cover bg-center'></div>
    </div>
  );
};

export default Banner;