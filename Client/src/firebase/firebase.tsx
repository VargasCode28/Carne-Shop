// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZvy0vwS3WM0Jk5O6KNlURZ4nDbq3Z22w",
  authDomain: "carne-shop.firebaseapp.com",
  projectId: "carne-shop",
  storageBucket: "carne-shop.firebasestorage.app",
  messagingSenderId: "287096218956",
  appId: "1:287096218956:web:61f05f2e9e86af33055be9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);