import React from 'react';
import Marquee from 'react-fast-marquee';
import { Fade, Slide } from 'react-awesome-reveal';
import { LoginPages, MainPages } from '../routes/paths';

import sprite from '/sprite.svg';
import landing from '../assets/home/landingbg.png';
import landingBack from '../assets/home/landingback.png';
import landing1 from '../assets/home/landing-1.png';
import landing2 from '../assets/home/landing-2.png';
import mission from '../assets/home/mission.png';
import vision from '../assets/home/vision.png';
import testimonial from '../assets/home/testimonialbg.png';
import juan from '../assets/testimonial/juan.png';
import marites from '../assets/testimonial/marites.png';
import diluc from '../assets/testimonial/diluc.png';

import Button from '../components/Button';
import MVCard from '../components/MVCard';
import CategoryCard from '../components/CategoryCard';
import TestimonialCard from '../components/TestimonialCard';

const categories = [
  {
    title: <>Educational<br/>Resources</>,
    desc: "Empower your mind with our comprehensive educational resources. Explore, learn, and thrive.",
    bg: "/category/educ-resource.png", link: MainPages.RESOURCES
  },
  {
    title: "Self-Assessment",
    desc: "Take charge of your mental well-being. Start your journey with our self-assessment tools.",
    bg: "/category/self-assess.png", link: MainPages.ASSESSMENT
  },
  {
    title: <>Support<br/>Community</>,
    desc: "Find strength in community. Join our supportive network and journey together towards mental wellness.",
    bg: "/category/support.png", link: MainPages.COMMUNITIES
  },
  {
    title: "Expert's Advice",
    desc: "Take the first step towards mental wellness. Schedule a confidential consultation with our compassionate experts today.",
    bg: "/category/advice.png", link: MainPages.CONSULTATION
  },
  {
    title: "Testimonials",
    desc: "Discover tailored solutions for your mental well-being. Get personalized recommendations from our team of experts.",
    bg: "/category/testimonials.png", link: "#testimonials"
  },
  {
    title: <>Privacy<br/>and Security</>,
    desc: "Your privacy and security are our top priorities. Rest assured, your information is kept confidential and secure with us.",
    bg: "/category/privacy.png"
  },
  {
    title: <>Mental Health<br/>Updates</>,
    desc: "Stay informed, stay empowered. Explore the latest mental health news and updates to support your well-being journey.",
    bg: "/category/updates.png", link: MainPages.NEWS
  },
  {
    title: <>Emergency<br/>Hotline</>,
    desc: "Empower your mind with our comprehensive educational resources. Explore, learn, and thrive.",
    bg: "/category/hotline.png", link: MainPages.HOTLINES
  },
];

const testimonials = [
  {
    name: "Juan Dela Cruz", image: juan,
    review: "I can't thank Safe Space enough for the invaluable support and  resources they've provided me. Their articles and tools have helped me  better understand my mental health struggles and find effective coping  strategies. I feel more empowered and hopeful about my journey to  wellness."
  },
  {
    name: "Marites", image: marites,
    review: "As someone who was hesitant to seek help for my mental health concerns,  Safe Space provided a safe and welcoming space for me to explore my  feelings and connect with others who understand what I'm going through. I'm grateful for the sense of community I've found here."
  },
  {
    name: "Diluc Ragnvindr", image: diluc,
    review: "This website is always so efficient."
  },
];

const Home = () => {
  return (
    <>
    {/* Landing */}
    <div className='relative flex items-center gap-16 w-full h-[95vh] pl-16 -mt-[3vh]'>
      {/* Logo */}
      <div className='group relative grid items-center justify-items-center'>
        <img src='/logo.png' className='col-start-1 row-start-1 w-40 h-auto py-7 bg-secondary-100 rounded-full' />
        <div className='col-start-1 row-start-1 w-24 h-24 py-7 bg-tertiary-400 rounded-full -z-10'></div>
        <svg className='absolute col-start-1 row-start-1 ml-20 w-[30rem] h-[30rem] -z-20 fill-current'>
          <use xlinkHref={`${sprite}#splash`} />
        </svg>
      </div>

      {/* Tagline and description */}
      <Fade direction='up' className='w-[40%]'>
      <div className='flex flex-col items-start gap-5 w-full'>
        <h1 className='text-secondary-200 text-5xl font-semibold'>Take care of your MIND.<br/>Take care of your LIFE.</h1>
        <p className='text-secondary-100 text-lg'>“Safe Space, an innovative mental health website,<br/>is crafted to empower individuals in their pursuit of emotional<br/>well-being and mental awareness”</p>
        <Button link={LoginPages.LOGIN}>Get Started</Button>
      </div>
      </Fade>

      {/* Design in right */}
      <Slide direction='right' className='absolute right-0 top-0 w-full h-full' cascade>
      <img src={landingBack} className='absolute right-0 top-0 w-[53%] h-full -z-20 ' />
      <img src={landing} className='absolute right-0 top-0 w-1/2 h-full -z-10 ' />
      </Slide>
      <img src={landing1} className='absolute right-0 top-0 w-[32vw] h-auto' />
      <img src={landing2} className='absolute right-0 bottom-0 w-[43.5vw] h-[47.5vh]' />
    </div>

    {/* About */}
    <div className='grid grid-rows-1 grid-cols-2 w-full h-screen bg-secondary-200 text-primary'>
      <div className='bg-[url("/src/assets/home/about.png")] bg-cover bg-center'></div>
      <Slide direction='right' className='flex overflow-hidden'>
      <div className='flex flex-col items-end gap-5 px-16 my-auto text-right overflow-hidden'>
        <h2 className='text-sm'>About Us</h2>
        <h1 className='text-4xl font-bold'>WHO ARE WE</h1>
        <p>
          At Safe Space, we are dedicated to empowering individuals to  achieve optimal mental health and well-being. Through our comprehensive  support programs, educational resources, and advocacy efforts, we strive  to provide a supportive community where individuals can find  understanding, guidance, and hope. With a commitment to reducing stigma  and increasing access to mental health care, we work tirelessly to  ensure that everyone has the opportunity to lead fulfilling lives.
        </p>
        <Button link={MainPages.ABOUT} style='bg-primary hover:bg-tertiary-200 text-secondary-200'>Learn More</Button>
      </div>
      </Slide>
    </div>

    {/* Mission Vision */}
    <div className='flex flex-col justify-center gap-16 p-32 w-full h-screen'>
      <Fade direction='left' duration={1750}>
      <MVCard image={mission} title='Mission'>
        Safe Space is dedicated to fostering resilience,  self-discovery, and growth in individuals navigating their mental health  journey. Through a compassionate and inclusive online community, we strive to provide empowering resources, support, and tools that inspire  hope, foster healing, and facilitate positive change. Our mission is to  empower individuals to embrace their strengths, overcome challenges, and  cultivate a life of well-being and fulfillment.
      </MVCard>
      </Fade>
      <Fade direction='right' duration={1750}>
      <MVCard image={vision} title='Vision'>
        At Safe Space, our vision is to create a world where  respectfulness, inclusivity, and encouragement are the cornerstones of  mental health support. We envision a community where every individual  feels valued, heard, and accepted, regardless of background or  circumstance. Through our commitment to fostering respectfulness,  inclusivity, and encouragement, we aim to inspire a culture of empathy,  understanding, and growth, where all can thrive in their journey towards  mental wellness.
      </MVCard>
      </Fade>
    </div>

    {/* Services Resources Overview */}
    <div className='flex flex-col justify-center items-center gap-10 w-full py-20 bg-secondary-200 text-primary'>
      <Fade direction='up'>
      <h1 className='text-4xl font-bold'>Services and Resources</h1>
      </Fade>
      <div className='grid grid-rows-2 grid-cols-4 gap-10'>
        {categories.map((item, index) =>
          <CategoryCard key={index} title={item.title} bg={item.bg} link={item.link}>{item.desc}</CategoryCard>
        )}
      </div>
    </div>

    {/* Testimonials */}
    <div id='testimonials' className='relative flex flex-col justify-center items-center gap-10 w-full h-screen'>
      <Fade direction='up' className='-mt-12'>
      <h1 className=' text-secondary-200 text-4xl font-bold'>Testimonials</h1>
      </Fade>
      <div className='items-baseline w-[78%] h-[27.5rem] m-0 rounded-lg overflow-hidden'>
      <Marquee className='items-baseline w-full h-full rounded-lg overflow-hidden' direction='right' autoFill pauseOnHover pauseOnClick>
        {testimonials.map((item, index) =>
          <TestimonialCard key={index} name={item.name} image={item.image}>{item.review}</TestimonialCard>
        )}
      </Marquee>
      </div>

      {/* Sides design */}
      <Fade direction='left' className='absolute top-0 left-0 w-full h-full'>
      <img src={testimonial} className='absolute top-0 left-0 w-[12%] h-full -z-10' />
      </Fade>
      <Fade direction='right' className='absolute top-0 left-0 w-full h-full'>
      <img src={testimonial} className='absolute top-0 right-0 w-[12%] h-full -z-10 scale-x-[-1]' />
      </Fade>
    </div>
    </>
  );
};

export default Home;