import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDtPHhUnIO0gkIsFU9pLIw4hefLxG_B0kw",
  authDomain: "hica-togo.firebaseapp.com",
  projectId: "hica-togo",
  storageBucket: "hica-togo.appspot.com",
  messagingSenderId: "225456150361",
  appId: "1:225456150361:web:f50eeddfdbbdae536a1e48",
  measurementId: "G-4CYXMRWPHT"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;