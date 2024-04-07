import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS5-Puowy94O1SZ8wk8ungKAFxyHKTit4",
  authDomain: "groupchat-cb66c.firebaseapp.com",
  projectId: "groupchat-cb66c",
  storageBucket: "groupchat-cb66c.appspot.com",
  messagingSenderId: "204425798107",
  appId: "1:204425798107:web:cb30e0ecfc94eed98ec7fe",
  measurementId: "G-T9PNECNXYP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
