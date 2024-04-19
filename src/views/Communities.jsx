import React from 'react';
import communitieslogo from '../assets/communities/communities.png'

const Communities = () => {
  return (
    <>
      <div className='container relative flex items-center w-full h-32 pt-3 pl-16 pr-16 -mt-[3vh] bg-secondary-200'>
        <div className='relative flex items-center justify-between w-full'>
          <img src={communitieslogo} className='w-36 h-auto transform scale-x-[-1] opacity-70'/>
          <h1 className='text-primary text-4xl font-semibold whitespace-nowrap'>SUPPORT COMMUNITIES</h1>
          <img src={communitieslogo} className='w-36 h-auto opacity-70'/>
        </div>
      </div>

      <div>Communities</div>
    </>
  );
};

export default Communities;