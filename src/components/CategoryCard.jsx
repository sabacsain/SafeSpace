import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
  return (
    <Link to={props.link}>
    <div
      style={{ backgroundImage: `url(${props.bg})`}}
      className='group relative flex items-end bg-cover bg-center w-64 h-80 text-secondary-200 rounded-xl overflow-hidden'
    >
      <div className='absolute w-full h-full group-hover:bg-accent group-hover:bg-opacity-70 transition-all ease-in-out duration-300'></div>
      <div className='flex flex-col justify-center w-full h-1/4 mx-auto text-center bg-primary bg-opacity-85 z-10
                      group-hover:w-5/6 group-hover:h-5/6 group-hover:mb-[10%] transition-all ease-in-out duration-300'>
        <h2 className='flex justify-center items-center h-full group-hover:h-fit text-xl font-semibold'>{props.title}</h2>
        <p className='mx-auto my-0 w-44 h-0 opacity-0 pt-0 text-sm group-hover:h-auto group-hover:opacity-100 group-hover:pt-1'>{props.children}</p>
      </div>
    </div>
    </Link>
  );
};

export default CategoryCard;