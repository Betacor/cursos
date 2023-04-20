// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-5S49oSka671saSg558NmYBwAl2Cdrzs",
  authDomain: "appejemplo-e90b9.firebaseapp.com",
  projectId: "appejemplo-e90b9",
  storageBucket: "appejemplo-e90b9.appspot.com",
  messagingSenderId: "447667609204",
  appId: "1:447667609204:web:dcd9f747afbe90ba8cbb21"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {
    auth
};