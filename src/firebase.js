// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMtIxAxb-r4XxNaLLA0dlEKKNt6HWzSic",
  authDomain: "chat-f6674.firebaseapp.com",
  projectId: "chat-f6674",
  storageBucket: "chat-f6674.appspot.com",
  messagingSenderId: "979108543944",
  appId: "1:979108543944:web:991e435bf71c326e92d4fd",
  measurementId: "G-13LJDRM6PQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
