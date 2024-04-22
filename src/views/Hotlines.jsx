import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import hopeline from '../assets/hotlines/hopeline.png';
import pnp from '../assets/hotlines/pnp.png';
import manila_center from '../assets/hotlines/manila-center.png';
import nat_center from '../assets/hotlines/nat-center.png';
import { Zoom } from 'react-awesome-reveal';

const HotlineCard = props => {
  return (
    <div className={`flex mx-auto px-2 py-2 border w-2/3 text-lg text-center rounded-2xl ${props.title === 'Hopeline Philippines' || props.title === 'Manila Lifeline Centre' ? 'bg-primary text-secondary-200': 'bg-secondary-200 text-primary'}`} style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)' }}>
      <img src={props.image} className="pl-6 pt-6 h-24 mb-3 pr-10"/>
      <p className={`mx-auto h-full pt-10 text-2xl ml-8 font-bold ${props.title === 'Hopeline Philippines' || props.title === 'Manila Lifeline Centre' ? 'bg-primary text-secondary-200': 'bg-secondary-200 text-primary'}`}>{props.title}</p>
      <p className={`items-center h-full pt-10 text-2xl pr-12 font-medium text-justify ${props.title === 'Hopeline Philippines' || props.title === 'Manila Lifeline Centre' ? 'bg-primary text-secondary-200': 'bg-secondary-200 text-primary'}`}>{props.number}</p>
    </div>
  );
};

const Hotlines = () => {
  return (
    <>
      <Banner title="Emergency Hotlines" image="/banner/educ_resources.png" />

      <div className="flex flex-col justify-center items-center gap-4 py-12 w-full min-h-screen">
        <p className="mb-4 w-2/3 mx-auto text-secondary-200 text-center">SafeSpace is a Preventive Mental Health Website. In case of emergencies and other concerns, please refer to the following hotlines:</p>
        <Zoom triggerOnce className='w-full'>
        <HotlineCard image={pnp} title="Philippine National Police (PNP)" number="911" />
        <HotlineCard image={hopeline} title="Hopeline Philippines" number="2919" />
        <HotlineCard image={nat_center} title="National Center for Mental Health Crisis" number="1553" />
        <HotlineCard image={manila_center} title="Manila Lifeline Centre" number="8-969-1600" />
        </Zoom>
      </div>
    </>
  );
};

export default Hotlines;
