import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "#",
    authDomain: "drive-clone-e3a24.firebaseapp.com",
    projectId: "drive-clone-e3a24",
    storageBucket: "drive-clone-e3a24.firebasestorage.app",
    messagingSenderId: "#",
    appId: "#",
    measurementId: "#"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
//const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db}
