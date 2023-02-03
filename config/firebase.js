import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from '@firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDx7A-X7eUzXFqxqE8vjTez8xZV4aslQ7Q",
    authDomain: "denyigba-news.firebaseapp.com",
    projectId: "denyigba-news",
    storageBucket: "denyigba-news.appspot.com",
    messagingSenderId: "670328347792",
    appId: "1:670328347792:web:f34bfe7703d39ac9368c15",
    measurementId: "G-XP140B167Z"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider()

export { auth, db, provider }
