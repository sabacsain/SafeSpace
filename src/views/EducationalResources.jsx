import React from 'react';
import Banner from '../components/Banner';
import mindful from '../assets/educ_resources/mindful_org.png';
import calmharm from '../assets/educ_resources/calm_harm.png';
import change2chill from '../assets/educ_resources/change_to_chill.png';
import studentsxdepression from '../assets/educ_resources/students_against_depression.png';

const PokeCard = props => {
  return (
    <div className={`flex flex-col items-center justify-center h-120 w-64 bg-primary rounded-2xl border-primary-500 border-opacity-50 ${props.title === "Students Against Depression" ? 'px-8 py-3' : ''} transform transition-transform duration-300 ease-in-out hover:scale-105`} style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)'}}>
      <img src={props.image} className={`mx-auto pt-6 h-28 mb-3 ${props.title === "Students Against Depression" ? 'px-5' : 'px-10'}`} />
      <a href={props.link} target="_blank" className={`text-xl font-semibold pb-3 border-b-2 px-3 border-secondary-200 text-center text-secondary-200 hover:text-accent`}>{props.title}</a>
      <p className={`items-center h-full py-6 text-xs text-justify ${props.title === "Students Against Depression" ? 'px-2' : 'px-10'}`}>
        {props.children}
      </p>
    </div>
  );
};


const EducationalResources = () => {
  return (
    <>
    <Banner title='Educational Resources' image='/public/banner/educ_resources.png' />

    <div className='flex flex-col gap-16 p-12 w-full h-screen'>
      <div className='grid grid-cols-4 gap-16'>
        <PokeCard image={mindful} link="https://www.mindful.org/" title="Mindful">
            Mindful.org is a website that shares content, training, courses, and more – all around the topic of mental health. From meditation to mental health in professional settings, they cover a wide range of topics in a thoughtful and accessible way.
          </PokeCard>
          <PokeCard image={change2chill} link="https://www.changetochill.org/" title="Change to Chill">
            A resource website that provides mental health articles, activities, and lesson plans. A valuable springboard for teachers looking to incorporate more mental health material into their lessons plans, these resources are free and designed specifically for students.
          </PokeCard>
          <PokeCard image={calmharm} link="https://calmharm.stem4.org.uk/" title="Calm Harm">
            Calm Harm is an app designed to help people resist or manage the urge to self-harm. It was developed for teenage mental health charity stem4 by Dr. Nihara Krause, Consultant Clinical Psychologist. It was created using the basic principles of an evidence-based therapy
          </PokeCard>
          <PokeCard image={studentsxdepression} link="https://www.studentsagainstdepression.org/" title="Students Against Depression">
            An incredibly useful resource for students and teachers. It offers advice, information, guidance, and help to those affected by low mood, depression, and suicidal thinking. The story of this project starts with the sad loss of two 
          </PokeCard>
        </div>
    </div>
    </>
  );
};

export default EducationalResources;