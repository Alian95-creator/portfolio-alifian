import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔥 config dari Firebase lo
const firebaseConfig = {
  apiKey: "AIzaSyB9jREFTea6UW0Ez8lO4KJEiOCgsWr4pmM",
  authDomain: "portofolio-alifian.firebaseapp.com",
  projectId: "portofolio-alifian",
  storageBucket: "portofolio-alifian.firebasestorage.app",
  messagingSenderId: "648617400843",
  appId: "1:648617400843:web:b9314d16887eff5d8b450e",
  measurementId: "G-KL595TEYQL"
};

// 🔥 init firebase
const app = initializeApp(firebaseConfig);

// 🔥 export database
export const db = getFirestore(app);