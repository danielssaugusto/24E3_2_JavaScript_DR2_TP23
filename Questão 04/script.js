const nomeFruta = prompt("Digite o nome de uma fruta:").toLowerCase();

if (nomeFruta === "laranja") {
    alert("Não esqueça de descascar!");
} else if (nomeFruta === "maça") {
    alert("Se você tirar a casca perderá as vitaminas!");
} else if (nomeFruta === "banana") {
    alert("Já vem naturalmente embalada e pronta para o consumo!");
} else {
    alert("Não tenho nada a dizer sobre isso.");
}