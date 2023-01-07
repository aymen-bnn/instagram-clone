// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFso9y8KfGiJwWix_OhNZ6odZeBZzFdKA",
  authDomain: "instagram-2-00.firebaseapp.com",
  projectId: "instagram-2-00",
  storageBucket: "instagram-2-00.appspot.com",
  messagingSenderId: "959587312379",
  appId: "1:959587312379:web:68701e29133bb8a527865e",
  measurementId: "G-KXM461BMJX"
};

// Initialize Firebase
const app = !!getApps().length ? initializeApp(firebaseConfig):getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export {app , db , storage};