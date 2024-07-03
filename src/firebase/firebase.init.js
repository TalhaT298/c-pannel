// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHvmaStY_untnZ3LmulP3fnTcgT3shedA",
  authDomain: "oceancapp-905a0.firebaseapp.com",
  projectId: "oceancapp-905a0",
  storageBucket: "oceancapp-905a0.appspot.com",
  messagingSenderId: "579866048146",
  appId: "1:579866048146:web:6c3e46a81be54549ded84b"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export default app;