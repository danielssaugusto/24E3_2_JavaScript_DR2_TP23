const camiseta = prompt("Digite a cor da camiseta").toLowerCase();
const calca = prompt("Digite a cor da calça").toLowerCase();

if (camiseta === "vermelha" && calca === "amarela") {
    alert("Ketchup e mostarda!");
} else if (camiseta === "amarela" && calca === "preta") {
    alert("Agora você é uma abelha!");
} else if (camiseta === "branca" && calca === "jeans") {
    alert("Look clássico! Não tem como errar");
} else {
    alert("Hmm, nada a comentar...!");
}
