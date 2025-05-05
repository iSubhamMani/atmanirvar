// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7EW6HIm74UnOTeVm1B1wu_sTT-s_sQ8A",
  authDomain: "atmanirvar-86fe6.firebaseapp.com",
  projectId: "atmanirvar-86fe6",
  storageBucket: "atmanirvar-86fe6.firebasestorage.app",
  messagingSenderId: "988929243909",
  appId: "1:988929243909:web:edbe1a88681c6542e5556c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
