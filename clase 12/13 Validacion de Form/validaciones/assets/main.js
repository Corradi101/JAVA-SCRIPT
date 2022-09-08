// Traer elementos del html
const form = document.getElementById('form');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');

// Checkeamos el nombre de usuario
const checkUsername = () => {
  // Input valido por defecto = false
  let valid = false;
  //   Guardamos en dos variables el mínimo y el máximo de caracteres para el nombre de usuario
  const min = 3;
  const max = 25;

  // Gurdamos el valor del input en una variable
  const username = nameInput.value.trim();

  // Si el camo esta vacio mostranos un error, llamando a la función showError
  if (!isEmpty(username)) {
    showError(nameInput, 'El nombre es obligatorio');
  } else if (!isBetween(username.length, min, max)) {
    showError(
      nameInput,
      `El nombre debe tener entre ${min} y ${max} caracteres`
    );
  } else {
    showSuccess(nameInput);
    valid = true;
  }

  return valid;
};







// Checkear el email
const checkEmail = () => {
  // Input valido por defecto
  let valid = false;
  // Guardamos el valor dle input
  const emailValue = emailInput.value.trim();
  //   Si el campo esta vacio mostra error
  if (!isEmpty(emailValue)) {
    showError(emailInput, 'El email es obligatorio');
  } else if (!isEmailValid(emailValue)) {
    showError(emailInput, 'El email no es valido');
  } else {
    showSuccess(emailInput);
    valid = true;
  }

  return valid;
};

// Checkeamos la contraseña
const checkPassword = () => {
  let valid = false;
  const password = passInput.value.trim();
  //   si el campo esta vacio mostra error
  if (!isEmpty(password)) {
    showError(passInput, 'La contraseña es obligatoria');
  } else if (!isPassSecure(password)) {
    showError(
      passInput,
      'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un símbolo'
    );
  } else {
    showSuccess(passInput);
    valid = true;
  }

  return valid;
};










// Checkear el teléfono
const checkPhone = () => {
  let valid = false;
  const phoneValue = phoneInput.value.trim();
  if (!isPhoneValid(phoneValue)) {
    showError(phoneInput, 'El teléfono no es válido');
  } else {
    showSuccess(phoneInput);
    valid = true;
  }

  return valid;
};

// Función para verificar si se requiere un campo
// Esta función nos va a devolver true si el campo esta vacío
const isEmpty = value => (value === '' ? false : true);

// Funcion para verificar si la longitud del campo esta dentro de un mínimo y un máximo
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

// Email Valido
const isEmailValid = email => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  //   Testear
  return re.test(email);
};

// Checkear que la contraseña tenga 8 caracteres, minúscula, mayúscula y un símbolo
const isPassSecure = pass => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  //   Testeamos
  return re.test(pass);
};

// Checkeamos si el teléfono ingresado es válido (10 numeros)
const isPhoneValid = phone => {
  const re = /^[0-9]{10}$/;
  // Testeamos
  return re.test(phone);
};

// Función para mostrar un error
// Recibir el input y el mensaje de error
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};

// Función para mostrar éxito
// Recibe el input
const showSuccess = input => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};

// Event Listener para enviar y checkear que todo sea valido
form.addEventListener('submit', e => {
  // Prevenimos por defecto el comportamiento al enviar el form
  e.preventDefault();

  // Guardar el estado de los inputs en variables
  let isUsernameValid = checkUsername();
  let isEmailValid = checkEmail();
  let isPasswordValid = checkPassword();
  let isPhoneValid = checkPhone();

  console.log(isUsernameValid, isEmailValid, isPasswordValid, isPhoneValid);

  //Guardar todos los estados de los inputs en una sola variable
  let isFormValid =
    isUsernameValid && isEmailValid && isPasswordValid && isPhoneValid;

  // Si todos los campos son válidos, "Enviamos" el formulario
  if (isFormValid) {
    alert('Exito');
    form.submit();
  }
});

// Las funciones de rebote (debounce) no se ejecutan al momento de su invocación. En lugar de esto, lo que hace es retrasar su ejecución por un periodo de tiempo predeterminado. Si la misma función se invoca de nuevo, la ejecución previa se cancela y el tiempo de espera se reinicia.

// Esta función recibe dos parámetros: una función (callback) y un tiempo de delay (500ms)

// El primer parámetro es la función que queremos ejecutar después de un tiempo y el segundo es el tiempo que tiene que esperar antes de ejecutarla

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // Cancelar el timer anterior
    if (timeoutId) clearTimeout(timeoutId);

    // Setear un nuevo timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

// Agregar un addEventLister de tipo input al form

form.addEventListener(
  'input',
  debounce(e => {
    switch (e.target.id) {
      case 'username':
        checkUsername();
        break;
      case 'email':
        checkEmail();
        break;
      case 'password':
        checkPassword();
        break;
      case 'phone':
        checkPhone();
        break;
    }
  })
);





