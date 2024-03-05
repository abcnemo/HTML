const array = [];
const p = document.querySelector("p");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
let acumuladorHTML = "";

function guardar() {
  // reset validaciones
  input.style.backgroundColor = "white";
  p.innerHTML = "";

  if (input.value.length == 0) {
    input.style.backgroundColor = "red";
    p.innerHTML = "Añade un dato"; // para el script
    return;
  } 
  array.push(input.value);
  console.log(array);
}

function imprimir() {
  // acumulador
  // <li>a</li>
  // <li>b</li>
  // <li>c</li>
  for (let i = 0; i < array.length; i++) {
    acumuladorHTML += "<li>" + array[i] + "</li>";
  }
  ul.innerHTML = acumuladorHTML;
  // createElement
}

