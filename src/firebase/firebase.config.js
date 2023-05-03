// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiWL3pjap2bmZ5dAzo3aW8ctfdKwipyKc",
  authDomain: "worldwide-famous-chefs-receipe.firebaseapp.com",
  projectId: "worldwide-famous-chefs-receipe",
  storageBucket: "worldwide-famous-chefs-receipe.appspot.com",
  messagingSenderId: "432209486439",
  appId: "1:432209486439:web:4e9c3d614686cd4e0deac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;