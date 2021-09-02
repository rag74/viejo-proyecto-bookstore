// Firebase App (the core Firebase SDK) is always required and must be listed first

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {  collection, 
          getDocs,
          addDoc,
          query,
          where } from "firebase/firestore"
import { useEffect } from "react";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeKLH_CuK7fLAgJA7gsJExIZBF_A46y6U",
  authDomain: "bookstore-guarch-coderhouse.firebaseapp.com",
  projectId: "bookstore-guarch-coderhouse",
  storageBucket: "bookstore-guarch-coderhouse.appspot.com",
  messagingSenderId: "278611016230",
  appId: "1:278611016230:web:a9f332e9757f105503c4e7"
};


// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

/*
useEffect(() => {
  async function fetchdata() {
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  fetchdata()
}, [])*/



export default db

