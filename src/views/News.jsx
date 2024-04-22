import React from 'react';
import Banner from '../components/Banner';
import { Zoom } from 'react-awesome-reveal';

const NewsLargeCard = props => {
  return (
    <a href={props.link} target='_blank' className='w-2/3 px-4'>
      <div className={`mx-auto mt-12 rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105`} style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)'}}>
        <div className="bg-primary">
          <img src={props.image} className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-t-lg w-full object-cover object-center" />
          <div className='p-6 text-justify'>
            <h3 className="tracking-widest text-secondary-200 text-xs font-medium title-font">{props.date}</h3>
            <h2 className="text-lg text-gray-900 font-semibold title-font mb-4">{props.title}</h2>
            <p className="leading-relaxed text-base">{props.children}</p>
          </div>
        </div>
      </div>  
    </a>
  );
};

const NewsCard = props => {
  return (
    <a href={props.link} target='_blank' className='w-1/3 px-4'>
      <div className={`mx-auto mt-12 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105`}  style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)', borderRadius: '1rem' }}>
        <div className="bg-primary rounded-lg">
          <img src={props.image} className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-t-lg w-full object-cover object-center" />
          <div className='p-6 text-justify'>
            <h3 className="tracking-widest text-secondary-200 text-xs font-medium title-font">{props.date}</h3>
            <h2 className="text-lg text-gray-900 font-semibold title-font mb-4">{props.title}</h2>
            <p className="leading-relaxed text-base">{props.children}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

const News = () => {
  return (
    <>
      <Banner title='News and Updates' image='/banner/news.png' />
      
      <h1 className='mt-12 mx-24 w-72 text-secondary-200 text-4xl font-bold border-b-secondary-200 border-b-4'>Latest Updates</h1>
      
      <Zoom>
      <div className="flex flex-wrap justify-between mx-20 mb-24">
        <NewsLargeCard image="/src/assets/news/news1.webp" link='https://www.nbcnews.com/news/us-news/if-you-or-someone-you-know-crisis-these-resources-can-n1267774' title="If you or someone you know is in crisis, these resources can help" date="May 19, 2021">If you are in crisis, or know someone who is, there are many resources that can help. These hotlines and organizations are free and available to anyone who is struggling.</NewsLargeCard>
        <NewsCard image="/src/assets/news/news2.png" link='https://www.medicalnewstoday.com/articles/8933' title="What is Depression" date="August 5, 2022">Depression is a mental health condition that causes...</NewsCard>
        <NewsCard image="/src/assets/news/news3.png" link='https://www.medicalnewstoday.com/articles/323454' title="What to know about anxiety" date="December 19, 2923">Anxiety is a natural emotion. However, it can also cause physical symptoms, such as shaking and sweating.</NewsCard>
        <NewsCard image="/src/assets/news/news4.png" link='https://www.medicalnewstoday.com/articles/145855' title="Stress and How to Manage it" date="March 12, 2020">Stress is a natural reaction to specific demands and events, but ongoing stress can affect a person’s health and wellbeing.</NewsCard>
        <NewsCard image="/src/assets/news/news5.png" link='https://www.medicalnewstoday.com/articles/happiness-can-be-learned-but-it-may-take-practicing-7-habits#Happiness-is-a-process' title="Habits towards Happiness" date="April 21, 2024">It seems the simplest of tasks: Be happy. It is not a directive to be hedonistic or shallow. Rather, it is about living our years on Earth wisely.</NewsCard>
      </div>  
      </Zoom>
    </>
  );
};

export default News;