// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore";



// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyABs5ghfbEOzqXBx0qjqS1vRL9-dmDpSRs",
    authDomain: "fir-auth-1ce56.firebaseapp.com",
    projectId: "fir-auth-1ce56",
    storageBucket: "fir-auth-1ce56.appspot.com",
    messagingSenderId: "538165954086",
    appId: "1:538165954086:web:b4da8efac2d632cfb308e7"
  };


  const app = initializeApp(firebaseConfig);

//export default app;
//const auth = firebase.auth()
const auth = getAuth(app);
//const db = getFirestore(app);
export const db = getFirestore();
export { auth };
const database = getDatabase();
