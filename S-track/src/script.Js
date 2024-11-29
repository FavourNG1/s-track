// script.js

function signup() {
  // Retrieve form values (for demonstration purposes)
  const firstName = document.getElementById("first-name").value;
  const middleName = document.getElementById("middle-name").value;
  const lastName = document.getElementById("last-name").value;

  // Display the user's name in the dashboard section
  document.getElementById("user-name").textContent = `${firstName} ${middleName} ${lastName}`;

  // Hide the sign-up form and display the dashboard
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("dashboard-section").style.display = "block";
}

// Mock login function for demonstration purposes
function login() {
  const email = document.getElementById("login-email").value;
  alert(`Logged in as ${email}!`);
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("dashboard-section").style.display = "block";
}

function logout() {
  alert("Logged out!");
  document.getElementById("auth-section").style.display = "block";
  document.getElementById("dashboard-section").style.display = "none";
}
