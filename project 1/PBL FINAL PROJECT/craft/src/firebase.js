// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYhJZHZ-Zc1i6LUWBNddniACQmpKcpIrs",
  authDomain: "pblr-f14bc.firebaseapp.com",
  projectId: "pblr-f14bc",
  storageBucket: "pblr-f14bc.appspot.com",
  messagingSenderId: "739536128246",
  appId: "1:739536128246:web:b88a5ca8124a670aec04d7",
  measurementId: "G-8XSDSHS7PE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };