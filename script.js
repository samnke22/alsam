script.js
// --- Select page elements ---
const welcomeMessage = document.getElementById("welcomeMessage");
const appreciationMessage = document.getElementById("appreciationMessage");
const modeToggle = document.getElementById("modeToggle");

// --- Display a welcome message with the current date ---
const today = new Date();
welcomeMessage.textContent = `Welcome! Today is ${today.toDateString()}.`;
appreciationMessage.textContent = "Thank you for visiting my portfolio!";

// --- Dark Mode Toggle Functionality ---
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeToggle.textContent = "Switch to Light Mode";
  } else {
    modeToggle.textContent = "Switch to Dark Mode";
  }
});
