// Get the login form element
const loginForm = document.getElementById('login-form');

// Add an event listener for form submission
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user input (e.g., username and password)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Retrieve the user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  // Check if the user exists and the password matches
  if (storedUser && username === storedUser.username && password === storedUser.password) {
    // Set the authentication flag to indicate the user is logged in
    localStorage.setItem('isLoggedIn', 'true');

    // Redirect to the authenticated user's dashboard or another page
    window.location.href = 'dashboard.html';
  } else {
    // Display an error message for invalid credentials
    alert('Invalid username or password. Please try again.');
  }
});
