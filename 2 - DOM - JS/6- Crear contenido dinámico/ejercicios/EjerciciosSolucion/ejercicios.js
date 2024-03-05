// Ejercicio 1 -> Crear un input tipo texto y un botón. Al apretar en el botón mostrar la información del input en un div y en un alert.
const inputEjercicio1 = document.querySelector("#ejercicio1INPUT");
const buttonEjercicio1 = document.querySelector("#ejercicio1BTN");
const divEjercicio1 = document.querySelector("#ejercicio1DIV");
buttonEjercicio1.addEventListener("click", () => {
  divEjercicio1.innerHTML = inputEjercicio1.value;
  alert(inputEjercicio1.value);
});

// Ejercicio 2 -> Validar un campo texto. Si está vacío, poner color rojo en el input, en caso contrario verde.
const inputEjercicio2 = document.querySelector("#ejercicio2INPUT");
validar(inputEjercicio2);

function validar(campo) {
  campo.addEventListener("keyup", () => {
    if (campo.value.length === 0) {
      campo.classList.add("rojo");
      campo.classList.remove("verde");
    } else {
      campo.classList.add("verde");
      campo.classList.remove("rojo");
    }
  });
}

// Ejercicio 3 -> Validar un campo numérico. Si es menor de 18, mostrar un texto que confirme que es menor, en caso contrario, que es mayor.
const inputEjercicio3 = document.getElementById("ejercicio3INPUT");
const divEjercicio3 = document.querySelector("#ejercicio3DIV");
inputEjercicio3.addEventListener("change", () => {
  if (inputEjercicio3.value < 18) {
    divEjercicio3.innerHTML = "Eres menor de edad";
  } else {
    divEjercicio3.innerHTML = "Eres mayor de edad";
  }
});

// Ejercicio 4 -> Mostrar una parte del texto y un enlace (etiqueta a) que diga “Leer más”. Cuando se presione en él, mostrar todo el texto y ocultar “Leer más”.
const a = document.querySelector("a");
const span = document.querySelector("span");
a.addEventListener("click", (e) => {
  e.preventDefault(); // para el submit de la etiqueta a y form
  if (a.innerHTML === "Ocultar") {
    a.innerHTML = "Leer más";
  } else {
    a.innerHTML = "Ocultar";
  }
  span.classList.toggle("oculto");
});

// Ejercicio 5 -> Input para pedir cantidad de números de teléfono a introducir. 
// Crear tantos inputs como teléfonos como ha requerido el usuario y mediante un botón imprimirlos.
const inputEjercicio5 = document.querySelector("#ejercicio5INPUT");
const buttonEjercicio5 = document.querySelector("#ejercicio5BTN");
const divEjercicio5 = document.querySelector("#ejercicio5DIV");

buttonEjercicio5.addEventListener("click", () => {
  let inputTELS = "";
  for (let i = 0; i < inputEjercicio5.value; i++) {
    inputTELS += `
      <input type="tel" placeholder="Telefono ${i+1}">
    `;
  }
  divEjercicio5.innerHTML = inputTELS;
});

// Ejercicio 6 -> Crear un pequeño formulario con nombre, teléfono y dirección. Al rellenar el formulario y mediante un botón, introducir los datos en una lista.

const nombre = document.querySelector("#ejercicio6-1INPUT");
const tel = document.querySelector("#ejercicio6-2INPUT");
const direcc = document.querySelector("#ejercicio6-3INPUT");
const buttonEjercicio6 = document.querySelector("#ejercicio6BTN");
const divEjercicio6 = document.querySelector("#ejercicio6DIV");


buttonEjercicio6.addEventListener("click", () => {
  // divEjercicio6.innerHTML = `<ul>
  //     <li>${nombre.value}</li>
  //     <li>${tel.value}</li>
  //     <li>${direcc.value}</li>
  //   </ul>`;
  const ul = document.createElement("ul");

  const li1 = document.createElement("li");
  const nombre2 = document.createTextNode(nombre.value);
  li1.appendChild(nombre2);
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  const tel2 = document.createTextNode(tel.value);
  li2.appendChild(tel2);
  ul.appendChild(li2);

  const li3 = document.createElement("li");
  const direcc2 = document.createTextNode(direcc.value);
  li3.appendChild(direcc2);
  ul.appendChild(li3);

  divEjercicio6.appendChild(ul);

});




