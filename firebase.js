import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBTrWRjPEA7WPOUhW2PnnCA4xuHuT4__4",
  authDomain: "printer-project-f8962.firebaseapp.com",
  projectId: "printer-project-f8962",
  storageBucket: "printer-project-f8962.firebasestorage.app",
  messagingSenderId: "629112930810",
  appId: "1:629112930810:web:4f44dba1bc28feeeb22443",
  measurementId: "G-CKCGT4BZW2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

