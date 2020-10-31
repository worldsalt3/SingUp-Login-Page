const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('login');
const form = document.getElementById('form');

loginButton.disabled = true;


const validateLoginEmail = () => {
  const loginEmailValue = loginEmail.value.trim();

  if (loginEmailValue == '') {
    errorMessage(loginEmail, 'Email cannot be blank');
  } else if (isEmail(loginEmailValue)) {
    errorMessage(loginEmail, 'Not a valid Email');
  } else {
    success(loginEmail);
  }
}

const validateLoginPassword = () => {
  const loginPasswordValue = loginPassword.value.trim()

  if (loginPasswordValue == '') {
    errorMessage(loginPassword, 'Password cannot be blank')
  } else if (!isValidPassword(loginPasswordValue)) {
    errorMessage(loginPassword, 'Password should be 8 characters long')
  } else {
      loginButton.disabled = false;
      success(loginPassword);
  }
}

const errorMessage = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

const success = (input) => {
  const formControl = input.parentElement
  formControl.className = 'form-control success';
}

const isEmail = (loginEmail) => {
    mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    return loginEmail.match(mailformat);

}

const isValidPassword = (password) => {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
}


let emailValidation = loginEmail.addEventListener('blur', (e) => {
  e.preventDefault();
  validateLoginEmail();
})


let passwordValidation = loginPassword.addEventListener('blur', (e) => {
  e.preventDefault();
  validateLoginPassword();
})

if (emailValidation && passwordValidation) {
  loginButton.disabled = false;
}