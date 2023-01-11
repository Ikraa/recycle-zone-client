// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlRcBvyZTdLEygIeeyGk8uknAX0KeINoY",
  authDomain: "recycle-zone-dec97.firebaseapp.com",
  projectId: "recycle-zone-dec97",
  storageBucket: "recycle-zone-dec97.appspot.com",
  messagingSenderId: "341257101066",
  appId: "1:341257101066:web:4b6740b80fff6f49b424f3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
