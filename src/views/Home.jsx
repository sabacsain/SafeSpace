import React from 'react';
import Button from '../components/Button';
import { LoginPages, MainPages } from '../routes/paths';
import sprite from '../assets/sprite.svg';
import landing1 from '../assets/home/landing-1.png';
import landing2 from '../assets/home/landing-2.png';
import mission from '../assets/home/mission.png';
import vision from '../assets/home/vision.png';

const MVCard = props => {
  return (
    <div className={`flex items-center gap-10 h-48 ${props.title === 'Vision' && 'flex-row-reverse'}`}>
      <div className='text-4xl text-secondary-200 text-center font-bold'>
        <img src={props.image} className='max-w-32 h-auto mb-3 rounded-full' />
        {props.title}
      </div>
      <p className='flex-1 flex items-center px-10 py-6 h-full bg-secondary-200 text-primary text-lg text-center rounded-2xl'>
        {props.children}
      </p>
    </div>
  );
};

const Home = () => {
  return (
    <>
    <div className='relative flex items-center gap-16 w-full h-[95vh] pl-16 -mt-[3vh]'>
      <div className='relative grid items-center justify-items-center'>
        <img src='/logo.png' className='col-start-1 row-start-1 w-40 h-auto py-7 bg-secondary-100 rounded-full' />
        <svg className='absolute col-start-1 row-start-1 ml-20 w-[30rem] h-[30rem] -z-10 fill-current'>
          <use xlinkHref={`${sprite}#splash`} />
        </svg>
      </div>
      <div className='flex flex-col items-start gap-5 w-[40%]'>
        <h1 className='text-secondary-200 text-5xl font-semibold'>Take care of your MIND.<br/>Take care of your LIFE.</h1>
        <p className='text-secondary-100 text-lg'>“Safe Space, an innovative mental health website,<br/>is crafted to empower individuals in their pursuit of emotional<br/>well-being and mental awareness”</p>
        <Button link={LoginPages.LOGIN}>Get Started</Button>
      </div>
      <img src={landing1} className='absolute right-0 top-0 w-[30rem] h-auto -z-10' />
      <img src={landing2} className='absolute right-0 bottom-0 w-[42rem] h-[22rem] -z-10' />
    </div>

    <div className='grid grid-rows-1 grid-cols-2 w-full h-screen bg-secondary-200 text-primary'>
      <div className='bg-[url("/src/assets/home/about.png")] bg-cover bg-center'></div>
      <div className='flex flex-col items-end gap-5 px-16 my-auto text-right'>
        <h2>About Us</h2>
        <h1 className='text-5xl font-bold'>WHO ARE WE</h1>
        <p className='text-lg'>
          At Safe Space, we are dedicated to empowering individuals to  achieve optimal mental health and well-being. Through our comprehensive  support programs, educational resources, and advocacy efforts, we strive  to provide a supportive community where individuals can find  understanding, guidance, and hope. With a commitment to reducing stigma  and increasing access to mental health care, we work tirelessly to  ensure that everyone has the opportunity to lead fulfilling lives.
        </p>
        <Button link={MainPages.ABOUT} style='bg-primary hover:bg-tertiary-200 text-secondary-200'>Learn More</Button>
      </div>
    </div>

    <div className='flex flex-col gap-16 p-32 w-full h-screen'>
      <MVCard image={mission} title='Mission'>
        "Safe Space is dedicated to fostering resilience,  self-discovery, and growth in individuals navigating their mental health  journey. Through a compassionate and inclusive online community, we strive to provide empowering resources, support, and tools that inspire  hope, foster healing, and facilitate positive change. Our mission is to  empower individuals to embrace their strengths, overcome challenges, and  cultivate a life of well-being and fulfillment."
      </MVCard>
      <MVCard image={vision} title='Vision'>
        "At Safe Space, our vision is to create a world where  respectfulness, inclusivity, and encouragement are the cornerstones of  mental health support. We envision a community where every individual  feels valued, heard, and accepted, regardless of background or  circumstance. Through our commitment to fostering respectfulness,  inclusivity, and encouragement, we aim to inspire a culture of empathy,  understanding, and growth, where all can thrive in their journey towards  mental wellness."
      </MVCard>
    </div>
    </>
  );
};

export default Home;