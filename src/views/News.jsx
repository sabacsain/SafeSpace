import React from 'react';
import newslogo from '../assets/news/news.png'

const News = () => {
  return (
    <>
      <div className='container relative flex items-center w-full h-32 pt-3 pl-16 pr-16 -mt-[3vh] bg-secondary-200'>
        <div className='relative flex items-center justify-between w-full'>
          <img src={newslogo} className='w-24 h-auto transform scale-x-[-1] opacity-70'/>
          <h1 className='text-primary text-4xl font-semibold whitespace-nowrap'>NEWS AND UPDATES</h1>
          <img src={newslogo} className='w-24 h-auto opacity-70'/>
        </div>
      </div>

      <div>News</div>
    </>
  );
};

export default News;