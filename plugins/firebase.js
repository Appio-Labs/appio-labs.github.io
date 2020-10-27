import Vue from 'vue'
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyCR5CwdgEmhgSU7kV6lcQnvjqTziI2s35s",
  authDomain: "appio-labs.firebaseapp.com",
  databaseURL: "https://appio-labs.firebaseio.com",
  projectId: "appio-labs",
  storageBucket: "appio-labs.appspot.com",
  messagingSenderId: "314386062516",
  appId: "1:314386062516:web:c31c7417a3872591874be1",
  measurementId: "G-GKV76DETS0"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// alias
Vue.prototype.$analytics = firebase.analytics();
