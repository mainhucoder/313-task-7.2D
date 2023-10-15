// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL9CdOndFe32WH4ZLXB0EUFT92GsoJuCg",
    authDomain: "authentication-21d7b.firebaseapp.com",
    projectId: "authentication-21d7b",
    storageBucket: "authentication-21d7b.appspot.com",
    messagingSenderId: "553923642373",
    appId: "1:553923642373:web:003054be1f57eee373086c",
    measurementId: "G-YYBS3TQLJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);