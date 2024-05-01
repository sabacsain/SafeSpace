import React, { useState } from 'react';
import Button from '../components/Button';
import Banner from '../components/Banner';
import Popup from '../components/Popup';

const RadioButton = ({ id, question, onRadioChange }) => {
  const handleRadioChange = e => {
    onRadioChange(id, parseInt(e.target.value));
  };

  return (
    <>
      <h3 className="mb-5 text-md font-small text-black">{question}</h3>
      <ul className="grid w-full gap-6 md:grid-cols-5">
        {[1, 2, 3, 4, 5].map(value => (
          <li key={value}>
            <input
              type="radio"
              id={`${id}-${value}`}
              name={id}
              value={value}
              onChange={handleRadioChange}
              className="hidden peer"
              required
            />

          <label
            htmlFor={`${id}-${value}`}
            className={`h-16 mb-8 inline-flex items-center justify-center w-full p-5 text-black bg-primary border rounded-2xl cursor-pointer 
              ${value === 5 && 'border-secondary-200 hover:bg-secondary-200 peer-checked:bg-secondary-200 peer-checked:border-secondary-200'}
              ${value === 4 && 'border-secondary-100 hover:bg-secondary-100 peer-checked:bg-secondary-100 peer-checked:border-secondary-100'}
              ${value === 3 && 'border-tertiary-500 hover:bg-tertiary-500 peer-checked:bg-tertiary-500 peer-checked:border-tertiary-500'}
              ${value === 2 && 'border-light_accent hover:bg-light_accent peer-checked:bg-light_accent peer-checked:border-light_accent'}
              ${value === 1 && 'border-accent hover:bg-accent peer-checked:bg-accent peer-checked:border-accent'}
              peer-checked:text-primary
              hover:text-primary
              ease-in-out transform hover:-translate-y-5
              transition duration-400`
            }
          >

              <div className="block">
                <div className="w-full text-md font-semibold text-center">
                  {value === 1 && 'Extremely Disagree'}
                  {value === 2 && 'Disagree'}
                  {value === 3 && 'Neutral'}
                  {value === 4 && 'Agree'}
                  {value === 5 && 'Extremely Agree'}
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

const SelfAssessment = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [responses, setResponses] = useState({});
  const [mean, setMean] = useState(null);
  const [message, setMessage] = useState('');

  const handleRadioChange = (questionId, value) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // If all radio button groups are not selected, display error message
    if (Object.values(responses).length < 10) {
      setMessage("Warning: Please answer all questions.");
      setShowPopup(true);
      return;
    }

    const total = Object.values(responses).reduce((acc, curr) => acc + curr, 0);
    const meanValue = total / Object.values(responses).length;
    setMean(meanValue.toFixed(2));   
    const roundedMeanValue = Math.floor(meanValue); // Assign the rounded value to a new variable
    
    switch(roundedMeanValue){
      case 1:
        setMessage("Your self-assessment indicates areas where you may need additional support or attention. Consider reaching out to a mental health professional or support resources to explore strategies for improvement and well-being")
        break;
      case 2:
        setMessage("Your self-assessment suggests some challenges or areas for improvement in your mental health. It's essential to prioritize self-care and consider seeking guidance from a mental health professional if needed.");
        break;
      case 3:
        setMessage("Your self-assessment shows a moderate level of mental well-being. Continue to maintain self-care practices and consider exploring additional resources or support to further enhance your mental health.");
        break;
      case 4:
        setMessage("Your self-assessment indicates a good level of mental well-being. Keep up the positive habits and consider incorporating new strategies or activities to continue promoting your mental health.");
        break;
      case 5:
        setMessage( "Congratulations on your self-assessment results, indicating excellent mental well-being. Continue to prioritize self-care practices and consider sharing your strategies with others to promote positive mental health in your community.");
        break;
      default:
        setMessage("Unknown error occured. Please try again.");
    }

   
  };

  return (
    <>
      <Banner title="Self-Assessment" image="/banner/assessment-overlay.jpeg"  description='Self-assessment enables individuals to evaluate their own skills, knowledge, or well-being, facilitating personal growth and reflection.' />

      <div className="md:max-w-screen-lg text-justify px-4 sm:px-6 lg:px-8 pt-24 pb-6 mx-auto">
        <h1 className="mb-5 text-3xl font-bold text-black">Mood Questionnaire</h1>
        <form onSubmit={handleSubmit}>
          <RadioButton
            id="Mood-Q1"
            question="1. Have you experienced a lack of interest or pleasure in activities that you typically enjoy?"
            onRadioChange={handleRadioChange}
          />
          <RadioButton
            id="Mood-Q2"
            question="2. Are you feeling more tired or fatigued than usual?"
            onRadioChange={handleRadioChange}
          />
          <RadioButton
            id="Mood-Q3"
            question="3. Have you noticed changes in your appetite or weight recently?'"
            onRadioChange={handleRadioChange}
          />
          <RadioButton
            id="Mood-Q4"
            question="4. Do you find yourself feeling more irritable or easily agitated than usual?"
            onRadioChange={handleRadioChange}
          />
          <RadioButton
            id="Mood-Q5"
            question="5. Do you feel bad about yourself?"
            onRadioChange={handleRadioChange}
          />
          <RadioButton
            id="Mood-Q6"
            question="6. Do you feel tired out for no good reason?"
            onRadioChange={handleRadioChange}
          />
          <RadioButton
            id="Mood-Q7"
            question="7. Do you feel hopeless?"
            onRadioChange={handleRadioChange}
          />
          <RadioButton
            id="Mood-Q8"
            question="8. Do you feel so restless you could not sit still?"
            onRadioChange={handleRadioChange}
          />
          <RadioButton
            id="Mood-Q9"
            question="9. Are you feeling hopeless lately?"
            onRadioChange={handleRadioChange}
          />
          <RadioButton
            id="Mood-Q10"
            question="10. Are you having panic-attacks or sudden nervousness?"
            onRadioChange={handleRadioChange}
          />
          <div className="mt-5 mb-5  flex item-center justify-center">
            <Button onClick={handleSubmit} type="submit">Submit</Button>
          </div>
        </form>
      

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

      <Popup show={showPopup} onClose={() => setShowPopup(false)}>
        <div className="flex flex-col justify-center items-center w-full h-full text-secondary-200 text-xl text-center font-semibold">
          <p>{mean != null && `Mood Rating: ${mean}`}</p>
          <p class='mt-5 w-4/5 text-sm text-black'>{message}</p>
        </div>
      </Popup>

    </>
  );
};

export default SelfAssessment;
