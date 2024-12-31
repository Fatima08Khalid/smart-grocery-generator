// Login Function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = localStorage.getItem(username);

  if (storedUser) {
    const userData = JSON.parse(storedUser);
    if (userData.password === password) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid password. Please try again.");
    }
  } else {
    alert("User not found. Please sign up first.");
  }
}

// Signup Function
function signup() {
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (!username || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match.");
  } else {
    // Store user credentials in localStorage
    const userData = { email, password };
    localStorage.setItem(username, JSON.stringify(userData));
    alert("Account created successfully! Please login.");
    window.location.href = "login.html";
  }
}
