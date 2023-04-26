// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKjOMkvmcJT-uQtItBztTQvj9N0G7OqqE",
    authDomain: "news-dragon-projects.firebaseapp.com",
    projectId: "news-dragon-projects",
    storageBucket: "news-dragon-projects.appspot.com",
    messagingSenderId: "893741764657",
    appId: "1:893741764657:web:ab0c9fab946b3024240510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;