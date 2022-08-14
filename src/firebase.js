// import firebase from "firebase/app"
// import "firebase/auth"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const app = firebase.initializeApp({
  apiKey: "AIzaSyDNFGnr1_wpNvBdLMvdcRwDtZGJR5gbWT8",
  authDomain: "react-firebase-auth-7b53a.firebaseapp.com",
  projectId: "react-firebase-auth-7b53a",
  storageBucket: "react-firebase-auth-7b53a.appspot.com",
  messagingSenderId: "1030172852359",
  appId: "1:1030172852359:web:929c775272e952b0983822"
})

export const auth = app.auth()
export default app