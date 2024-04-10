import React from 'react';
import hotlinelogo from '../assets/hotlines/hotline.png'

const Hotlines = () => {
  return (
    <>
      <div className='container relative flex items-center w-full h-32 pt-3 pl-16 pr-16 -mt-[3vh] bg-secondary-200'>
        <div className='relative flex items-center justify-between w-full'>
          <img src={hotlinelogo} className='w-24 h-auto transform scale-x-[-1]' />
          <h1 className='text-primary text-4xl font-semibold whitespace-nowrap'>EMERGENCY HOTLINES</h1>
          <img src={hotlinelogo} className='w-24 h-auto' />
        </div>
      </div>

      <div>Hotlines</div>
    </>
  );
};

export default Hotlines;