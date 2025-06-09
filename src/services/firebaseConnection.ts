import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzvJGm5dnQ3icrHBCIXezYJVMNDc8b_90",
  authDomain: "react-links-1f5e1.firebaseapp.com",
  projectId: "react-links-1f5e1",
  storageBucket: "react-links-1f5e1.firebasestorage.app",
  messagingSenderId: "507477883609",
  appId: "1:507477883609:web:450a03893f84e0dc505cc8",
  measurementId: "G-GHKL1LPDLL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
