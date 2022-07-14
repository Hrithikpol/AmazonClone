// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHMRj2P-_aCd4X5kML6xwelA5-e0cPtyA",
  authDomain: "clone-d9eb9.firebaseapp.com",
  projectId: "clone-d9eb9",
  storageBucket: "clone-d9eb9.appspot.com",
  messagingSenderId: "1067576092681",
  appId: "1:1067576092681:web:dc5f77a5ece9f9a51230d8",
  measurementId: "G-MQQ6SF9VFK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
