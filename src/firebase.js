import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
  // sendPasswordResetEmail,
  // signOut,
} from "firebase/auth";
import {
  getFirestore,
  // query,
  // getDocs,
  // collection,
  // where,
  // addDoc,
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoEBsDBn-HeEE0Gq4flUsvRLc9h0VIXFU",
  authDomain: "linkedin-clone-7cc63.firebaseapp.com",
  projectId: "linkedin-clone-7cc63",
  storageBucket: "linkedin-clone-7cc63.appspot.com",
  messagingSenderId: "280445926092",
  appId: "1:280445926092:web:6e563995b9e9c2e28fa069",
  measurementId: "G-DC6LT66BDG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage, signInWithPopup };
export default db;
