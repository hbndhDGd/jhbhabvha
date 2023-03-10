const input = document.getElementById("texto"); // recupera o input text pelo id
const botao = document.querySelector("input[type=submit]"); // recupera o botão submit
const resultado = document.getElementById("resultado"); // recupera o elemento p pelo id

botao.addEventListener("click", function(event) {
  event.preventDefault(); // impede o envio do formulário

  const textoDigitado = input.value; // armazena o valor do input text na variável

  if (textoDigitado === "843") {
    resultado.textContent = "UCv3kqcpDuXna8pfIhk2tsiA";
  } else {
    resultado.textContent = ""; // altera o texto do elemento p
  }
});