
const parrafos = document.querySelectorAll("p");
function cambiarColor() {
  parrafos[0].style.color = "blue";
}

function validar() {
  const input = document.getElementsByTagName("input");
  if (input[0].value.length < 8) {
    input[0].style.color = "red";
  } else {
    input[0].style.color = "green";
  }
}

const h1s = document.querySelectorAll("h1");

function cambiar_t1() {
  h1s[0].style.textDecoration = "underline";
}

function cambiar_t2() {
  h1s[1].style.fontStyle = "italic";
}

function toggle() {
  if (parrafos[1].style.color == "green") {
    parrafos[1].style.color = "black";
  } else {
    parrafos[1].style.color = "green";
  }
}