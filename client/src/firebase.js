// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "log-in-808cd.firebaseapp.com",
  projectId: "log-in-808cd",
  storageBucket: "log-in-808cd.appspot.com",
  messagingSenderId: "575179986123",
  appId: "1:575179986123:web:4e30c5b165cfce59ebf74e"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);