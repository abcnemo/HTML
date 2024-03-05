// método que detecta el evento de que todos los elemento del documento HTML enlazado con este JS
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {

});

function cambiar_color() { 
  let p = document.querySelector("p");
  p.style.color = "red";
}

function validar() {
  const input = document.querySelector("input[type=text]");
  const input_valor = input.value;
  if (input_valor.length < 8 ) {
    //poner en rojo
    input.style.color = "red";
  } else {
    // sacar rojo
    input.style.color = "black";
  }
}

// CREAR 2 TITULOS Y DOS BOTONES QUE ELIMINE EL CONTENIDO DEL PRIMER TITULO, Y CAMBIE A NEGRITA EL SEGUNDO RESPECTVAMENTE
function cambiar_t1() {
  const h1 = document.getElementsByTagName("h1");
  h1[0].innerHTML = "";
}
function cambiar_t2() {
  const h2 = document.querySelector("h2");
  h2.style.fontWeight = "bold";
}

// CREAR UN PARRAFO Y MEDIANTE UN BOTON CAMBIAR EL TEXTO DE COLOR, Y SI SE CLICKA OTRA VEZ, VUELVE AL OTRO COLOR ANTERIOR. ASI SUCESIVAMENTE
var toggle = true;
function cambiar_color() {
  const p = document.querySelectorAll("p")[1]; //2o parrafo
  if (toggle) {
    p.style.color = "blue";
    toggle = false;
  } else {
    p.style.color = "black";
    toggle = true;
  }
}




