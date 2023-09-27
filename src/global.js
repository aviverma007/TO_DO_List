// Dark Mode
const buttonTheme = document.querySelector('#dark-mode-button');
const colors = document.querySelector(':root');

buttonTheme.onclick = function () {
  colors.classList.toggle('dark');
  buttonTheme.firstElementChild.classList.toggle('fa-sun');
  buttonTheme.firstElementChild.classList.toggle('fa-moon');
};

// Show Password Button
const seePass = document.querySelector("input[type='checkbox']");
const inputPassword = document.querySelector('input#password');

seePass.onclick = function () {
  seePass.checked
    ? inputPassword.setAttribute('type', 'text')
    : inputPassword.setAttribute('type', 'password');
};

// Prevent Form Submission
const form = document.querySelector('form');

form.onsubmit = function (submit) {
  submit.preventDefault();
};

// Validation

const inputEmail = document.querySelector('input#email');
const error = document.querySelector('.error');

inputEmail.onfocus = function () {
  error.classList.remove('show');
};

inputPassword.onfocus = function () {
  error.classList.remove('show');
};

inputEmail.addEventListener('invalid', function (event) {
  event.preventDefault();

  !event.target.validity.valueMissing
    ? null
    : (error.innerText = 'Fill in the Fields'),
    error.classList.add('show');

  event.target.validity.valid
    ? null
    : (error.innerText = 'Enter a valid email'),
    error.classList.add('show');
});

inputPassword.addEventListener('invalid', function (event) {
  event.preventDefault();

  !event.target.validity.tooShort
    ? null
    : (error.innerText = 'The password must have at least 6 Characters'),
    error.classList.add('show');

  !event.target.validity.valueMissing
    ? null
    : (error.innerText = 'Fill in the Fields'),
    error.classList.add('show');
});
