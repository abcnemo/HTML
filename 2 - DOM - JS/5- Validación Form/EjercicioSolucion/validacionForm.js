const buttons = document.querySelectorAll("button");
const spanError = document.querySelectorAll(".spanError");

const emailREGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const pass1REGEXP = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{6,})$/;

const formToggles = document.querySelectorAll(".formToggle");
const forms = document.querySelectorAll("form");

// cambio de visualizacion de forms
formToggles[0].addEventListener("click", () => {
  forms[0].classList.add("hide");
  forms[1].classList.remove("hide");
});

formToggles[1].addEventListener("click", () => {
  forms[1].classList.add("hide");
  forms[0].classList.remove("hide");
});

// REGISTRO
buttons[0].addEventListener("click", () => {
  // recoger todos los elementos del form
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const pass1 = document.getElementById("pass1");
  const pass2 = document.getElementById("pass2");

  // reset estilos error y mensajes
  username.classList.remove("inputError");
  email.classList.remove("inputError");
  pass1.classList.remove("inputError");
  pass2.classList.remove("inputError");
  for (let i = 0; i < spanError.length; i++) {
    spanError[i].innerHTML = "";
  }
  // username
  if (username.value.length < 2) {
    username.classList.add("inputError");
    spanError[0].innerHTML = "El campo está vacio ó es menor de 2 caract!";
  } 
  // email
  if (email.value.length === 0 || !emailREGEXP.test(email.value)) {
    email.classList.add("inputError");
    spanError[1].innerHTML = "El campo está vacio ó email con formato incorrecto!";
  } 
  // contraseñas
  if (!pass1REGEXP.test(pass1.value)) {
    pass1.classList.add("inputError");
    spanError[2].innerHTML = "El campo está vacio ó contraseña con formato incorrecto!";
  } 
  if (pass2.value.length === 0 || pass1.value !== pass2.value) { 
    pass2.classList.add("inputError");
    spanError[3].innerHTML = "El campo está vacio ó las contraseñas no coinciden!";
  }
});
// LOGIN
buttons[1].addEventListener("click", () => {
  // recoger todos los elementos del form
  const email = document.getElementById("email_");
  const pass = document.getElementById("pass_");

  // reset estilos error y mensajes
  email.classList.remove("inputError");
  pass.classList.remove("inputError");
  for (let i = 0; i < spanError.length; i++) {
    spanError[i].innerHTML = "";
  }
  // email
  if (email.value.length === 0 || !emailREGEXP.test(email.value)) {
    email.classList.add("inputError");
    spanError[4].innerHTML = "El campo está vacio ó email con formato incorrecto!";
  } 
  // contraseñas
  if (pass.value.length === 0) {
    pass.classList.add("inputError");
    spanError[5].innerHTML = "El campo está vacio";
  } 
});