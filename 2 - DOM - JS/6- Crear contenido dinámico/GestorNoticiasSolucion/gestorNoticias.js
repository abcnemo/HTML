const button = document.querySelector("button");
const form = document.querySelector("form");
const spanError = document.querySelectorAll(".spanError");

let id = 0;

button.addEventListener("click", () => {
  // recoger todos los elementos del form
  const titulo = document.getElementById("titulo");
  const contenido = document.getElementById("contenido");

  let validacion = true;

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
    validacion = false;
  } 
  // contenido
  if (contenido.value.length === 0) {
    contenido.classList.add("inputError");
    spanError[1].innerHTML = "El campo está vacio!";
    validacion = false;
  } 
  // si el form esta validado!
  if (validacion) {
    const divDer = document.querySelector("#der");
    divDer.innerHTML +=
    `<article id=article${id}> 
      <h1>${titulo.value}</h1>
      <p>${contenido.value}</p>
      <button class="btnEliminar">Eliminar</button>
    </article>`;
    id++;
    const btnEliminar = document.querySelectorAll(".btnEliminar");
    // reset campos
    form.reset();

    for (let i = 0; i < btnEliminar.length; i++) {
      btnEliminar[i].addEventListener("click", () => {
        if (confirm("Estas seguro que quieres eliminar la noticia?")) {
          const articulo = document.getElementById("article"+i);
          articulo.remove();
        }
      });
    }
  }
});



