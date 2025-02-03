import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFQy9IqZsbAC21zrnxqu38ucxDkrmRb_4",
    authDomain: "drive-clone-e3a24.firebaseapp.com",
    projectId: "drive-clone-e3a24",
    storageBucket: "drive-clone-e3a24.firebasestorage.app",
    messagingSenderId: "611476625829",
    appId: "1:611476625829:web:624eabddb49eb88e48f04c",
    measurementId: "G-17LZ68D8HZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
//const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db}
