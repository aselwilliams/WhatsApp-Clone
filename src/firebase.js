import firebase from 'firebase/compat/app';
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiWb5myoWKKQuvPy-bswywow_5FuJa-mo",
    authDomain: "whats-app-clone-1e34d.firebaseapp.com",
    projectId: "whats-app-clone-1e34d",
    storageBucket: "whats-app-clone-1e34d.appspot.com",
    messagingSenderId: "210609213835",
    appId: "1:210609213835:web:5d1f4b12ed3770654b5f8e",
    measurementId: "G-GJPDZ8N2SP"
  };

  const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  const db = getFirestore();
  const auth = firebase.auth;
  const provider = new GoogleAuthProvider();
 
  export { auth, provider};
  export default db;