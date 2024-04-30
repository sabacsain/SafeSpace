import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Banner from '../components/Banner';
import nami from '../assets/communities/nami.jpg'
import cups from '../assets/communities/7cups.png'
import psych from '../assets/communities/psych_today.png'

const CommunityCard = props => {
  return (
    <div className='flex justify-center items-center w-full h-[85vh] px-20'>
      <div className="flex gap-20 h-fit">
      { props.title === "7 Cups" ? (
      <>
        <div className=''>
          <h1 className={`text-4xl font-bold text-secondary-200 text-left mb-4`}>{props.title}</h1>
          <p className='text-secondary-100 text-justify'>{props.children}</p>
        </div>
        <img src={props.image} className='w-80 h-80 rounded-3xl' />
      </>
    ) : (
      <>
        <img src={props.image} className='w-80 h-80 rounded-3xl' />
        <div className=''>
          <h1 className={`text-4xl font-bold text-secondary-200 text-left mb-4`}>{props.title}</h1>
          <p className='text-secondary-100 text-justify'>{props.children}</p>
        </div>
      </>
    )}
    </div>
    </div>
  );
};

const Communities = () => {
  return (
    <>
      <Banner title='Support Communities' image='/banner/communities-overlay.jpg' description='Support communities offer a network of empathy and resources for individuals facing shared challenges, fostering solidarity and empowerment.'/>
      
      <div className='flex flex-col justify-center items-center gap-10'>
        <Fade direction='right' duration={1750}>
        <CommunityCard image={nami} title="NAMI (National Alliance on Mental Illness)">
          NAMI, the National Alliance on Mental Illness, is the nation's largest  grassroots mental health organization dedicated to building better lives  for millions of Americans affected by mental illness. Through advocacy,  education, support, and public awareness, NAMI strives to improve the  lives of individuals and families impacted by mental health conditions.  With a network of over 600 local affiliates across the country, NAMI  offers support groups, educational programs, and advocacy initiatives to  promote understanding, reduce stigma, and ensure access to quality  mental health care for all. Join us in our mission to support, educate,  and advocate for individuals living with mental illness and their loved  ones.
        </CommunityCard>
        </Fade>
        <Fade direction='left' duration={1750}>
        <CommunityCard image={cups} title="7 Cups">
          7 Cups is a comprehensive online platform that serves as a beacon of support for individuals navigating the complexities of mental health challenges. At its core, 7 Cups operates as a bridge between those seeking solace and understanding and a network of compassionate, trained listeners ready to offer empathetic ears and guidance. Through its array of resources, individuals can access anonymous chat rooms, participate in forums, and engage in one-on-one messaging, all designed to provide a safe and nurturing environment for expression and connection.
        </CommunityCard>
        </Fade>
        <Fade direction='right' duration={1750}>
        <CommunityCard image={psych} title="Psychology Today">
        Psychology Today stands as a robust repository of knowledge and insight,  providing a treasure trove of articles, blogs, and resources that delve  into the intricacies of mental health, psychology, and overall  well-being. Authored by esteemed experts and professionals in the field,  each piece is meticulously crafted to offer nuanced perspectives and  practical guidance. Covering a vast array of topics ranging from anxiety  and depression to relationships and personal development, Psychology  Today serves as a beacon of enlightenment for individuals seeking to  deepen their understanding of the human mind and behavior.
        </CommunityCard>
        </Fade>
      </div>
    </>
  );
};

export default Communities;