import firebase from 'firebase'

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

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;