// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5df4c.firebaseapp.com",
  projectId: "mern-estate-5df4c",
  storageBucket: "mern-estate-5df4c.firebasestorage.app",
  messagingSenderId: "149190881106",
  appId: "1:149190881106:web:199f1576df124edaa6d48b",
  measurementId: "G-7GW1367NQN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
