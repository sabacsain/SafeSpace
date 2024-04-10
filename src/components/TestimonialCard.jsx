import React from 'react';
import sprite from '/sprite.svg';

const TestimonialCard = (props) => {
  return (
    <div className='relative drop-shadow-xl'>
      <div className='flex flex-col items-center w-80 h-96 bg-primary text-secondary-200 rounded-xl overflow-hidden'>
        <div className='flex justify-center items-center gap-3 w-full h-1/6 bg-secondary-200'>
        {[...Array(5)].map((_, index) => (
          <svg key={index} className='w-7 h-7'>
            <use xlinkHref={`${sprite}#star`} />
          </svg>
        ))}
        </div>

        <div 
          className='relative flex justify-center items-center flex-1 w-5/6 mt-6 p-3 border-secondary-200 border-2 text-sm
                     before:content-["“"] before:absolute before:-top-4 before:left-2 before:font-semibold before:text-6xl
                     after:content-["”"] after:absolute after:-bottom-11 after:right-2 after:font-semibold after:text-6xl'
        >
          {props.children}
        </div>

        <h2 className='mt-2 mb-12 text-lg font-semibold'>{props.name}</h2>
      </div>

      <div className='absolute -bottom-10 left-1/2 -translate-x-1/2'>
        <img src={props.image} className='w-20 h-20 rounded-full object-cover'/>
      </div>
    </div>
  );
};

export default TestimonialCard;