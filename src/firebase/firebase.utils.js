import firebase from "firebase/app";
import "firebase/firestore"; //importing firestore db
import "firebase/auth"; //importing authentication

const config = {
  apiKey: "AIzaSyBw85mnvtzocAy97XSMhxNsI5Iw1b5sgWY",
  authDomain: "crwn-db-8c4b6.firebaseapp.com",
  projectId: "crwn-db-8c4b6",
  storageBucket: "crwn-db-8c4b6.appspot.com",
  messagingSenderId: "208348582707",
  appId: "1:208348582707:web:14b90f2986a3c72aa8a446",
  measurementId: "G-CNXEZQB624",
};

//getting uid in firestoredb from google auth
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //if user not signed in then exit

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  //exists shows if the snapshot of the user that signed in already exists in the db or not.

  if (!snapShot.exists) {
    //if user already in db skip else run
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error Creating User", error.message);
    }
  }
  return userRef;
};

//To add data to firestore of products
export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();  
    batch.set(newDocRef, obj)
});
  return await batch.commit()

};

// basic firestore and googleauth setup
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
