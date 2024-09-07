function ordenarNumeros() {
    const x = parseInt(prompt("Digite um número inteiro positivo (X):"));
    const a = parseFloat(prompt("Digite o primeiro número real (A):"));
    const b = parseFloat(prompt("Digite o segundo número real (B):"));
    const c = parseFloat(prompt("Digite o terceiro número real (C):"));
  
    // Validando o valor de X
    if (x <= 0 || isNaN(x)) {
      alert("X deve ser um número inteiro positivo.");
      return;
    }
  
    // Criando um array para armazenar os valores
    const numeros = [a, b, c];
  
    // Ordenando os números de acordo com o valor de X
    switch (x) {
      case 1:
        numeros.sort((a, b) => a - b); // Ordem crescente
        break;
      case 2:
        numeros.sort((a, b) => b - a); // Ordem decrescente
        break;
      case 3:
        numeros.sort((a, b) => 0.5 - Math.random()); // Ordem aleatória (maior no meio)
        break;
      default:
        alert("O valor de X não corresponde a nenhuma das condições.");
        return;
    }
  
    // Exibindo o resultado
    alert(`Os números ordenados são: ${numeros.join(", ")}`);
  }
  
  // Chamando a função para iniciar a ordenação
  ordenarNumeros();