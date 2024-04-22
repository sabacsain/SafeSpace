import React from 'react';
import PokeCard from '../components/PokeCard';
import Banner from '../components/Banner';
import mindful from '../assets/educ_resources/mindful_org.png';
import calmharm from '../assets/educ_resources/calm_harm.png';
import change2chill from '../assets/educ_resources/change_to_chill.png';
import studentsxdepression from '../assets/educ_resources/students_against_depression.png';
import { Zoom } from 'react-awesome-reveal';

const EducationalResources = () => {
  return (
    <>
    <Banner title='Educational Resources' image='/public/banner/educ_resources.png' />

    <Zoom>
    <div className='flex flex-col gap-16 p-12 w-full'>
      <div className='grid grid-cols-4'>
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
    </Zoom>
    </>
  );
};

export default EducationalResources;