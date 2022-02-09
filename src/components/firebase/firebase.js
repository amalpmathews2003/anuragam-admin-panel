import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCLz5VcZgvaMJjkt__19uV3hLJjfnk_eFI",
  authDomain: "anuragam-web.firebaseapp.com",
  projectId: "anuragam-web",
  storageBucket: "anuragam-web.appspot.com",
  messagingSenderId: "322105086204",
  appId: "1:322105086204:web:9484d922d2abd6a72e0779",
  measurementId: "G-TBJZRRDQBN"
};  

const app=initializeApp(firebaseConfig);
const db=getFirestore(app);

export {app,db}