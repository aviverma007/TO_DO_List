// Get the registration form element
const registrationForm = document.getElementById('registration-form');

// Add an event listener for form submission
registrationForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user input (e.g., username and password)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Create a new user object (you can customize this structure)
  const user = {
    username: username,
    password: password,
  };

  // Store the user data in localStorage (you can use a unique key)
  localStorage.setItem('user', JSON.stringify(user));

  // Redirect or display a success message
  window.location.href = 'login.html'; // Redirect to the login page
});
