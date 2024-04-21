import React from 'react';
import Banner from '../components/Banner';
import hopeline from '../assets/hotlines/hopeline.png'
import pnp from '../assets/hotlines/pnp.png'
import manila_center from '../assets/hotlines/manila-center.png'
import nat_center from '../assets/hotlines/nat-center.png'

const HotlineCard = props => {
  return (
    <div className={`flex mx-auto px-2 py-2 border w-2/3 text-lg text-center rounded-2xl ${props.title === 'Hopeline Philippines' || props.title === 'Manila Lifeline Centre' ? 'bg-primary text-secondary-200': 'bg-secondary-200 text-primary'} transform transition-transform duration-300 ease-in-out hover:scale-105`} style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)'}}> 
          <img src={props.image} className={`pl-6 pt-6 h-24 mb-3 pr-10`} />
          <p className={`mx-auto h-full pt-10 text-2xl ml-8 font-bold ${props.title === 'Hopeline Philippines' || props.title === 'Manila Lifeline Centre' ? 'bg-primary text-secondary-200': 'bg-secondary-200 text-primary'}`}>
            {props.title}
          </p>
          <p className={`items-center h-full pt-10 text-2xl pr-12 font-medium text-justify ${props.title === 'Hopeline Philippines' || props.title === 'Manila Lifeline Centre' ? 'bg-primary text-secondary-200': 'bg-secondary-200 text-primary'}`}>
          {props.number}
          </p>
        </div>
  );
};

const Hotlines = () => {
  return (
    <>
      <Banner title='Emergency Hotline' image='/public/banner/educ_resources.png'/>

      <div className='flex flex-col gap-4 pt-12 h-screen mb-36'>
        <p className='mb-4 w-2/3 mx-auto text-center'>SafeSpace is a Preventive Mental Health Website, if in case of emergencies and other concerns, please refer to the following hotlines:</p>
        <HotlineCard image={pnp} title='Philippine National Police (PNP)' number="911"></HotlineCard>
        <HotlineCard image={hopeline} title='Hopeline Philippines' number="2919"></HotlineCard>
        <HotlineCard image={nat_center} title='National Center for Mental Health Crisis' number="1553"></HotlineCard>
        <HotlineCard image={manila_center} title='Manila Lifeline Centre' number="8-969-1600"></HotlineCard>
      </div>
    </>
  );
};

export default Hotlines;
