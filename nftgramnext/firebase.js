// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr-Mty-IQsWELvHk_aQF7FfThIUYEHBTo",
  authDomain: "nftgram-47546.firebaseapp.com",
  projectId: "nftgram-47546",
  storageBucket: "nftgram-47546.appspot.com",
  messagingSenderId: "19491623085",
  appId: "1:19491623085:web:3cf609c705dd67630d7624",
  measurementId: "G-Z82EMMDC2K"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage, analytics };