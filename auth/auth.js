// Check if the user is logged in
function isLoggedIn() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  }
  
  // Set the authentication flag to indicate the user is logged in
  function setLoggedIn() {
    localStorage.setItem('isLoggedIn', 'true');
  }
  
  // Log the user out by clearing the authentication flag
  function logout() {
    localStorage.removeItem('isLoggedIn');
  }
  