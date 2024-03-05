const array = [];
const p = document.querySelector("p");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

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
  // let acumuladorHTML = "";
  // for (let i = 0; i < array.length; i++) {
  //   acumuladorHTML += "<li>" + array[i] + "</li>";
  // }
  // ul.innerHTML = acumuladorHTML;
  // createElement
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    const texto = document.createTextNode(array[i]);
    li.appendChild(texto);
    ul.appendChild(li);
  }
}

function articulos() {
  let HTMLContent = "";
  const div = document.getElementsByTagName("div")[0];
  for (let i = 0; i < 10; i++) {
    HTMLContent += `
      <article>
        <h1>Titulo articulo ${i+1}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis commodi eligendi deserunt alias nesciunt, laboriosam velit nihil totam, incidunt at repudiandae facere esse aut eos consequuntur consectetur perferendis temporibus!</p>
      </article>`; 
  }
  div.innerHTML = HTMLContent;
}


