import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  updateDoc,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCiiqhw5Df7idM17ibWhSguWgpzA8GQ3b8",
  authDomain: "journal-52f38.firebaseapp.com",
  projectId: "journal-52f38",
  storageBucket: "journal-52f38.appspot.com",
  messagingSenderId: "1052545627222",
  appId: "1:1052545627222:web:23897825a02b43561b77f7",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider(app);
const auth = getAuth(app);
export {
  db,
  app,
  googleAuthProvider,
  signInWithPopup,
  auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
};
