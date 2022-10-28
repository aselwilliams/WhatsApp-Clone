import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// import firebase from 'firebase/compat/app';
// import { GoogleAuthProvider } from "firebase/auth";
// import 'firebase/compat/firestore'
// import 'firebase/compat/auth'
// import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBb45OwZQxHU_jqNxzRCFZr1S7qc5UO6Fw",
  authDomain: "whatsapp-clone-32836.firebaseapp.com",
  projectId: "whatsapp-clone-32836",
  storageBucket: "whatsapp-clone-32836.appspot.com",
  messagingSenderId: "404923212221",
  appId: "1:404923212221:web:cd798e8dc7f73fcd0872d4",
  measurementId: "G-4N6089EED0"
};
// const firebaseConfig = {
//     apiKey: "AIzaSyDiWb5myoWKKQuvPy-bswywow_5FuJa-mo",
//     authDomain: "whats-app-clone-1e34d.firebaseapp.com",
//     projectId: "whats-app-clone-1e34d",
//     storageBucket: "whats-app-clone-1e34d.appspot.com",
//     messagingSenderId: "210609213835",
//     appId: "1:210609213835:web:5d1f4b12ed3770654b5f8e",
//     measurementId: "G-GJPDZ8N2SP"
//   };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

  // const firebaseApp = !firebase.apps.length
  // ? firebase.initializeApp(firebaseConfig)
  // : firebase.app();
  // const db = getFirestore();
  // const auth = firebase.auth;
  // const provider = new GoogleAuthProvider();
 
  // export { auth, provider};
  // export default db;