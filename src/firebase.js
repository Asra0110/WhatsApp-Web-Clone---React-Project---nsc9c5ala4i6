

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_7JCt2GW2yHR6fKcOeVHxXwBv8S-Hk6E",
  authDomain: "asra-whatsapp.firebaseapp.com",
  projectId: "asra-whatsapp",
  storageBucket: "asra-whatsapp.appspot.com",
  messagingSenderId: "56368617183",
  appId: "1:56368617183:web:3673369b4cd5cd77e57b6a",
  measurementId: "G-NQ55G4F4RB"
};

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const db = app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { auth, googleProvider}

  export default db;
