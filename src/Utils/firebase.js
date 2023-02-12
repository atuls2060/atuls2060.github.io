// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzCGCqTMdz5Zld2wn1-ipEXqRPSJhrb8M",
  authDomain: "myportfolio-f0ede.firebaseapp.com",
  projectId: "myportfolio-f0ede",
  storageBucket: "myportfolio-f0ede.appspot.com",
  messagingSenderId: "58463762172",
  appId: "1:58463762172:web:689edc940b877d20c98979",
  measurementId: "G-27ET090M1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);