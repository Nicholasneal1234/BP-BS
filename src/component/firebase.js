import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBywQsBcq7rVT-Sa7EJdP5Di1ve6SuQCxE",
    authDomain: "blood-pressure-4c107.firebaseapp.com",
    projectId: "blood-pressure-4c107",
    storageBucket: "blood-pressure-4c107.appspot.com",
    messagingSenderId: "424030723451",
    appId: "1:424030723451:web:9bdce996d1f92a8b3d71de"
  };
  // Initialize Firebase
  const fb=firebase.initializeApp(firebaseConfig);

  export const fs = firebase.firestore();

  export const au = firebase.auth();
  
  export default fb;