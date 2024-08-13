// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
<<<<<<< HEAD
  authDomain: "realestate-99178.firebaseapp.com",
  projectId: "realestate-99178",
  storageBucket: "realestate-99178.appspot.com",
  messagingSenderId: "139927570586",
  appId: "1:139927570586:web:1685de277c56fc44567723"
};

=======
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGEING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};



>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
