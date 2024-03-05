const button = document.querySelector("button");
const form = document.querySelector("form");
const spanError = document.querySelectorAll(".spanError");

let id = 0;

button.addEventListener("click", () => {
  // recoger todos los elementos del form
  
  const contenido = document.getElementById("contenido");

  let validacion = true;

  // reset estilos error y mensajes
  
  contenido.classList.remove("inputError");
  for (let i = 0; i < spanError.length; i++) {
    spanError[i].innerHTML = "";
  }

  
  // contenido
  if (contenido.value < 18) {
    contenido.classList.add("inputError");
    spanError[0].innerHTML = "Es menor que 18";
    validacion = false;}
    
    
  
  // si el form esta validado!
  if (validacion) {
   const divDer = document.querySelector("#der");
    
    
    contenido.classList.add("inputError");
    spanError[0].innerHTML = "Es mayor que 18";

    
    const btnEliminar = document.querySelectorAll(".btnEliminar");
    // reset campos
    form.reset();

    
      };
    }
  
);