// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLP0G-14yE7gGg7ofOrDc8ES8xnvxVzz0",
  authDomain: "hotelbooking-1fc99.firebaseapp.com",
  projectId: "hotelbooking-1fc99",
  
  storageBucket: "hotelbooking-1fc99.appspot.com",
  messagingSenderId: "117899503580",
  appId: "1:117899503580:web:5195487a0347773bde9119",
  measurementId: "G-PSXT9JPC88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {auth};