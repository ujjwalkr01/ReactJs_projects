// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP1go_LCtwUTEVyPnruc7p04yTFmZZaWk",
  authDomain: "reddit-clone-47bf3.firebaseapp.com",
  projectId: "reddit-clone-47bf3",
  storageBucket: "reddit-clone-47bf3.appspot.com",
  messagingSenderId: "123354272686",
  appId: "1:123354272686:web:5d596a09f1625a3b6c2e3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
