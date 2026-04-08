// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔥 CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyB9jREFTea6UW0Ez8lO4KJEiOCgsWr4pmM",
  authDomain: "portofolio-alifian.firebaseapp.com",
  projectId: "portofolio-alifian",
  storageBucket: "portofolio-alifian.appspot.com",
  messagingSenderId: "648617400843",
  appId: "1:648617400843:web:b9314d16887eff5d8b450e",
  measurementId: "G-KL595TEYQL",
};

// 🔥 INITIALIZE APP
const app = initializeApp(firebaseConfig);

// 🔥 FIRESTORE
export const db = getFirestore(app);

// 🔥 AUTH
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();