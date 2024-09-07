const valorDaCompra = parseFloat(prompt("Digite o valor total da compra (R$):"));
const tipoConsumidor = prompt(`
    Digite o código do tipo de consumidor 
    [A] Gestante
    [B] Aposentado
    [C] Pensionista
    `).toUpperCase();

let desconto;
let valorFinal;

// Verificando se o valor da compra é maior ou igual a R$80,00
const valorDoDesconto = valorDaCompra >= 80 ? {
    // Se maior ou igual a R$80,00 -> aplica os seguintes descontos em %
    A: 20,
    B: 15,
    C: 10
    // Se não, aplica os seguintes descontos
} : {
    A: 15,
    B: 10,
    C: 5
};

// Calcula o desconto com base no tipo de consumidor
if (valorDoDesconto.hasOwnProperty(tipoConsumidor)) {
    desconto = valorDoDesconto[tipoConsumidor];
    valorFinal = valorDaCompra * (1 - desconto / 100);
    alert(`O valor final da compra é R$ ${valorFinal.toFixed(2)}.`);
} else {
    alert("Erro: Tipo de consumidor inválido.");
}
