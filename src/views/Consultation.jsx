import React, { useState, useEffect } from 'react';
import { Slide, Fade } from 'react-awesome-reveal';
import { auth } from '../config/firebase';
import { useAuthState} from 'react-firebase-hooks/auth';
import Banner from '../components/Banner';
import landing from '../assets/consultation/landing.png';
import psy1 from '../assets/consultation/psychologist1.jpg';
import psy2 from '../assets/consultation/psychologist2.jpg';
import psy3 from '../assets/consultation/psychologist3.png';
import Button from '../components/Button';
import Popup from '../components/Popup';

const psychologists = [
  {
    name: 'Riyan Portuguez', image: psy1,
    email: 'yourmillennialpsychologist@gmail.com',
    motto: 'Mental health and psychology are made easier.'
  },
  {
    name: 'Dr. Frost', image: psy2,
    email: 'drfrost@gmail.com',
    motto: 'The most important tool for counseling is the mind of the counselor.'
  },
  {
    name: 'Doc McStuffins', image: psy3,
    email: 'mcstuffins@gmail.com',
    motto: 'Kung gusto mo agad gumaling...'
  }
];

const Card = ({ name, image, email, motto }) => {
  return (
    <div className='group relative flex flex-col items-center w-[22rem] h-56 mt-28 rounded-3xl'>
      <img 
        src={image} 
        className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-cover
                   group-hover:-translate-y-2/3 transition-transform ease-in-out 
                 border-secondary-200 border-8 rounded-full z-10' 
      />
      <div className='flex justify-center items-end w-full h-[70%] py-2 bg-primary rounded-t-3xl group-hover:-translate-y-1/4 transition-transform ease-in-out'>
        <h3 className='px-3 text-secondary-200 text-3xl text-center font-bold'>{name}</h3>
      </div>
      <div className='absolute top-0 left-0 flex justify-center w-full h-full pt-[7.5rem] px-3'>
        <p className='flex justify-center items-center h-2/3 text-primary text-center font-semibold opacity-0 group-hover:opacity-100 transition-all ease-in-out'>{motto}</p>
      </div>
      <div className='flex-1 flex justify-center items-start w-full py-2 bg-primary rounded-b-3xl group-hover:translate-y-1/2 transition-transform ease-in-out'>
        <p className='px-3 text-tertiary-400'>{email}</p>
      </div>
    </div>
  );
};

const Form = () => {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [psychologist, setPsychologist] = useState('Riyan Portuguez');
  const [showPopup, setShowPopup] = useState(false);
  const [user] = useAuthState(auth);
  const [name, setName] = useState(user?.displayName);

  const handleSubmit = (e) => {
    e.preventDefault();
    // other validation and db operations
    setShowPopup(true);
  };

  return (
    <>
    <div className='flex justify-center items-center w-full h-screen bg-primary text-primary'>
      <Fade className='w-5/6 h-2/3'>
      <div className='relative flex flex-col justify-center items-center w-full h-full bg-[url("/src/assets/consultation/form.png")] bg-cover bg-center border-secondary-200 border-8'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-secondary-200 bg-opacity-75'></div>

        <h2 className='mb-5 text-4xl font-bold z-0'>Schedule a Consultation</h2>

        <form 
          className='flex flex-col items-center gap-8 z-0'
          onSubmit={handleSubmit}
        >
          <label htmlFor='name' className='flex flex-col w-full text-lg font-semibold'>
            Name:
            <input required
              name='name'
              type='text' 
              value={name}
              onChange={e => setName(e.target.value)}
              autoComplete='off'
              className='w-full h-10 px-2 text-secondary-200 autofill:text-secondary-200 text-base rounded-xl outline-none'
            />
          </label>
          <div className='flex justify-evenly gap-10'>
            <label htmlFor='psychologist' className='flex flex-col w-52 text-lg font-semibold'>
              Select a psychologist:
              <select 
                name='psychologist'
                value={psychologist} 
                onChange={e => setPsychologist(e.target.value)} 
                className='w-full h-10 px-2 text-secondary-200 text-base rounded-xl border-r-4 border-transparent outline-none'
              >
                <option value='Riyan Portuguez'>Riyan Portuguez</option>
                <option value='Dr. Frost'>Dr. Frost</option>
                <option value='Doc McStuffins'>Doc McStuffins</option>
              </select>
            </label>

            <label htmlFor='date' className='flex flex-col w-52 text-lg font-semibold'>
              Select date:
              <input required
                name='date'
                type='date' 
                value={date}
                min={today}
                onChange={e => setDate(e.target.value)}
                className='w-full h-10 px-2 text-secondary-200 text-base rounded-xl outline-none'
              />
            </label>
          </div>
          <Button theme='light' customTheme='w-44' type='submit'>Submit</Button>
        </form>
      </div>
      </Fade>
    </div>

    <Popup show={showPopup} onClose={() => setShowPopup(false)}>
      <div className='flex justify-center items-center w-full h-full text-secondary-200 text-xl text-center font-semibold'>
        You successfully set an appointment with {psychologist} on {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}!
      </div>
    </Popup>
    </>
  );
};

const Consultation = () => {
  return (
    <>
    <Banner title='NEED a CONSULTATION?' image='/category/advice.png' />

    {/* Landing */}
    <div className='grid grid-rows-1 grid-cols-2 gap-10 items-center w-full h-[75vh] px-32 py-16 bg-primary'>
      <Slide>
      <div>
        <h2 className='text-secondary-200 text-4xl font-bold'>Welcome to Safe Space Consultation.</h2>
        <p className='text-secondary-100 text-lg mt-3'>
        Our dedicated team of mental health professionals is here to support you on your journey to wellness.  Whether you're seeking guidance, coping strategies, or simply a  listening ear, we're here to provide compassionate and confidential  support tailored to your needs. Take the first step towards a healthier,  happier you by scheduling a consultation with us today.
        </p>
      </div>
      </Slide>
      <Slide direction='right' className='w-full h-full'>
      <div className='w-full h-full rounded-3xl overflow-hidden'>
        <img src={landing} className='w-full h-full object-cover hover:scale-110 transition-all ease-in-out' />
      </div>
      </Slide>
    </div>

    {/* Psychologists */}
    <div className='flex flex-col justify-center items-center gap-5 w-full h-screen bg-secondary-200'>
      <Fade direction='up'>
      <h2 className='text-primary text-4xl font-bold'>Our Psychologists</h2>
      </Fade>
      <Fade direction='up'>
      <div className='flex gap-10'>
        {psychologists.map((item, index) => 
          <Card key={index} name={item.name} image={item.image} email={item.email} motto={item.motto} />
        )}
      </div>
      </Fade>
    </div>

    {/* Form */}
    <Form />
    </>
  );
};

export default Consultation;