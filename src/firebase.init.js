// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2bZglaNknfAT7YsSTUK-OT92FCj_Jf84",
  authDomain: "car-parts-asigenment-12.firebaseapp.com",
  projectId: "car-parts-asigenment-12",
  storageBucket: "car-parts-asigenment-12.appspot.com",
  messagingSenderId: "961483679514",
  appId: "1:961483679514:web:cb2e08603375f21e9aeea3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;