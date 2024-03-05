let teclas = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "z", "x", "c", "v", "b", "n", "m", ",", "."];
let teclas2 = ["Shift", "Espacio", "Enter", "Supr"];
let may = false;  // Control de las mayúsculas


imprimirTECLAS();

// teclado(); // TODO


/* The `imprimirTECLAS()` function is responsible for dynamically generating and displaying buttons for each key in the `teclas` and `teclas2` arrays on a webpage. It loops through the `teclas` array tocreate buttons for each letter key, and then loops through the `teclas2` array to create buttons for special keys like "Shift", "Espacio", "Enter", and "Supr". The function appends these buttons to an
HTML element with the id "teclas" on the webpage. */
function imprimirTECLAS() {
  let teclasDIV = document.querySelector("#teclas");
  for (let i = 0; i < teclas.length; i++) {
    if (i == 10 || i == 20 || i == 28) {
      teclasDIV.innerHTML += "<br>";
    }
    teclasDIV.innerHTML += "<button>" + teclas[i] + "</button>";
  }
  for (let i = 0; i < teclas2.length; i++) {
    teclasDIV.innerHTML += "<button>" + teclas2[i] + "</button>";
  }
}

