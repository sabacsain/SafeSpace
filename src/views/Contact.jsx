import Button from '../components/Button';
import React, { useState } from 'react';
import Popup from '../components/Popup';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // other validation and db operations
    setShowPopup(true);
  };

  return (
    <>
    <div className='xl:max-w-screen-xl text-justify px-4 sm:px-6 lg:px- pt-20 pb-6 mx-auto'>
        <div>
          <h1 className='text-secondary-200 text-5xl font-bold py-4 ml-[30%]'>Have Some Questions?</h1>
          <p className='text-black text-lg py-1 max-w-md mx-auto'>
            We love to hear from you, just fill out the form below.<br/>
          </p>
          
          <div className="mt-10 mb-10 flex">
            <div className="pb-10 pt-10 rounded-3xl bg-secondary-200 p-2 text-primary flex flex-col w-[175%]">
              <p className='text-4xl ml-10 text-bold' >Contact Us</p>
              <form className="max-w-lg mx-auto ml-10"
                    onSubmit={handleSubmit}>
                {/* FIRST NAME */}
                <div className="grid grid-cols-2 gap-28">
                  {/* FIRST NAME */}
                  <div>
                    <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-secondary-200">First Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg className="w-6 h-6 text-secondary-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <input type="text" id="first-name" className="bg-gray-50 border border-gray-100 text-black text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[150%] pl-10 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" />
                    </div>
                  </div>
                  {/* LAST NAME */}
                  <div>
                    <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-secondary-200 dark:text-white">Last Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg className="w-6 h-6 text-secondary-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <input type="text" id="last-name" className="bg-gray-50 border border-gray-100 text-black text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[150%] pl-10 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" />
                    </div>
                  </div>
                </div>
                {/* EMAIL & USERNAME */}
                <div className="grid grid-cols-2 gap-28">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondary-200 dark:text-white">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg className="w-6 h-6 text-secondary-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                          <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                        </svg>
                      </div>
                      <input type="text" id="email" className="bg-gray-50 border border-gray-100 text-black text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[150%] pl-10 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phonenum" className="block mb-2 text-sm font-medium text-secondary-200 dark:text-white">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg className="w-6 h-6 text-secondary-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <input type="text" id="phonenum" className="bg-gray-50 border border-gray-100 text-black text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[150%] pl-10 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" />
                    </div>
                  </div>
                </div>
                {/* MESSAGE */}
                <div className="mb-5">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-secondary-200 dark:text-white">Message</label>
                  <textarea id="message" className="bg-gray-50 border border-gray-100 text-black text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[120%] pl-5 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message here..." rows="5"></textarea>
                </div>
                {/* SUBMIT BUTTON */}
                <div className="pt-3 flex justify-center w-full">
                  <Button type="submit" customTheme='ml-20 bg-secondary-100 text-primary hover:bg-tertiary-400'>Send Message</Button>
                </div>
              </form>
            </div>
            <div className="ml-8 mt-16">
              <p className="text-3xl py-3 font-bold text-secondary-200">Request a Callback</p>
              <p className="text-lg text-black mr-8 mb-7">If you prefer, we can give you a call instead. Just provide your phone number and a convenient time. The following are contact details of SafeSpace in various platforms:</p>
              <p className="text-lg text-black">Phone Number: 8-940-1411</p>
              <p className="text-lg text-black">Mobile Number: +639123456790 / +63952143212</p>
              <p className="text-lg text-black">Email: safespace@email.com</p>
              <p className="text-lg text-black mr-8 mb-7">Location: #28 KwinYasmin Street, Barangay Parang, Marikina City</p>
            </div>
          </div>
        </div>
    </div>
    <Popup show={showPopup} onClose={() => setShowPopup(false)}>
      <div className='flex justify-center items-center w-full h-full text-secondary-200 text-xl text-center font-semibold'>
        Thank you for your message. We'll get back to you as soon as possible. 
      </div>
      </Popup>
    </>
    
  );
};

export default Contact;
