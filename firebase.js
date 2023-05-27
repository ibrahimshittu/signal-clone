// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDNzN-_OYUU2-dHmx01dGPsw21MbcBnoGg",
    authDomain: "signal-clone-e1cb7.firebaseapp.com",
    projectId: "signal-clone-e1cb7",
    storageBucket: "signal-clone-e1cb7.appspot.com",
    messagingSenderId: "923614303765",
    appId: "1:923614303765:web:06ddaa7fa8716c9b4ea01c",
    measurementId: "G-HQG4KG6X1F",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
