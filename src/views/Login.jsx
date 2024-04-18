import React, {useState} from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { LoginPages, MainPages } from '../routes/paths';
import login_image from '../assets/login/login.png';
// import axios from 'axios';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle login
  function handleLogin(username, password) {
  // Make a POST request to the login endpoint
  axios.post('https://safespace-backend.vercel.app/login', { username, password })
    .then(response => {
      // Handle successful response
      console.log(response.data); // Log the response data
      // Check the response data and perform actions accordingly
      if (response.data === "Login Successful") {
        // Redirect or perform other actions for successful login
        console.log("Login Successful");
      } else {
        // Handle other login scenarios (e.g., incorrect email/password)
        console.log("Login Failed:", response.data);
      }
    })
    .catch(error => {
      // Handle errors
      console.error('Error during login:', error);
    });
}

  // function handleSubmit(event) {
  //   event.preventDefault();
  
  //   fetch('https://safespace-1act.onrender.com/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       if (data === "Login Successful") {
  //         navigate(MainPages.HOME);
  //       } else if (data === "Incorrect Email or Password") {
  //         alert("Login Failed. Incorrect Email or Password.");
  //       } else {
  //         throw new Error('Unexpected response data');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('There was a problem with the fetch operation:', error);
  //       alert("Something went wrong. Please try again later.");
  //     });
  // }
  
  
  // function handleSubmit(event){
  //   event.preventDefault();
  //   axios.post('https://safespace-backend.vercel.app/login', {username, password})
  //   .then(res => {
  //     console.log(res.data);
      
  //     // Go to Homepage if login is successful
  //     if (res.data == "Login Successful"){
  //       navigate(MainPages.HOME); 

  //     } else if (res.data == "Incorrect Email or Password"){
  //       alert("Login Failed. Incorrect Email or Password.");

  //     } else{
  //       alert("Something went wrong. Please try again later.");
  //     }
  //   })
  //   .catch(err => console.log(err));
        
  // }

  return (
    <>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div class="max-w-screen-lg m-0 sm:m-20 bg-white shadow-lg sm:rounded-lg flex justify-center flex-1 overflow-hidden">
      

        {/* <!-- LEFT SIDE */}
        <div class="w-1/2 xl:w-1/2  relative overflow-hidden bg-cover bg-no-repeat">
          <img class ="w-full h-full  transition duration-300 ease-in-out hover:scale-110" src={login_image} alt="Login Image"/>
        </div>

        {/* <!-- RIGHT SIDE */}
        <div class="w-1/2 xl:w-1/2 mt-20 flex flex-col items-center">
          <div class="w-full flex-1 mt-20">
            <div class="flex flex-col items-center">

              <h4 class="mb-5 mt-25 pb-1 text-xl text-secondary-200 font-semibold">
                LOGIN
              </h4>
              
              <form class="max-w-lg mx-auto" onSubmit={handleSubmit}>
                
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
                      onChange = {e => setUsername(e.target.value)}  />
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
                    <input type="password" id="password" class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"
                      onChange = {e => setPassword(e.target.value)}  />
                </div>
                </div>
                
                
                <div class="flex items-start mb-5">
                  <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                  </div>
                  <label for="remember" class="ms-2 text-sm font-small text-secondary-200 dark:text-gray-100">Remember Me</label>
                  
                  <Link to={LoginPages.SIGNUP} class="mb-5 ms-2 text-sm font-small text-tertiary-200 dark:text-blue-500 hover:underline">Forgot Password?</Link>

                </div>
                
                
                <div class = "flex flex-col items-center" >

                  {/* <Button type="submit" >LOGIN</Button> */}
                  
                  {/* Note Hindi 'to galing sa Custom Button. Ayaw kasi 'pag yung custom need ng link agad sa parameter. */}
                  <button class="h-fit px-8 py-2 font-semibold rounded-full drop-shadow-md transition-colors ease-in-out bg-secondary-200 hover:bg-accent text-primary" >LOGIN</button>
                  
                  <div class ="mb-20">
                    <h4 class = "mt-5 text-sm font-small text-tertiary-200">Don't have an account yet?<Link to={LoginPages.SIGNUP} class="ms-2 text-sm font-small text-tertiary-200 dark:text-blue-500 hover:underline">Sign up</Link></h4>
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

export default Login;