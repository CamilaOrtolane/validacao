function validarCPF(cpf) {
    // Verificar se o CPF possui 11 dígitos
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
      
      // Aqui você pode adicionar a lógica para salvar o CPF ou realizar outras ações
    } else {
      verificado.innerHTML = "CPF inválido";
    }
}

  