// src/firebase.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFWirh2G0kZxCQp4zETPR8LIjATF3kIA4",
  authDomain: "project-66c0e.firebaseapp.com",
  projectId: "project-66c0e",
  storageBucket: "project-66c0e.firebasestorage.app",
  messagingSenderId: "668604044790",
  appId: "1:668604044790:web:3b1b34a30e62031c5923d7",
  measurementId: "G-8KG91KT3GZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
