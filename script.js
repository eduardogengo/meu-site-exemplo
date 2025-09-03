// Elementos já existentes
const botao = document.getElementById("btnMostrar");
const textoExtra = document.getElementById("textoExtra");
let visivel = false;

// Mostrar/esconder texto extra
botao.addEventListener("click", () => {
  visivel = !visivel;

  if (visivel) {
    textoExtra.classList.remove("escondido");
    botao.textContent = "Esconder";
  } else {
    textoExtra.classList.add("escondido");
    botao.textContent = "Mostrar mais";
  }
});

// Trocar nome pelo valor digitado
const inputNome = document.getElementById("inputNome");
const btnTrocar = document.getElementById("btnTrocar");
const nomeTitulo = document.getElementById("nomeTitulo");

btnTrocar.addEventListener("click", () => {
  const novoNome = inputNome.value.trim();

  if (novoNome) {
    nomeTitulo.textContent = `Olá, eu sou o ${novoNome}!`;
    inputNome.value = ""; // limpa o campo
  } else {
    alert("Digite um nome antes de trocar!");
  }
});
