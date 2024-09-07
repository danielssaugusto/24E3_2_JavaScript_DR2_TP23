const primeiraCor = prompt("Digite a primeira cor").toLowerCase();
const segundaCor = prompt("Digite a segunda cor").toLowerCase();

if (primeiraCor === "amarelo" && segundaCor === "laranja") {
    alert("Vermelho");
} else if (primeiraCor === "vermelho" && segundaCor === "amarelo") {
    alert("laranja");
} else if (primeiraCor === "azul" && segundaCor === "vermelho") {
    alert("Roxo");
} else if (primeiraCor === "amarelo" && segundaCor === "azul") {
    alert("Verde");
} else if (primeiraCor === "amarelo" && segundaCor === "verde") {
    alert("Azul");
} else if (primeiraCor === "branco" && segundaCor === "preto") {
    alert("Cinza");
} else if (primeiraCor === "vermelho" && segundaCor === "branco") {
    alert("Rosa");
} else if (primeiraCor === "vermelho" && segundaCor === "verde") {
    alert("Marrom");
} else if (primeiraCor === "laranja" && segundaCor === "roxo") {
    alert("Marrom terra");
} else if (primeiraCor === "roxo" && segundaCor === "branco") {
    alert("Lilás");
} else {
    alert("Combinação não reconhecida");
}
