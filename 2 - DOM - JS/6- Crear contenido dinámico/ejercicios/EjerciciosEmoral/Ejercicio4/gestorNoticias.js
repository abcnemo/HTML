const button = document.querySelector("button");

const btnEliminar = document.querySelector("btnEliminar");
const spanError = document.querySelectorAll(".spanError");
const p = document.querySelector("p");
const input = document.querySelector("input");

// REGISTRO
button.addEventListener("click", () => {


  const divDer = document.querySelector("#der");
  divDer.innerHTML =
    `<article>
     <h>texto</h>
     
     <button class="btnEliminar">Eliminar</button>
     
     
   </article>`;
})

btnEliminar.addEventListener("click", () => {


  const divDer = document.querySelector("#der");
  divDer.innerHTML =
    `<article>
       <p>texto2</p>
     </article>`;
})




