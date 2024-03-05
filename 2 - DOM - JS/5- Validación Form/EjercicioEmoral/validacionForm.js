const button = document.querySelector("button");

const emailREGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const pass1REGEXP = /^[a-zA-Z0-9]/;

button.addEventListener("click", () => {
  // recoger todos los elementos del form
  const spanError = document.querySelectorAll(".spanError");
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
 
  if (username.value.length < 2) {
    username.classList.add("inputError");
    spanError[0].innerHTML = "El campo está vacio ó es menor de 2 caract!";
  } 

  if (email.value.length === 0 || !emailREGEXP.test(email.value)) {
    email.classList.add("inputError");
    spanError[1].innerHTML = "El campo está vacio ó email con formato incorrecto!";
  } 
  if (pass1.value.length < 11 ) {
    pass1.classList.add("inputError");
    spanError[2].innerHTML = "la contraseña no cumple con los requerimientos";
  } 
  if (!pass1REGEXP.test(pass1.value )) {
    pass1.classList.add("inputError");
    spanError[2].innerHTML = "la contraseña no cumple con los requerimientos";
  } 


  if (pass1.value !== pass2.value) {
    pass2.classList.add("inputError");
    spanError[3].innerHTML = "la contraseña no coincide";
  } 


});