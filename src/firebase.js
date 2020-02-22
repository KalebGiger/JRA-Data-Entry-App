import firebase from 'firebase'

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const fs = firebaseApp.firestore();

  export const db = firebaseApp.database();