const btnCREAR = document.querySelector("button");
const numCALCSInput = document.querySelector("input"); 
const resultDIV = document.querySelector("#result");

btnCREAR.addEventListener("click", () => {

  let contentCALCS = "";

  for (let i = 0; i < numCALCSInput.value; i++) {
    contentCALCS +=
    `<div class="calculadoras">
      <input type="number" id="numero1-${i+1}" placeholder="num1">
      <input type="number" id="numero2-${i+1}" placeholder="num2">
      <input type="text" id="operacion-${i+1}" placeholder="operacion [+,-,*,/]">
      <button class="btnCALCULAR" id="${i+1}">Calcular!</button>
      <div></div>
    </div>`;
  }
  // IMPRIMIR LAS CALCULADORAS
  resultDIV.innerHTML = contentCALCS;

  // REALIZAR EL CALCULO
  const btnsCALCULAR = document.querySelectorAll(".btnCALCULAR");
  for (let i = 0; i < btnsCALCULAR.length; i++) {
    btnsCALCULAR[i].addEventListener("click", (e) => {
      // coger los campos de la calculadora en concreto, para hacer la operacion
      console.log(e.target); // devuelve el elemento en el cual ha sido generado el evento
      console.log(e.target.id);
    });
  }
  
});


