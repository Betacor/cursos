// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUB_ecMpCYZyNNhqcrzPgraE8fJrC_tE",
  authDomain: "testingusuarios-dfd95.firebaseapp.com",
  projectId: "testingusuarios-dfd95",
  storageBucket: "testingusuarios-dfd95.appspot.com",
  messagingSenderId: "1076764401899",
  appId: "1:1076764401899:web:fdcc2c26cf68fa68205eae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    auth,
    db
};

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUB_ecMpCYZyNNhqcrzPgraE8fJrC_tE",
  authDomain: "testingusuarios-dfd95.firebaseapp.com",
  projectId: "testingusuarios-dfd95",
  storageBucket: "testingusuarios-dfd95.appspot.com",
  messagingSenderId: "1076764401899",
  appId: "1:1076764401899:web:fdcc2c26cf68fa68205eae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/
//export default auth;