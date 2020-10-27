import firebase from 'firebase'
const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyDcGCK7HqFxhLfDJcCjrsJdwfSdz2In6O8",
  authDomain: "whatsapp-clone-3b236.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-3b236.firebaseio.com",
  projectId: "whatsapp-clone-3b236",
  storageBucket: "whatsapp-clone-3b236.appspot.com",
  messagingSenderId: "30598714860",
  appId: "1:30598714860:web:a895a40b4cbada154a5cc9",
  measurementId: "G-5Z922SHY6Z"
});
  
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
    
export {auth, provider};
export default db;