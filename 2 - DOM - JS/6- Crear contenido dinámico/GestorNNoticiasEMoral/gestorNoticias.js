const button = document.querySelector("button");
const spanError = document.querySelectorAll(".spanError");
const p = document.querySelector("p");
const input = document.querySelector("input");

// REGISTRO
button.addEventListener("click", () => {
  // recoger todos los elementos del form
  const titulo = document.getElementById("titulo");
  const contenido = document.getElementById("contenido");

  // reset estilos error y mensajes
  titulo.classList.remove("inputError");
  contenido.classList.remove("inputError");
  for (let i = 0; i < spanError.length; i++) {
    spanError[i].innerHTML = "";
  }
  // titulo
  if (titulo.value.length === 0) {
    titulo.classList.add("inputError");
    spanError[0].innerHTML = "El campo está vacio!";
  }
  // contenido
  if (contenido.value.length === 0) {
    contenido.classList.add("inputError");
    spanError[1].innerHTML = "El campo está vacio!";
  }

  //añadir contenido
  
  const divDer = document.querySelector("#der");
  divDer.innerHTML =
    `<article>
     <h1>${titulo.value}</h1>
     <p>${contenido.value}</p>
     <button class="btnEliminar">Eliminar</button>
   </article>`;
  
  
  
});