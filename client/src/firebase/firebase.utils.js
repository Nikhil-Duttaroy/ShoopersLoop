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

// export const getUserCartRef = async (userId) => {
//   const cartsRef = firestore.collection("carts").where("userId", "==", userId);
//   const snapShot = await cartsRef.get();

//   if (snapShot.empty) {
//     const cartDocRef = firestore.collection("carts").doc();
//     await cartDocRef.set({ userId, cartItems: [] });
//     return cartDocRef;
//   } else {
//     return snapShot.docs[0].ref;
//   }
// };

export const getUserCartRef = async (userId) => {
  const cartRef = firestore.collection(`users/${userId}/cart`);
  const cartSnapshot = await cartRef.get();

  if (cartSnapshot.empty) {
    const cartDocRef = firestore.collection(`users/${userId}/cart`).doc();
      
    try {
      await cartDocRef.set({
        id: Math.random(),
        cartItems: [],
      });
    } catch (error) {
      console.log("error creating cart", error.message);
    }

    return cartDocRef;
  } else {
    return cartSnapshot.docs[0].ref;
  }
};

//To add data to firestore of products
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// basic firestore and googleauth setup
firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
// export const  = () => auth.signInWithPopup(provider);
