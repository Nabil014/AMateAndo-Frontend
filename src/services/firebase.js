// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC91_KjBsRpENd6z2pkUg9_0v9fgjp4_kM',
  authDomain: 'a-mate-ando.firebaseapp.com',
  projectId: 'a-mate-ando',
  storageBucket: 'a-mate-ando.appspot.com',
  messagingSenderId: '1081340935381',
  appId: '1:1081340935381:web:5ac1257b9516d61fcfb65c',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
