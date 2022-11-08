// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5yjqzDE_IzN6qHga9bTPgGijiTXYSEgE",
  authDomain: "bamx-80f32.firebaseapp.com",
  projectId: "bamx-80f32",
  storageBucket: "bamx-80f32.appspot.com",
  messagingSenderId: "566701843594",
  appId: "1:566701843594:web:b14b91742c5f4534fe7973",
  measurementId: "G-9YTPG8L5XN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
