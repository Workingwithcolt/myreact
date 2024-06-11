// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1dS3c7PsRLlFgYJg7vJPrALVMzGQtkjM",
  authDomain: "web-app-22350.firebaseapp.com",
  projectId: "web-app-22350",
  storageBucket: "web-app-22350.appspot.com",
  messagingSenderId: "192597935107",
  appId: "1:192597935107:web:8494dbefd1df2473557a36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);