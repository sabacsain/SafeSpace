import React, {useState} from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { LoginPages, MainPages } from '../routes/paths';
import signup_image from '../assets/login/signup.png';
import login_image from '../assets/login/login.png';
import Login from './Login';
import axios from 'axios';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Signup = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(data => {
        // Handle successful user creation
        console.log("User created successfully:", data);
        alert("User created successfully");
        navigate(LoginPages.LOGIN);
      })
      .catch(error => {
        // Handle errors
        if (error.code === 'auth/email-already-in-use') {
          console.error("Email is already in use:", error.message);
          alert("Email is already in use:", error.message);
        } else if (error.code === 'auth/weak-password') {
          console.error("Weak password:", error.message);
          alert("Weak password:", error.message);
        } else {
          console.error("Error creating user:", error);
          alert("Error creating user:", error);
        }
      });

  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try{
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log(userCredential);
  //     const user = userCredential.user;
  //     localStorage.setItem('token', user.accessToken);
  //     localStorage.setItem('user', JSON.stringify(user));
  //     navigate(LoginPages.LOGIN);
      
  //   } catch(error){
  //     console.error(error)
  //   }
  // }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   axios.post('http://localhost:8081/signup', {first_name, last_name, email, username, password})
  //     .then(res => {
  //       console.log(res.data); 

  //       // Go to Login if Signup is successful
  //       if (res.data == "Signup Successful") {
  //           alert("Signup Successful. User has been created successfully.");
  //           navigate(LoginPages.LOGIN);
  //       } else if (res.data == "User already exists") {
  //           alert("Signup Failed. Username already exists. Please choose a different username.");
  //       } else {
  //           alert("Something went wrong. Please try again later.");
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }
  return (
    <>
  <div class="min-h-screen bg-tertiary-200 text-gray-900 flex justify-center">
    <div class="max-w-screen-lg m-0 sm:m-20 bg-primary shadow-lg sm:rounded-lg flex justify-center flex-1 overflow-hidden">
      
        {/* <!-- LEFT SIDE */}
        <div class="w-1/2 xl:w-1/2  relative overflow-hidden bg-cover bg-no-repeat">
          <img class ="w-full h-full  transition duration-300 ease-in-out hover:scale-110" src={login_image} alt="Login Image"/>
        </div>

        {/* <!-- RIGHT SIDE */}
        <div class="w-1/2 xl:w-1/2 mt-10 flex flex-col items-center">
          <div class="w-full flex-1 mt-10">
            <div class="flex flex-col items-center">

              <h4 class="mb-5 mt-25 pb-1 text-xl text-secondary-200 font-semibold">
                SIGN UP
              </h4>
              
              <form class="max-w-lg mx-auto" onSubmit={handleSubmit}>
              
              {/* FIRST NAME */}
              <div class="mb-5">
                  <label for="first-name" class="block mb-2 text-sm font-medium text-secondary-200 dark:text-white">First Name</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg class="w-6 h-6 text-secondary-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <input type="text" id="first-name" class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name"
                      onChange = {e => setFirstName(e.target.value)} />
                  </div>
                </div>

              {/* LAST NAME */}
              <div class="mb-5">
                  <label for="last-name" class="block mb-2 text-sm font-medium text-secondary-200 dark:text-white">Last Name</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg class="w-6 h-6 text-secondary-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <input type="text" id="last-name" class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name"
                      onChange = {e => setLastName(e.target.value)} />
                  </div>
                </div>

                {/* EMAIL */}
              <div class="mb-5">
                  <label for="email" class="block mb-2 text-sm font-medium text-secondary-200 dark:text-white">Email</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-6 h-6 text-secondary-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                      <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                    </svg>
                    </div>
                    <input type="text" id="email" class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"
                      onChange = {e => setEmail(e.target.value)} />
                  </div>
                </div>

              {/* USERNAME */}
              <div class="mb-5">
                  <label for="username" class="block mb-2 text-sm font-medium text-secondary-200 dark:text-white">Username</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg class="w-6 h-6 text-secondary-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <input type="text" id="username" class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username"
                      onChange = {e => setUsername(e.target.value)} />
                  </div>
              </div>

              {/* PASSWORD */}
                <div class="mb-5">
                  <label for="password" class="block mb-2 text-sm font-medium text-secondary-200 dark:text-white">Password</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-6 h-6 text-secondary-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
                    </svg>
                    </div>
                    <input type="password" id="password" class="mb-10 bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"
                      onChange = {e => setPassword(e.target.value)} />
                </div>
                </div>

                <div class = "flex flex-col items-center" >
                  {/* <Button link={LoginPages.LOGIN}>SIGN UP</Button> */}
                  {/* Note Hindi 'to galing sa Custom Button. Ayaw kasi 'pag yung custom need ng link agad sa parameter. */}
                  <button class="h-fit px-8 py-2 font-semibold rounded-full drop-shadow-md transition-colors ease-in-out bg-secondary-200 hover:bg-accent text-primary" >SIGN UP</button>
                  <div class ="mb-20">
                    <h4 class = "mt-5 text-sm font-small text-tertiary-300">Already have an account?<a href={LoginPages.LOGIN} class="ms-2 text-sm font-small text-secondary-200 dark:text-blue-500 hover:underline">Login</a></h4>
                  </div>
                </div>     

              </form>
              
              
              

        


      </div>
      </div>
      </div>
      </div>
  </div>
    </>
  );
};

export default Signup;