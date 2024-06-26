// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFzRpcJreG2GMJSPOIpoYAjdj_wnG6C-M",
  authDomain: "safe-space-fe8a8.firebaseapp.com",
  projectId: "safe-space-fe8a8",
  storageBucket: "safe-space-fe8a8.appspot.com",
  messagingSenderId: "482835265679",
  appId: "1:482835265679:web:184bdc64e61e7a3abc58fa",
  measurementId: "G-WLHRN553G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();