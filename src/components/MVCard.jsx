import React from 'react';

const MVCard = (props) => {
  return (
    <div
      className={`relative flex items-center gap-10 h-48 ${props.title === "Vision" && "flex-row-reverse"}`}
    >
      <div className='w-32'>
        <div className='flex justify-center items-center mb-3 max-w-full h-32 bg-tertiary-400 rounded-full'>
          <img src={props.image} className='w-2/3 h-auto' />
        </div>
        <h1 className='bg-primary text-4xl text-secondary-200 text-center font-bold'>{props.title}</h1>
      </div>
      <p className='flex-1 flex items-center px-10 py-6 w-5/6 h-full bg-secondary-200 text-primary text-center rounded-2xl'>
        {props.children}
      </p>
    </div>
  );
};

export default MVCard;
