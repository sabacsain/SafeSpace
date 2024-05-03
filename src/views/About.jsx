import React from 'react';
import Button from '../components/Button';
import { LoginPages, MainPages } from '../routes/paths';
import { Fade, Slide } from 'react-awesome-reveal';
import aboutuser from '../assets/about/aboutuser.png';
import memberimg from '../assets/about/Brigitte Amplayo.png';
import memberimg1 from '../assets/about/Raiella Calubayan.png';
import memberimg2 from '../assets/about/Shyrral Malapit.png';
import Banner from '../components/Banner';

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
        className={`mx-auto w-full h-full object-cover rounded-xl ${isHovered ? 'opacity-90' : ''}`}
        alt={props.title}
        style={{ transition: 'opacity 0.3s' }}
      />
      {isHovered && (
        <div className="absolute bottom-0 flex items-center justify-center bg-primary w-full h-1/3 mt-36 mx-auto bg-opacity-90 rounded-xl">
          <p className="text-white text-2xl font-bold text-center" style={{ lineHeight: '1.5' }}>
            <span className="text-lg font-bold">{props.name}</span><br />
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
      <div className='flex flex-col justify-center items-center gap-16 w-full h-[95vh] -m-[1vh] px-40'>
        <div className='grid grid-rows-1 grid-cols-2 justify-between items-center gap-16 w-[95%] h-1/2'>
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
          </div>
          <img src='/logo.png' className='w-full h-full object-cover object-left' alt="Logo" />
        </div>
        <Button link={MainPages.HOME + '#testimonials'} customTheme='w-[95%] bg-secondary-200 hover:bg-accent text-primary h-auto'>See What Our Customers Have to Say About us. View Client Testimonials</Button>
      </div>

    
      <div className='flex flex-col gap-8 items-center w-full h-screen bg-primary text-primary overflow-hidden'>
        <h1 className='w-full h-fit py-16 mb-10 text-4xl text-center font-bold text-primary bg-secondary-200'>Meet Our Team</h1>
        <div className='pt-14 flex justify-center items-center max-w-3xl'>
          <div className='grid grid-cols-3 gap-10'>
            <Fade direction='up' duration={1075}>
              <MemberCard image={memberimg} name="Brigitte Amplayo" position="Chief Technology Officer" />
            </Fade>
            <Fade direction='up' duration={1075}>
              <MemberCard image={memberimg1} name="Raiella Calubayan" position="Company CEO" />
            </Fade>
            <Fade direction='up' duration={1075}>
              <MemberCard image={memberimg2} name="Shyirral Malapit" position="Chief Financial Officer" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

