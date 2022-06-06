// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore";



// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    // unique configuration when setting up firebase
  };


  const app = initializeApp(firebaseConfig);

//export default app;
//const auth = firebase.auth()
const auth = getAuth(app);
//const db = getFirestore(app);
export const db = getFirestore();
export { auth };
const database = getDatabase();
