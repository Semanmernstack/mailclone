// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import GoogleAuthProvider  from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnuaT8p1kmDB5xN7qElAFOYzuG15-pz64",
  authDomain: "mail-39655.firebaseapp.com",
  projectId: "mail-39655",
  storageBucket: "mail-39655.appspot.com",
  messagingSenderId: "112359335344",
  appId: "1:112359335344:web:da7eb042d29aa2b0f4e275"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth
export const db = getFirestore
export  const provider = new GoogleAuthProvider();