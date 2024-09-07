function calcularIMC() {
    const altura = parseFloat(prompt("Digite sua altura em metros:"));
    const peso = parseFloat(prompt("Digite seu peso em kg:"));
  
    // Validando os dados de entrada
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      alert("Por favor, insira valores válidos para altura e peso.");
      return;
    }
  
    // Calculando o IMC
    const imc = peso / (altura * altura);
  
    // Classificando o IMC
    let classificacao;
    if (imc < 16) {
      classificacao = "Baixo peso (grau I)";
    } else if (imc < 17) {
      classificacao = "Baixo peso (grau II)";
    } else if (imc < 18.5) {
      classificacao = "Baixo peso (grau III)";
    } else if (imc < 25) {
      classificacao = "Peso adequado";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else if (imc < 35) {
      classificacao = "Obesidade (grau I)";
    } else if (imc < 40) {
      classificacao = "Obesidade (grau II)";
    } else {
      classificacao = "Obesidade (grau III)";
    }
  
    // Exibindo o resultado
    alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
  }
  
  // Chamando a função para iniciar o cálculo
  calcularIMC();