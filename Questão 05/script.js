function converterNumeroPorExtenso() {
    const numero = prompt("Digite um número de 0 a 9:");
    const numeroConvertido = parseInt(Number(numero));
  
    switch (numeroConvertido) {
        case 0:
            alert("Zero");
            break;
        case 1:
            alert("Um");
            break;
        case 2:
            alert("Dois");
            break;
        case 3:
            alert("Três");
            break;
        case 4:
            alert("Quatro");
            break;
        case 5:
            alert("Cinco");
            break;
        case 6:
            alert("Seis");
            break;
        case 7:
            alert("Sete");
            break;
        case 8:
            alert("Oito");
            break;
        
        case 9:
            alert("Nove");
            break;
        default:
            alert("Número desconhecido");
    }
  }
  
  converterNumeroPorExtenso();