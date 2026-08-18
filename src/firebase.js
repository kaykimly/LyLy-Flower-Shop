import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGB7bzKeTk-ccCLtZEgiuUMalREUja5FA",
  authDomain: "lyly-flower-shop.firebaseapp.com",
  projectId: "lyly-flower-shop",
  storageBucket: "lyly-flower-shop.appspot.com",
  messagingSenderId: "543678025765",
  appId: "1:543678025765:web:eb41b5206069cc9193efcc",
  measurementId: "G-NL2HPPG7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Database
export const auth = getAuth(app);
export const db = getFirestore(app);