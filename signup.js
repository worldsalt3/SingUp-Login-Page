const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const checkbox = document.getElementById('checkbox');
const signUpButton = document.getElementById('signUp');
const form = document.getElementById('form');
// // const loginEmail = document.getElementById('loginEmail');
// const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('login');

signUpButton.disabled = true;
// console.log(loginEmail)


const validateFirstName = () => {
    
    const firstNameValue = firstName.value.trim();
    
    if (firstNameValue == '') {
        errorMessage(
          firstName,
          'First Name cannot be blank (First Name can accept any character except numbers)'
        );
        
    } else if (isValidName(firstNameValue)) {
        errorMessage(firstName, 'First Name accept any character except numbers');
    } else {
        success(firstName);
    }
}

const validateLastName = () => {
    
    const lastNameValue = lastName.value.trim();
    
    if (lastNameValue == '') {
      errorMessage(
        lastName,
        'Last Name cannot be blank (Last Name can accept any character except numbers)'
      )
    } else if (isValidName(lastNameValue)) {
      errorMessage(lastName, 'Last Name accept any character except numbers');
    } else {
      success(lastName);
    }
}

const validateEmail = () => {

    const emailValue = email.value.trim();
    
    if (emailValue == '') {
        errorMessage(email, 'Email cannot be blank');
    } else if (!isEmail) {
        errorMessage(email, 'Not a valid Email');
    } else {
        success(email);
    }
}

const validatePassword = () => {

  const passwordValue = password.value.trim()
  
  if (passwordValue == '') {
    errorMessage(password, 'Password cannot be blank');
  } else if (!isValidPassword(passwordValue)) {
    errorMessage(password, 'Password should be 8 characters long')
  } else {
    success(password)
  }
}

const validateConfirmPassword = () => {
    
    const confirmPasswordValue = confirmPassword.value.trim();
    const passwordValue = password.value.trim();
    
    
    if (confirmPasswordValue == '') {
      errorMessage(confirmPassword, 'Confirm Password cannot be blank')
    } else if (passwordValue !== confirmPasswordValue) {
      errorMessage(confirmPassword, 'Password does not match')
    } else {
      signUpButton.disabled = false;
      success(confirmPassword);
    }
}

const validateLoginEmail = () => {
    const loginEmailValue = loginEmail.value.trim();

    if (loginEmailValue == '') {
        errorMessage(loginEmail, 'Email cannot be blank');
    } else if (!isEmail) {
        errorMessage(loginEmail, 'Not a valid Email');
    } else {
        success(loginEmail);
    }    
}

const validateLoginPassword = () => {
    const loginPasswordValue = loginPassword.value.trim();

    
  if (loginPasswordValue == '') {
    errorMessage(loginPassword, 'Password cannot be blank')
  } else if (!isValidPassword(loginPasswordValue)) {
    errorMessage(loginPassword, 'Password should be 8 characters long')
  } else {
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
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

const isValidName = (name) => {
    let regEx = /\d|\d[^0-9]|[^0-9]\d/gi
    return name.match(regEx);
}

const isValidPassword = (password) => {
    if (password.length < 8) {
        return false;
    } else {
        return true;
    }
}

let firstValidation = firstName.addEventListener('blur', (e) => {
  e.preventDefault()
  validateFirstName()
})

let secondValidation = lastName.addEventListener('blur', (e) => {
  e.preventDefault()
  validateLastName()
})

let thirdValidation = email.addEventListener('blur', (e) => {
  e.preventDefault()
  validateEmail()
})

let forthValidation = password.addEventListener('blur', (e) => {
  e.preventDefault()
  validatePassword()
})

let fifthValidation = confirmPassword.addEventListener('blur', (e) => {
  e.preventDefault()
  validateConfirmPassword()
})

if (
  firstValidation &&
  secondValidation &&
  thirdValidation &&
  forthValidation &&
  fifthValidation
) {
  signUpButton.disabled = false
}

// loginEmail.addEventListener('blur', (e) => {
//   e.preventDefault()
//   validateLoginEmail()
// })

// loginPassword.addEventListener('blur', (e) => {
//   e.preventDefault()
//   validateLoginPassword()
// })