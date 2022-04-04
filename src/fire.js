import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

import "firebase/compat/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDjRuCkCBJkRMs8qCamtItJwzdBRyKGkJE",
  authDomain: "team-hackathon-js-17-auth.firebaseapp.com",
  projectId: "team-hackathon-js-17-auth",
  storageBucket: "team-hackathon-js-17-auth.appspot.com",
  messagingSenderId: "234985283483",
  appId: "1:234985283483:web:506e3d8018f29aa8ff0b3e",
  measurementId: "G-MZMMQSFL7T",
};

const fire = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();

// export { db, auth };

export default fire;
