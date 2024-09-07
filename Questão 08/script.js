function mostrarQuantidadeDeCaracteres(str) {
    if (typeof str === "string") {
        const quantidade = str.length;
        alert(`A string possui ${quantidade} caracteres.`);
    } else {
        alert("O parâmetro fornecido não é uma string.");
    }
}

const userInput = mostrarQuantidadeDeCaracteres(prompt("Digite qualquer coisa"));