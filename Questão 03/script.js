const poderDeLuta = parseInt(Number(prompt("Qual o poder de luta de Kakarotto?")));
console.log(poderDeLuta);

if (poderDeLuta > 8000) {
    alert("Isso deve ser um engano, esse aparelho deve estar quebrado!");
} else {
    alert("Ainda não é o suficiente para derrotar Vegeta!")
}
