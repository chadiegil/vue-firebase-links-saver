import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCi3uDDPOWJbl5frMH4i0ucqSRzKMe71is",
  authDomain: "links-saver-59c51.firebaseapp.com",
  projectId: "links-saver-59c51",
  storageBucket: "links-saver-59c51.appspot.com",
  messagingSenderId: "119083120175",
  appId: "1:119083120175:web:0da0c5c4439bb7fdddb8da",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db, app };
