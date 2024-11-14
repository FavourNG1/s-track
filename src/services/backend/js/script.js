function signup() {
    // Retrieve form values (for demonstration purposes)
    const firstName = document.getElementById("first-name").value;
    const middleName = document.getElementById("middle-name").value;
    const lastName = document.getElementById("last-name").value;

    // Save user data and login status to localStorage
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("isLoggedIn", true);

    // Display the user's name in the dashboard section
    document.getElementById("user-name").textContent = `${firstName} ${middleName} ${lastName}`;
  
    // Hide the sign-up form and display the dashboard
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("dashboard-section").style.display = "block";

  // Redirect to the dashboard page
  window.location.href = "dashboard.html";
}

  // Redirect to dashboard.html after logging in
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Example: Check credentials (this should ideally be handled by a backend)
  if (email && password) {
    // Save login status in localStorage
    localStorage.setItem("isLoggedIn", true);

    // Redirect to the dashboard page
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password");
  }

  function subscribe() {
    alert("Subscribed to the premium plan!");
    document.getElementById("subscription-section").style.display = "none";
  }
  
  function logout() {
    alert("Logged out!");
    document.getElementById("auth-section").style.display = "block";
    document.getElementById("dashboard-section").style.display = "none";
  }
} 