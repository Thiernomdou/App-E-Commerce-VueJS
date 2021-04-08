import firebase from 'firebase/app';

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");


var firebaseConfig = {
    apiKey: "AIzaSyBjfC93s-R2Cx8iR8sod9jxnRDIqU7Q9yk",
    authDomain: "app-e-commerce-2bc29.firebaseapp.com",
    databaseURL:"http://app-e-commerce-2bc29.firebaseio.com",
    projectId: "app-e-commerce-2bc29",
    storageBucket: "app-e-commerce-2bc29.appspot.com",
    messagingSenderId: "175188276995",
    appId: "1:175188276995:web:40a13136de939823cc5b36",
    measurementId: "G-6XQXCY0Z1M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()
  const functions = firebase.functions()

  export {
      firebase,
      auth,
      db,
      storage,
      functions
  }