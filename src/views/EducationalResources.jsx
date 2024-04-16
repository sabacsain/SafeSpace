import React from 'react';
import mindful from '../assets/educ_resources/mindful_org.png';
import calmharm from '../assets/educ_resources/calm_harm.png';
import change2chill from '../assets/educ_resources/change_to_chill.png';
import studentsxdepression from '../assets/educ_resources/students_against_depression.png';
import educlogo from '../assets/educ_resources/educ_resources.png'

const PokeCard = props => {
  return (
    <div className={`flex flex-col items-center justify-center h-120 w-64 bg-primary rounded-2xl border-primary-500 border-opacity-50 ${props.title === "Students Against Depression" ? 'px-8 py-3' : ''} transform transition-transform duration-300 ease-in-out hover:scale-105`} style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)'}}>
      <img src={props.image} className={`mx-auto pt-6 h-28 mb-3 ${props.title === "Students Against Depression" ? 'px-5' : 'px-10'}`} />
      <h1 className={`text-xl font-semibold pb-3 border-b-2 px-3 border-secondary-200 text-center text-secondary-200`}>{props.title}</h1>
      <p className={`items-center h-full py-6 text-xs text-justify ${props.title === "Students Against Depression" ? 'px-2' : 'px-10'}`}>
        {props.children}
      </p>
    </div>
  );
};


const EducationalResources = () => {
  return (
    <>
    <div className='container relative flex items-center w-full h-32 pt-3 pl-16 pr-16 -mt-[3vh] bg-secondary-200'>
      <div className='relative flex items-center justify-between w-full'>
        <img src={educlogo} className='w-24 h-auto transform scale-x-[-1] opacity-70' />
        <h1 className='text-primary text-4xl font-semibold whitespace-nowrap'>EDUCATIONAL RESOURCES</h1>
        <img src={educlogo} className='w-24 h-auto opacity-70' />
      </div>
    </div>

    <div className='flex flex-col gap-16 p-12 w-full h-screen'>
      <div className='grid grid-cols-4 gap-16'>
        <PokeCard image={mindful} title="Mindful">
            Mindful.org is a website that shares content, training, courses, and more – all around the topic of mental health. From meditation to mental health in professional settings, they cover a wide range of topics in a thoughtful and accessible way.
          </PokeCard>
          <PokeCard image={change2chill} title="Change to Chill">
            A resource website that provides mental health articles, activities, and lesson plans. A valuable springboard for teachers looking to incorporate more mental health material into their lessons plans, these resources are free and designed specifically for students.
          </PokeCard>
          <PokeCard image={calmharm} title="Calm Harm">
            Calm Harm is an app designed to help people resist or manage the urge to self-harm. It was developed for teenage mental health charity stem4 by Dr. Nihara Krause, Consultant Clinical Psychologist. It was created using the basic principles of an evidence-based therapy
          </PokeCard>
          <PokeCard image={studentsxdepression} title="Students Against Depression">
            An incredibly useful resource for students and teachers. It offers advice, information, guidance, and help to those affected by low mood, depression, and suicidal thinking. The story of this project starts with the sad loss of two 
          </PokeCard>
        </div>
    </div>
    </>
  );
};

export default EducationalResources;