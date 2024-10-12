// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjhrFHRucNSCZ1-pbzKlT-dXSWO8ZqbX8",
  authDomain: "easybidder.firebaseapp.com",
  projectId: "easybidder",
  storageBucket: "easybidder.appspot.com",
  messagingSenderId: "9590444177",
  appId: "1:9590444177:web:5f6e9ffbb663213eb32f30",
  measurementId: "G-FMWXKXQ3SC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
