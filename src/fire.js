import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

import "firebase/compat/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAR-RmrvAeYZUZhkxF-5amMr_-fcRYLrpA",
  authDomain: "js-hack-17.firebaseapp.com",
  projectId: "js-hack-17",
  storageBucket: "js-hack-17.appspot.com",
  messagingSenderId: "873410125428",
  appId: "1:873410125428:web:69ba1c25579f21558c7b21",
  measurementId: "G-B7NHWSZQG0",
};

export default fire.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();

// export { db, auth };
