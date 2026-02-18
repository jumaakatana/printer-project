import { auth, db } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, addDoc, getDocs }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const fileName = document.getElementById("fileName");
const pages = document.getElementById("pages");
const jobList = document.getElementById("jobList");

document.getElementById("submitJob").addEventListener("click", async () => {
  await addDoc(collection(db, "printJobs"), {
    fileName: fileName.value,
    pages: Number(pages.value),
    status: "Pending"
  });

  alert("Print Job Submitted!");
  loadJobs();
});

async function loadJobs() {
  jobList.innerHTML = "";
  const snapshot = await getDocs(collection(db, "printJobs"));

  snapshot.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = doc.data().fileName + " - " + doc.data().status;
    jobList.appendChild(li);
  });
}

loadJobs();

document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
});
