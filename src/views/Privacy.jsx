import React from 'react';
import Banner from '../components/Banner';

const ParagraphCard = props => {
  return (
    <div class="mb-10">
      <h4 class="text-xl font-bold text-secondary-200">{props.title}</h4>
      <p class="my-4 text-lg text-gray-500">
      {props.children}
      </p>
    </div>
  );
};

const Header = props => {
  return(
  <div class="mb-10">
    <h3 class="text-2xl font-bold text-secondary-200">{props.title}</h3>
    <p class="my-4 text-lg text-gray-500">
    {props.children}
    </p>
  </div>
  );
};

const BulletList = props => {
  return(
    <div class="mb-10">
      <ul class="list-disc ml-10 text-lg text-gray-500">
        {props.children}
      </ul>
    </div>
  );
};

const Contact = () => {
  return (
    <>
    <Banner title='Privacy' image='/banner/privacy-overlay.jpeg' description='Safeguards personal information, ensuring confidentiality and control over data shared in digital and physical spaces.'/>
    <div class="md:max-w-screen-lg text-justify px-4 sm:px-6 lg:px-8 pt-24 pb-6 mx-auto">
       
       {/*Privacy Policy Header  */}
      <h2 class="mb-2 text-4xl text-center  font-extrabold text-secondary-200">Privacy Policy</h2>
      <h4 class="mb-10 text-sm text-center  font-medium text-tertiary-400">Last Updated: April 21, 2024</h4>
        <p class="mb-10 my-4 text-lg text-gray-500">
        Safespace is committed to protecting the privacy of our users. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>
      
      <Header title="Collection of Data">
      We may collect information about you in a variety of ways. The information we may collect on the Site includes:
      </Header>

      <ParagraphCard title="Personal Data">
      Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you choose to participate in various activities related to the Site, such as newsletter subscriptions, downloads, and inquiries. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site.
      </ParagraphCard>
      
      <ParagraphCard title="Derivative Data">
      Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
      </ParagraphCard>

      <Header title="Use of Your Information">
      Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
      </Header>

      <BulletList>
        <li>Administer sweepstakes, promotions, and contests.</li>
        <li>Assist law enforcement and respond to subpoena.</li>
        <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
        <li>Create and manage your account.</li>
        <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
        <li>Email you regarding your account or order.</li>
        <li>Enable user-to-user communications.</li>
        <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
        <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
        <li>Increase the efficiency and operation of the Site.</li>
        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
      </BulletList>

      <Header title="Disclosure of Your Information">
      We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
      </Header>

      <ParagraphCard title="By Law or to Protect Rights">
      If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.
      </ParagraphCard>

      <ParagraphCard title="Third-Party Service Providers">
      We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
      </ParagraphCard>

      <ParagraphCard title="Marketing Communications">
      With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
      </ParagraphCard>

      <Header title="Tracking Technologies">
      </Header>

      <ParagraphCard title="Cookies and Web Beacons">
      We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
      </ParagraphCard>

      <ParagraphCard title="Philippine Data Privacy Act of 2012">
      In compliance with the Philippine Data Privacy Act of 2012 (Republic Act No. 10173), we assure you that we will only collect, use, and process your personal information in accordance with the principles of transparency, legitimate purpose, and proportionality. We will implement reasonable and appropriate organizational, physical, and technical security measures to protect your personal data against unauthorized access, use, or disclosure.
      </ParagraphCard>
    </div>
    </>
  );
};

export default Contact;