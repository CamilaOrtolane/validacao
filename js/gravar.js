const form = document.getElementById("meuForm");
const cadastrados = document.getElementById("lista-cadastro");
const pessoaArray = JSON.parse(localStorage.getItem("pessoaArray")) || [];

pessoaArray.forEach((elemento) => {
  newEvent(elemento);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const pessoa = e.target.elements["pessoa"];
  const email = e.target.elements["email"];
  const celular = e.target.elements["celular"];
  const cpf = e.target.elements["cpf"];

  const pessoaStorage = {
    pessoa: pessoa.value,
    email: email.value,
    celular: celuler.value,
    cpf: cpf.value,

  };

  pessoarray.push(pessoaStorage);
  newEvent(pessoaStorage);
  localStorage.setItem("pesssoaArray", JSON.stringify(pessoaArray));
  pessoa.value = "";
  email.value = "";
  celular.value = "";
  cpf.value = "";
  
  aluno.focus();
});

function newEvent(pessoaADD) {
  if (pessoa === "" || email === "" || celular === "" || cpf === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const newItem = document.createElement("li");
  newItem.innerHTML = pessoaADD.aluno;
  newItem.classList.add("item");
  const numeroItem = document.createElement("span");
  numeroItem.innerHTML = pessoaADD.email;
  newItem.appendChild(numeroItem);
  convidados.appendChild(newItem);
}