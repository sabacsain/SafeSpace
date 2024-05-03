import React from 'react';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div className='relative flex items-center gap-16 w-full h-[95vh] pl-16 -mt-[3vh]'>
      <div className="about-section flex items-start">
        <div>
          <h1 className='text-secondary-200 text-5xl font-bold py-4 ml-[30%]'>Have Some Questions?</h1>
          <p className='text-secondary-100 text-lg py-1'>
            We love to hear from you, but we might not reply as quick as you expect due to high volume of emails. Please give us at least 24 hours before re-sending your email.<br/>
            If you have any question, please be as detailed as you can, so we can reply to you with the most useful answer to your question. Additionally, if your query is urgent or time-sensitive, consider mentioning it in the subject line of your email or message. We strive to provide prompt and helpful responses to all inquiries, ensuring a positive experience for our users. Thank you for your understanding and cooperation.
          </p>
          <div className="mt-4 flex">
            <div className="rounded-3xl bg-secondary-200 p-2 text-primary flex flex-col w-[155%]">
              <p className='text-4xl py-2 ml-10 text-bold'>Contact Us</p>
              <form className="max-w-lg mx-auto ml-10">
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
                <div className="flex justify-center w-full">
                  <Button type="submit" customTheme='ml-20 bg-secondary-100 text-primary hover:bg-tertiary-400'>Send Message</Button>
                </div>
              </form>
            </div>
            <div className="ml-8 mt-4 text-secondary-100">
              <p className="text-3xl py-3 font-bold text-secondary-200">Request a Callback</p>
              <p className="text-lg text-secondary-100 mr-8 mb-7">If you prefer, we can give you a call instead. Just provide your phone number and a convenient time, and we'll get back to you as soon as possible to assist you with any questions or concerns you may have. The following are contact details of SafeSpace in various platforms:</p>
              <p className="text-xl text-bold text-secondary-100">Phone Number: 940-1411</p>
              <p className="text-xl text-bold text-secondary-100">Mobile Number: +63054842713 / +63052143212</p>
              <p className="text-xl text-bold text-secondary-100">Email: safespace@gmail.com</p>
              <p className="text-xl text-bold text-secondary-100">Location: #28 KwinYasmin Street, Barangay Parang, Marikina City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
