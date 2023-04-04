import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjx88vag51-zLfNrjD9PWgPhIdDGnpwbo",
  authDomain: "greg-solutions.firebaseapp.com",
  projectId: "greg-solutions",
  storageBucket: "greg-solutions.appspot.com",
  messagingSenderId: "420301922941",
  appId: "1:420301922941:web:27da05f15b783dc8df4714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
