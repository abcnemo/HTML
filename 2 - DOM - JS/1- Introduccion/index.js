// Mediante el DOM podemos recoger elementos del HTML y modificarlos.
{/* <div id="caja1"></div> */}

const caja1 = document.getElementById("caja1");
console.log(caja1);

// document.getElementById(): Método del DOM que permite traer a JS elementos del HTML mediante su atributo ID
// Mediante la prop "innerHTML" modificamos el contenido de un elemento
caja1.innerHTML = "Hola mundo!";

// -------------------------------------
// Crear un elemento y añadirlo al body
const parrafo = document.createElement("p");
{/* <p></p> */}
parrafo.innerHTML = "Lorem Ipsum";
{/* <p>Lorem Ipsum</p> */}
parrafo.style.color = "red";
document.body.appendChild(parrafo);
// ------------------------
const cajas = document.getElementsByClassName("cajas");
console.log(cajas);
cajas[0].style.backgroundColor = "red";

for (let i = 0; i < cajas.length; i++) {
  cajas[i].style.backgroundColor = "yellow";
}
// -------------------------------------
const titulo = document.getElementsByTagName("h1");
titulo[0].innerHTML = "Título 2";

// Ej propuesto: Cambiar el texto de cada uno de los puntos de la lista
const lista = document.getElementsByTagName("li");
console.log(lista);
for (let i = 0; i < lista.length; i++) {
  lista[i].innerHTML = "lista" + (i+1);
}

// Recoger elementos mediante JS Moderno
const caja1_ = document.querySelector("#caja1");
console.log(caja1_);
const cajas_ = document.querySelector(".cajas");
// solo coge el primero
console.log(cajas_);
// si quiero coger el 3o, primero utilizo el querySelectorAll
const cajas_all = document.querySelectorAll(".cajas")[2];
console.log(cajas_all);
//--------
const headers_footers = document.querySelectorAll("header, footer");
console.log(headers_footers);
