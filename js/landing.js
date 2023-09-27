document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
  
    registerBtn.addEventListener('click', () => {
      // Redirect to the registration page
      window.location.href = 'register.html';
    });
  
    loginBtn.addEventListener('click', () => {
      // Redirect to the login page
      window.location.href = 'login.html';
    });
  });
  