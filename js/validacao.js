function validarCPF(cpf) {
    if (cpf.length !== 11) {
      return false;
    }
    if (!/^\d+$/.test(cpf)) {
      return false;
    }
    if (new Set(cpf.split("")).size === 1) {
      return false;
    }
    return true;
}
  function primeiroDigito(cpf) {
    let peso = 10;
    let soma = 0;
  
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * peso;
      peso--;
}
  
    const resto = soma % 11;
    const dgv = resto < 2 ? 0 : 11 - resto;
  
    return dgv === parseInt(cpf.charAt(9));
}
  
  function segundoDigito(cpf) {
    let peso = 11;
    let soma = 0;
  
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * peso;
      peso--;
}
  
    const resto = soma % 11;
    const dgv = resto < 2 ? 0 : 11 - resto;
  
    return dgv === parseInt(cpf.charAt(10));
}
  function salvar() {
    var cpf = document.getElementById("cpf").value;
    var verificado = document.getElementById("verificado");

    if (validarCPF(cpf)) {
      verificado.innerHTML = "CPF válido";
    } else {
      verificado.innerHTML = "CPF inválido";
    }
}


const form = document.getElementById("meuForm");
const cadastrados = document.getElementById("lista-cadastro");
const pessoaArray = JSON.parse(localStorage.getItem("pessoaArray")) || [];

alunosArray.forEach((elemento) => {
  newEvent(elemento);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const pessoa = e.target.elements["pessoa"];
  const email = e.target.elements["email"];
  const celular = e.target.elements["celular"];
  cpf = e.target.elements["cpf"];

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

  