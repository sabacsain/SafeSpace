import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { LoginPages, MainPages } from '../routes/paths';
import login_image from '../assets/login/login.png';
import { auth, provider } from '../config/firebase';
import { signInWithEmailAndPassword , signInWithPopup} from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate(MainPages.HOME);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(data => {
        // Handle successful user login
        console.log("User logged in successfully:", data);
        navigate(MainPages.HOME);
      })
      .catch(error => {
        // Handle login errors
        switch (error.code) {
          case 'auth/user-not-found':
            console.error("User not found:", error.message);
            alert("User not found:", error.message);
            break;
          case 'auth/wrong-password':
            console.error("Incorrect password:", error.message);
            alert("Incorrect password:", error.message);
            break;
          case 'auth/too-many-requests':
            console.error("Too many login attempts. Please try again later.");
            alert("Too many login attempts. Please try again later.");
            break;
          default:
            console.error("Error logging in. Please try again", error);
            alert("Error logging in:", error);
            break;
        }
      });
    
    
  }
  

  // function handleSubmit(event){
  //   event.preventDefault();
  //   axios.post('http://localhost:8081/login', {username, password})
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
  // }

  return (
    <>
  <div class="min-h-screen bg-tertiary-200 flex justify-center">
    <div class="max-w-screen-lg m-0 sm:m-20 bg-primary shadow-lg sm:rounded-lg flex justify-center flex-1 overflow-hidden">
      

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
                
              {/* EMAIL */}
                <div class="mb-5">
                  <label for="email" class="block mb-2 text-sm font-medium text-secondary-200 dark:text-white">Email</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg class="w-6 h-6 text-secondary-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <input type="text" id="email" class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"
                      onChange = {e => setEmail(e.target.value)}  />
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
                        
 
                <div class = "flex flex-col items-center" >
                  {/* <Button type="submit" >LOGIN</Button> */}
                  {/* Note Hindi 'to galing sa Custom Button. Ayaw kasi 'pag yung custom need ng link agad sa parameter. */}
                  <button class=" h-fit px-8 py-2 font-semibold rounded-full drop-shadow-md transition-colors ease-in-out bg-secondary-200 hover:bg-accent text-primary" >LOGIN</button>
                  
                  <div class ="mb-5">
                    <h4 class = "mt-5 text-sm font-small text-tertiary-300">Don't have an account yet?<Link to={LoginPages.SIGNUP} class="ms-2 text-sm font-small text-secondary-200 dark:text-blue-500 hover:underline">Sign up</Link></h4>
                  </div>
                </div>

              </form>


              <div class="flex mt-5 items-center w-1/2 ">
                <hr class="border-secondary-200 border-1  w-full rounded-md"></hr>
                <label class="block font-medium text-sm text-secondary-200 w-full">
                  or Login with
                </label>
                <hr class="border-secondary-200 border-1 w-full rounded-md"></hr>
              </div>

        
                {/* SIGN UP with GOOGLE */}
                <div class="mt-5 mb-20 flex items-center justify-center dark:bg-gray-800">
                  <button onClick={signInWithGoogle} type="button" class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                      <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                      <span>Continue with Google</span>
                  </button>
                </div>

              

        


      </div>
      
      </div>
      
      </div>
      
      </div>
      
  </div>
    </>

  );
};

export default Login;