// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQtUEKpLhG5-jtgSlQcJzrVRQ4TpC0m_0",
  authDomain: "pruebatecnicaeurekadreams.firebaseapp.com",
  projectId: "pruebatecnicaeurekadreams",
  storageBucket: "pruebatecnicaeurekadreams.appspot.com",
  messagingSenderId: "884517061107",
  appId: "1:884517061107:web:e3e7302ad670ad96c4d286",
  measurementId: "G-HCD8LQLZC8",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
