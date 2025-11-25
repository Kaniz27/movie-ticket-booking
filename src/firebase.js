 

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Firebase Console থেকে এই config বসাও
const firebaseConfig = {
  apiKey: "AIzaSyDFWirh2G0kZxCQp4zETPR8LIjATF3kIA4",
  authDomain: "project-66c0e.firebaseapp.com",
  projectId: "project-66c0e",
  storageBucket: "project-66c0e.firebasestorage.app",
  messagingSenderId: "668604044790",
  appId: "1:668604044790:web:3b1b34a30e62031c5923d7",
  measurementId: "G-8KG91KT3GZ"
};

// Firebase অ্যাপ ইনিশিয়ালাইজেশন
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
