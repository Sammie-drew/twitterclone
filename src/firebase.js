import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsatNuXq8EhoXjSNrm4blZO6CAojz62wM",
  authDomain: "yarn-b9e31.firebaseapp.com",
  databaseURL: "https://yarn-b9e31.firebaseio.com",
  projectId: "yarn-b9e31",
  storageBucket: "yarn-b9e31.appspot.com",
  messagingSenderId: "951298997756",
  appId: "1:951298997756:web:08c1d20799b6156948c679",
  measurementId: "G-LKBZ1N5YHV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
