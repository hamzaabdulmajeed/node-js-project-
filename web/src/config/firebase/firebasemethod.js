// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf7LKWC1ZSDjEmMtPBVp6gi0z6PVoJx4Y",
  authDomain: "exp-1-1bfa1.firebaseapp.com",
  projectId: "exp-1-1bfa1",
  storageBucket: "exp-1-1bfa1.appspot.com",
  messagingSenderId: "559834894928",
  appId: "1:559834894928:web:a17f11fb1321711ddaf755",
  measurementId: "G-9H842ND7RD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    //   alert("Success");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    //   alert(errorMessage);
    });
}

export { register, login };
