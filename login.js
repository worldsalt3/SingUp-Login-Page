const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('login');

loginButton.disabled = true;

const validateLoginEmail = () => {
  const loginEmailValue = loginEmail.value.trim();

  if (loginEmailValue == '') {
    errorMessage(loginEmail, 'Email cannot be blank')
  } else if (!isEmail) {
    errorMessage(loginEmail, 'Not a valid Email')
  } else {
    success(loginEmail)
  }
}

const validateLoginPassword = () => {
  const loginPasswordValue = loginPassword.value.trim()

  if (loginPasswordValue == '') {
    errorMessage(loginPassword, 'Password cannot be blank')
  } else if (!isValidPassword(loginPasswordValue)) {
    errorMessage(loginPassword, 'Password should be 8 characters long')
  } else {
    success(loginPassword)
  }
}

const errorMessage = (input, message) => {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')
  formControl.className = 'form-control error'
  small.innerText = message
}

const success = (input) => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

const isValidPassword = (password) => {
  if (password.length < 8) {
    return false
  } else {
    return true
  }
}


let firstValidation = loginEmail.addEventListener('blur', (e) => {
  e.preventDefault();
  validateLoginEmail();
})

let secondValidation = loginPassword.addEventListener('blur', (e) => {
  e.preventDefault();
  validateLoginPassword();
})

if (
  firstValidation &&
  secondValidation
) {
  signUpButton.disabled = false
}