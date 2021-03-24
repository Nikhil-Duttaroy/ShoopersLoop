import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBw85mnvtzocAy97XSMhxNsI5Iw1b5sgWY",
  authDomain: "crwn-db-8c4b6.firebaseapp.com",
  projectId: "crwn-db-8c4b6",
  storageBucket: "crwn-db-8c4b6.appspot.com",
  messagingSenderId: "208348582707",
  appId: "1:208348582707:web:14b90f2986a3c72aa8a446",
  measurementId: "G-CNXEZQB624",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
