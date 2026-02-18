import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("loginBtn").addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then(() => {
    window.location.href = "dashboard.html";
  })
  .catch(error => alert(error.message));
});

document.getElementById("registerBtn").addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then(() => alert("Account created! Now login."))
  .catch(error => alert(error.message));
});
