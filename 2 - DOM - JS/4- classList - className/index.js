function cambiar() {
  const cajas_rojas = document.querySelectorAll(".cajas_rojas");
  for (let i = 0; i < cajas_rojas.length; i++) {
    cajas_rojas[i].className = "cajas_verdes";
  }
}

function cambiar_() {
  const caja_azul = document.querySelector(".azul");
  caja_azul.classList.remove("azul");
  caja_azul.classList.add("amarillo");
}

function cambiar__() {
  const caja_azul = document.querySelector(".azul_abajo");
  caja_azul.classList.toggle("hide");
}