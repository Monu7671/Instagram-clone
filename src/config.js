import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6nM6sj5S8X4L5PR3CA0SmlSLONlzpC4U",
  authDomain: "instagram-clone-99471.firebaseapp.com",
  projectId: "instagram-clone-99471",
  storageBucket: "instagram-clone-99471.appspot.com",
  messagingSenderId: "539489920531",
  appId: "1:539489920531:web:f95c2d17e0d63d3a6401e6",
  measurementId: "G-3SPTZ8KT1Z"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };