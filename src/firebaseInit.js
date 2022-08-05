// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBi7NqPRK0JZWTuobpin5vb1ILbvj3nZ0s',
  authDomain: 'mieszkanie-app.firebaseapp.com',
  projectId: 'mieszkanie-app',
  storageBucket: 'mieszkanie-app.appspot.com',
  messagingSenderId: '1029696847310',
  appId: '1:1029696847310:web:0aeba320fed8ad36097f9f',
  measurementId: 'G-B49QEC97RE',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
connectFirestoreEmulator(db, 'localhost', 8081)
const storage = getStorage(app)
connectStorageEmulator(storage, 'localhost', 9199)
const analytics = getAnalytics(app)
const functions = getFunctions(app)
connectFunctionsEmulator(functions, 'localhost', 8082)

export { analytics, db, storage }
export default app
