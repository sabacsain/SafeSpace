import React from 'react';
import Button from '../components/Button';
import Banner from '../components/Banner';
import Popup from '../components/Popup';

const RadioButton = props => {

  return (
      <>
      <h3 class="mb-5 text-lg font-medium text-black">{props.question}</h3>

        {/* Radio Button */}
        <ul class="grid w-full gap-6 md:grid-cols-5">
          {/* Extremely Disagree */}
            <li>
                <input type="radio" id={props.id + 1} name={props.id} value="1" class="hidden peer"/>
                <label for={props.id + 1} class="h-20 inline-flex items-center justify-center w-full p-5 text-black bg-primary border border-radio-100 rounded-2xl cursor-pointer peer-checked:bg-radio-100 peer-checked:border-radio-100 peer-checked:text-primary hover:text-primary hover:bg-radio-100 ease-in-out transform hover:-translate-y-5 transition duration-400">
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Extremely Disagree</div>
                    </div>
                </label>
            </li>
            
            {/* Disagree */}
            <li>
                <input type="radio" id={props.id + 2} name={props.id} value="2" class="hidden peer"/>
                <label for={props.id + 2} class="h-20 inline-flex items-center justify-center w-full p-5 text-black bg-primary border border-radio-200 rounded-2xl cursor-pointer peer-checked:bg-radio-200 peer-checked:border-radio-200 peer-checked:text-primary hover:text-primary hover:bg-radio-200 ease-in-out transform hover:-translate-y-5 transition duration-400">
                    <div class=" block">
                        <div class="w-full text-lg font-semibold">Disagree</div>
                    </div>
                </label>
            </li>

            {/* Neutral */}
              <li>
                <input type="radio" id={props.id + 3} name={props.id} value="3" class="hidden peer"/>
                <label for={props.id + 3} class="h-20 inline-flex items-center justify-center w-full p-5 text-black bg-primary border border-radio-300 rounded-2xl cursor-pointer peer-checked:bg-radio-300 peer-checked:border-radio-300 peer-checked:text-primary hover:text-primary hover:bg-radio-300 ease-in-out transform hover:-translate-y-5 transition duration-400">
                    <div class=" block">
                        <div class="w-full text-lg font-semibold">Neutral</div>
                    </div>
                </label>
            </li>

            {/* Agree */}
            <li>
                <input type="radio" id={props.id + 4} name={props.id} value="4" class="hidden peer"/>
                <label for={props.id + 4} class="h-20 inline-flex items-center justify-center w-full p-5 text-black bg-primary border border-radio-400 rounded-2xl cursor-pointer peer-checked:bg-radio-400 peer-checked:border-radio-400 peer-checked:text-primary hover:text-primary hover:bg-radio-400 ease-in-out transform hover:-translate-y-5 transition duration-400">
                    <div class=" block">
                        <div class="w-full text-lg font-semibold">Agree</div>
                    </div>
                </label>
            </li>

            {/* Extremely Agree */}
            <li>
                <input type="radio" id={props.id + 5} name={props.id} value="5" class="hidden peer"/>
                <label for={props.id + 5} class="h-20 inline-flex items-center justify-center w-full p-5 text-black bg-primary border border-radio-500 rounded-2xl cursor-pointer peer-checked:bg-radio-500 peer-checked:border-radio-500 peer-checked:text-primary hover:text-primary hover:bg-radio-500 ease-in-out transform hover:-translate-y-5 transition duration-400">
                    <div class=" block">
                        <div class="w-full text-lg font-semibold">Extremely Agree</div>
                    </div>
                </label>
            </li>

          <div class='mb-1'></div>
        </ul>
      </>
  );
};



const SelfAssessment = () => {
  return (
    <>
    <Banner title="Self-Assessment" image="/banner/educ_resources.png" />

    <div class="md:max-w-screen-lg text-justify px-4 sm:px-6 lg:px-8 pt-24 pb-6 mx-auto">
      
      <h1 class='mb-5 text-3xl font-bold text-black'>Mood Questionaire</h1>
      <RadioButton id='Q1'question = 'Have you experienced a lack of interest or pleasure in activities that you typically enjoy?' > </RadioButton>
      <RadioButton id='Q2' question = 'Are you feeling more tired or fatigued than usual?' > </RadioButton>
      <RadioButton id='Q3' question = 'Have you noticed changes in your appetite or weight recently?' > </RadioButton>
      <RadioButton id='Q4' question = 'Do you find yourself feeling more irritable or easily agitated than usual?' > </RadioButton>
      <RadioButton id='Q5' question = 'Do you feel bad about yourself?' > </RadioButton>

      <h1 class='mt-5 mb-5 text-3xl font-bold text-black'>Anxiety Questionaire</h1>
      <RadioButton id='Q1'question = 'Do you feel tired out for no good reason?' > </RadioButton>
      <RadioButton id='Q2' question = 'Do you feel hopeless?' > </RadioButton>
      <RadioButton id='Q3' question = 'Do you feel so restless you could not sit still?' > </RadioButton>
      <RadioButton id='Q4' question = 'Are you feeling hopeless lately?' > </RadioButton>
      <RadioButton id='Q5' question = 'Are you having panic-attacks or sudden nervousness?' > </RadioButton>

      <div class='mt-5 mb-5  flex item-center justify-center'>
        <Button>Submit</Button>
      </div>

      <div class='mt-10 mb-5 w-full h50 p-10 bg-secondary-200 rounded-2xl item-center justify-center text-primary'>
        <h1 class='mb-5 text-xl font-bold text-primary'>What will happen to your responses?</h1>
        <p>After you finish answering the self-assessment checklist, rest assured that your data will be not be saved on our servers. We understand the sensitivity of the information provided, and your privacy is our top priority. Your responses will be automatically deleted after generating your assessment results. Should you have any concerns about your data privacy or wish to learn more about our data handling practices, please don't hesitate to reach out to us.</p>
      </div>

      <div class='mb-5 w-full h50 p-10  item-center justify-center text-black'>
        <h1 class='mb-5 text-xl font-bold '>References</h1>
        <li class="list-none "><a href='https://www.thinkmentalhealthwa.com.au/mental-health-self-assessment-checklist/' target='_blank'>https://www.thinkmentalhealthwa.com.au/mental-health-self-assessment-checklist/</a></li>
        <li class="list-none"><a href='https://www.keepingwellnwl.nhs.uk/self-help-resources/self-assessment-questionnaires' target='_blank'>https://www.keepingwellnwl.nhs.uk/self-help-resources/self-assessment-questionnaires</a></li>
        <li class="list-none"><a href='https://portal.ct.gov/-/media/demhs/_docs/leop/mental-health-awareness-checklist-final-2023.pdf' target='_blank'>https://portal.ct.gov/-/media/demhs/_docs/leop/mental-health-awareness-checklist-final-2023.pdf</a></li>
        
      </div>
      
    </div>

    {/* <Popup show={showPopup} onClose={() => setShowPopup(false)}>
      <div className='flex justify-center items-center w-full h-full text-secondary-200 text-xl text-center font-semibold'>
        You successfully 
      </div>
    </Popup> */}
    </>
  );
};

export default SelfAssessment;