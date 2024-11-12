// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxkazKPd6kvzVn1sKBKbw4GkXUL9463o8",
  authDomain: "awebsite-59a72.firebaseapp.com",
  projectId: "awebsite-59a72",
  storageBucket: "awebsite-59a72.firebasestorage.app",
  messagingSenderId: "363705811518",
  appId: "1:363705811518:web:b6d394c8dc99fb28a2c76f",
  measurementId: "G-34X9314VYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);