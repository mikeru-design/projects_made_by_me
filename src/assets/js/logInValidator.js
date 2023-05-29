const validate = {
  userName: /^[a-z\d-_]{2,}$/i,
  password: {
    letters: /^(?=.{8,32}$)(?=.*[A-Z])(?=.*[a-z]).*/,
    digits: /[0-9]/,
    special: /[!@#$%^&*(),./<>?;':"]/,
  },
  email: /^([\w\.-_]+)@([a-z]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

const closePopUp = (popUp) => {
  popUp.classList.remove('showPopUp');
  document.removeEventListener('click', closePopUp);
};

export const logInValidate = (
  inputs,
  inputsMssg,
  logedInPopUp,
  notLogedInPopUp
) => {
  if (
    validate.userName.test(userName.value) &&
    validate.password.letters.test(password.value) &&
    passwordCheck.value === password.value &&
    validate.email.test(email.value)
  ) {
    logedInPopUp.classList.add('showPopUp');
    document.addEventListener('click', () => closePopUp(logedInPopUp));
    inputsMssg.forEach((inputMssg) => (inputMssg.innerHTML = ''));
    inputs.forEach((input) => (input.className = ''));
    logInValidator.reset();
  } else {
    notLogedInPopUp.classList.add('showPopUp');
    document.addEventListener('click', () => closePopUp(notLogedInPopUp));
  }
};

const checkPassword = (input, inputName, inputMssg) => {
  if (input.value && !validate[inputName].letters.test(input.value)) {
    input.className = '';
    input.classList.add('invalid');
    inputMssg.classList.add('show');
    input.nextElementSibling.innerHTML =
      'Your password must have at least one lowercase and one uppercase letter, and consist beetween 8 and 32 signs';
  } else if (input.value && validate[inputName].letters.test(input.value)) {
    input.className = '';
    input.classList.add('ok');
    inputMssg.classList.add('show');
    inputMssg.innerHTML =
      'Your password is <span>OK</span>. But we recoment using at least one digit and one special sign';

    if (
      validate[inputName].digits.test(input.value) ||
      validate[inputName].special.test(input.value)
    ) {
      input.className = '';
      input.classList.add('good');
      inputMssg.innerHTML =
        'Your password is <span>GOOD</span>. But we recoment using at least one special sign';
    }

    if (
      validate[inputName].digits.test(input.value) &&
      validate[inputName].special.test(input.value)
    ) {
      input.className = '';
      input.classList.add('valid');
      inputMssg.innerHTML = 'Your password is <span>GREAT</span>';
    }
  } else {
    input.className = '';
    inputMssg.innerHTML = '';
    inputMssg.classList.remove('show');
  }

  confirmPassword()
};

const checkInputValue = (input, inputName, inputMssg) => {
  if (input.value && validate[inputName].test(input.value)) {
    input.className = '';
    input.classList.add('valid');
    inputMssg.classList.add('show');
    inputMssg.innerHTML = `Your ${inputName} is <span>valid</span>`;
  } else if (input.value && !validate[inputName].test(input.value)) {
    input.className = '';
    input.classList.add('invalid');
    inputMssg.classList.add('show');
    if (inputName === 'userName') {
      inputMssg.innerHTML = `User name must consist of at least two signs. It can include lowercase and uppercase letters, digits and allowed special signs ". - _"`;
    } else if (inputName === 'email') {
      inputMssg.innerHTML = `Type in a valid email (e.g. "john.doe@gmail.com" or "johndoe1985@gmail.com.pl" )`;
    }
  } else {
    input.className = '';
    inputMssg.innerHTML = '';
    inputMssg.classList.remove('show');
  }
};

const confirmPassword = () => {

  const input = passwordCheck
  const inputMssg = input.nextElementSibling

  if (input.value && input.value !== password.value) {
    input.className = '';
    input.classList.add('invalid');
    inputMssg.classList.add('show');
    inputMssg.innerHTML = `Value does not match the password`;
  } else if (input.value && input.value === password.value) {
    input.className = '';
    input.classList.add('valid');
    inputMssg.innerHTML = `Password <span>match</span>`;
  } else {
    input.className = '';
    inputMssg.innerHTML = '';
    inputMssg.classList.remove('show');
  }
};

export const valueCheck = (input) => {
  const inputName = input.getAttribute('name');
  const inputMssg = input.nextElementSibling;

  if (inputName !== 'passwordCheck') {
    if (validate[inputName] instanceof RegExp === false) {
      checkPassword(input, inputName, inputMssg);
    } else {
      checkInputValue(input, inputName, inputMssg);
    }
  } else {
    confirmPassword();
  }
};
