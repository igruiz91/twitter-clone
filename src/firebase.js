import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh-RfIdCuDcAVlr-nFzY6k8lzjZl1EuzQ",
  authDomain: "twitter-clone-7b927.firebaseapp.com",
  databaseURL: "https://twitter-clone-7b927.firebaseio.com",
  projectId: "twitter-clone-7b927",
  storageBucket: "twitter-clone-7b927.appspot.com",
  messagingSenderId: "1017838458289",
  appId: "1:1017838458289:web:b7c160d794e7fda3f0d990",
  measurementId: "G-PWJW280T7R",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db