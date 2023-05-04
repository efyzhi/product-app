// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw5pCQq-ePXzrqILSWQDAECNTaM3wskeE",
  authDomain: "linkedin-clone-28996.firebaseapp.com",
  projectId: "linkedin-clone-28996",
  storageBucket: "linkedin-clone-28996.appspot.com",
  messagingSenderId: "398066370288",
  appId: "1:398066370288:web:cd5abf1bd2d3d6ad7ce435",
  measurementId: "G-LCDTM9G5F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app)
export { auth, app, firestore };