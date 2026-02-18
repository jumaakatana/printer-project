// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCBTrWRjPEA7WPOUhW2PnnCA4xuHuT4__4",
  authDomain: "printer-project-f8962.firebaseapp.com",
  projectId: "printer-project-f8962",
  storageBucket: "printer-project-f8962.firebasestorage.app",
  messagingSenderId: "629112930810",
  appId: "1:629112930810:web:4f44dba1bc28feeeb22443",
  measurementId: "G-CKCGT4BZW2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Email and password cannot be empty!");
      return;
    }

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch((error) => alert(error.message));
  });
}

// Register
const registerBtn = document.getElementById("registerBtn");
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Email and password cannot be empty!");
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("User registered successfully!");
        window.location.href = "index.html";
      })
      .catch((error) => alert(error.message));
  });
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    auth.signOut().then(() => {
      window.location.href = "index.html";
    });
  });
}
