import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', () => {
  // Check if the user is authenticated
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    // If not authenticated, redirect to the login page
    window.location.href = 'login.html';
    return; // Stop execution to prevent rendering the todo page
  }

  const model = new Model();
  const view = new View();
  model.setView(view);
  view.setModel(model);

  view.render();
});
