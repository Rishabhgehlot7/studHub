// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth'; // If using Authentication
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC10XrzxgUH5zcjRDN_ThPsAAWVAUPebtA",
  authDomain: "studbud-c94f4.firebaseapp.com",
  projectId: "studbud-c94f4",
  storageBucket: "studbud-c94f4.appspot.com",
  messagingSenderId: "1061162543525",
  appId: "1:1061162543525:web:6c27f2660fd965bcb2204c",
  measurementId: "G-0TPPLX9K12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);