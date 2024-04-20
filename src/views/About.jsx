import React from 'react';
import Button from '../components/Button';
import { LoginPages, MainPages } from '../routes/paths';
import { Fade, Slide } from 'react-awesome-reveal';
import aboutuser from '../assets/about/aboutuser.png';
import memberimg from '../assets/about/Brigitte Amplayo.png';
import memberimg1 from '../assets/about/Raiella Calubayan.png';
import memberimg2 from '../assets/about/Shyrral Malapit.png';

const MemberCard = props => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full max-w-md rounded-2xl border-primary-500 border-opacity-50 text-secondary-200 transform transition-transform duration-300 ease-in-out hover:scale-105`}
      style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)', height: '300px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={props.image}
        className={`mx-auto w-full h-full object-cover rounded-xl ${isHovered ? 'opacity-50' : ''}`}
        alt={props.title}
        style={{ transition: 'opacity 0.3s' }}
      />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-xl">
          <p className="text-white text-2xl font-bold text-center" style={{ lineHeight: '1.5' }}>
            <span className="text-2x1 font-bold">{props.name}</span><br />
            <span className="text-sm">{props.position}</span>
          </p>
        </div>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div className='relative flex items-center gap-16 w-full h-[100vh] pl-16 -mt-[3vh]'>
        <div className="logo-container absolute top-[35%]" style={{ left: '45%', right: 'auto', top: '5%' }}>
          <img src='/logo.png' style={{ width: '800px', height: 'auto' }} alt="Logo" />
        </div>
        <div className="about-section flex items-start" style={{ marginTop: '-20vh' }}>
          <div>
            <Fade direction='left' duration={1050}>
              <h1 className='text-secondary-200 text-5xl font-bold py-1'>ABOUT US</h1>
            </Fade>
            <Fade direction='left' duration={1050}>
              <p className='text-secondary-100 text-lg py-6'>Who are we? and What We Do For You</p>
            </Fade>
            <Fade direction='left' duration={1050}>
              <h2 className='text-secondary-200 text-5x1 font-bold py-1'>Safe Space</h2>
            </Fade>
            <Fade direction='left' duration={1050}>
              <p className='text-secondary-100 text-lg'>
                We believe in fostering a safe and inclusive space where <br />
                individuals can freely express themselves without fear of <br />
                judgment or discrimination. Our safe space is built on <br />
                principles of respect, empathy, and acceptance, ensuring <br />
                that everyone feels valued and heard. Whether you're <br />
                seeking support, sharing your story, or connecting with <br />
                others, you can trust that our community is dedicated to <br />
                providing a supportive environment where you can be yourself.
              </p>
            </Fade>
            <Button link={LoginPages.LOGIN} style='bg-secondary-200 hover:bg-accent text-primary absolute bottom-[20%] left-20 right-20 h-auto'>See What Our Customers Have to Say About us. View Client Testimonials</Button>
          </div>
        </div>
      </div>

      <div className='container relative flex flex-col items-center justify-center w-full h-32 pt-3 pl-16 pr-16 -mt-[3vh] bg-secondary-200'>
        <div className='flex items-center justify-between w-full'>
          <img src={aboutuser} className='w-24 h-auto transform scale-x-[-1] opacity-70' alt="Logo" />
          <h1 className='text-primary text-4xl font-semibold whitespace-nowrap'>Meet Our Team</h1>
          <img src={aboutuser} className='w-24 h-auto opacity-70' alt="Logo" />
        </div>
      </div>

      <div className='grid grid-cols-1 gap-8 justify-items-center w-full h-[70vh] bg-primary text-primary'>
        <div className='flex justify-center max-w-3xl' style={{ marginTop: '100px' }}>
          <div className='grid grid-cols-3 gap-10'>
            <Fade direction='down' duration={1075}>
              <MemberCard image={memberimg} name="Brigitte Amplayo" position="Chief Technology Officer" />
            </Fade>
            <Fade direction='down' duration={1075}>
              <MemberCard image={memberimg1} name="Raiella Calubayan" position="Company CEO" />
            </Fade>
            <Fade direction='down' duration={1075}>
              <MemberCard image={memberimg2} name="Shyrral Malapit" position="Chief Financial Officer" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
