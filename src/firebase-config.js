import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaICBA_nlO6Vnsp8cDxyL19EnK-jkyg2s",
  authDomain: "casestudymodule5.firebaseapp.com",
  projectId: "casestudymodule5",
  storageBucket: "casestudymodule5.appspot.com",
  messagingSenderId: "721729283344",
  appId: "1:721729283344:web:202e4698e600234f16f195",
  measurementId: "G-4C9G7GLPWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)