import React from 'react';
import Banner from '../components/Banner';

const NewsLargeCard = props => {
  return (
    <div className="mx-auto w-2/3 mt-12 rounded-lg overflow-hidden" style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)'}}>
      <div className="bg-primary">
        <img src={props.image} className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-t-lg w-full object-cover object-center" />
        <div className='p-6'>
          <h3 className="tracking-widest text-secondary-200 text-xs font-medium title-font">{props.date}</h3>
          <h2 className="text-lg text-gray-900 font-semibold title-font mb-4">{props.title}</h2>
          <p className="leading-relaxed text-base">{props.children}</p>
        </div>
      </div>
    </div>  
  );
};

const NewsCard = props => {
  return (
      <div className="mx-auto w-80 mt-12 rounded-lg" style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)', borderRadius: '1rem' }}>
        <div className="bg-primary rounded-lg">
          <img src={props.image} className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-t-lg w-full object-cover object-center" />
          <div className='p-6'>
            <h3 className="tracking-widest text-secondary-200 text-xs font-medium title-font">{props.date}</h3>
            <h2 className="text-lg text-gray-900 font-semibold title-font mb-4">{props.title}</h2>
            <p className="leading-relaxed text-base">{props.children}</p>
          </div>
        </div>
      </div>
  );
};

const News = () => {
  return (
    <>
      <Banner title='Support Communities' image='/public/banner/news.png' />
      
      <h1 className='mt-12 mx-24 w-72 text-secondary-200 text-4xl font-bold border-b-secondary-200 border-b-4'>Latest Updates</h1>

      <div class="flex flex-wrap mx-20 mb-24">
        <NewsLargeCard image="/src/assets/news/news1.webp" title="If you or someone you know is in crisis, these resources can help" date="May 19, 2021">If you are in crisis, or know someone who is, there are many resources that can help. These hotlines and organizations are free and available to anyone who is struggling.</NewsLargeCard>
        
        {/* link=https://www.nbcnews.com/news/us-news/if-you-or-someone-you-know-crisis-these-resources-can-n1267774 */}


        <NewsCard image="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" title="Lorem ipsum" date="April 21, 2024">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</NewsCard>
        <NewsCard image="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" title="Lorem ipsum" date="April 21, 2024">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</NewsCard>
        <NewsCard image="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" title="Lorem ipsum" date="April 21, 2024">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</NewsCard>
        <NewsCard image="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" title="Lorem ipsum" date="April 21, 2024">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</NewsCard>
      </div>  

    </>
  );
};

export default News;