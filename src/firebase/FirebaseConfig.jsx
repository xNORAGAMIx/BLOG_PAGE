// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBADwR3WhniUIRkdH7JWGWDQyL8RNTlWw",
  authDomain: "myblogpage-7ede8.firebaseapp.com",
  projectId: "myblogpage-7ede8",
  storageBucket: "myblogpage-7ede8.appspot.com",
  messagingSenderId: "866375075620",
  appId: "1:866375075620:web:c737ce9211d97baca815b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };