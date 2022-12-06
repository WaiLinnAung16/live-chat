import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAFkMSSqurG_tWBopVFZtrhtEdUjpSnfzE",
  authDomain: "vue-blog-test-4ea9e.firebaseapp.com",
  projectId: "vue-blog-test-4ea9e",
  storageBucket: "vue-blog-test-4ea9e.appspot.com",
  messagingSenderId: "802067532817",
  appId: "1:802067532817:web:32f5fcd5ebb634eb8775b0",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();
export { db, timestamp, auth };
