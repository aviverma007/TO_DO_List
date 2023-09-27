// Navigate to the login page
function navigateToLogin() {
    window.location.href = 'login.html';
}
  
  // Navigate to the registration page
function navigateToRegister() {
    window.location.href = 'register.html';
}
  
  // Navigate to the todo page
function navigateToTodo() {
    window.location.href = 'todo.html';
}
  
  // Check if the user is authenticated
function isAuthenticated() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
}
  