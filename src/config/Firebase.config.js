// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcVh_4sBbYJ9bU_Ul-5ndI0p1uBPH4NbI",
  authDomain: "online-group-study-client.firebaseapp.com",
  projectId: "online-group-study-client",
  storageBucket: "online-group-study-client.appspot.com",
  messagingSenderId: "160650538346",
  appId: "1:160650538346:web:8b62ced52509daae59c913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);