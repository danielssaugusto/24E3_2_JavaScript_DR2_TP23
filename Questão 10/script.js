function wordToNumber(num) {
    switch (num) {
        case "zero":
            return 0;
        case "um":
            return 1;
        case "dois":
            return 2;
        case "tres":
        case "três":
            return 3;
        case "quatro":
            return 4;
        case "cinco":
            return 5;
        case "seis":
            return 6;
        case "sete":
            return 7;
        case "oito":
            return 8;
        case "nove":
            return 9;
        default:
            return "Número fora do parâmetro!";
    }
}

const numero = prompt("Digite um número entre 0 e 9 por extenso");
const algarismo = wordToNumber(numero);
console.log(algarismo);
