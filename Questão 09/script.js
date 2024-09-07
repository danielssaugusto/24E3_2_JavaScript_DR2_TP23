function parOuImpar(num) {
    const numeroDigitado = parseInt(Number(num));
    if (numeroDigitado) {
        if (numeroDigitado % 2 === 0) {
            console.log("par");
        } else {
            console.log("ímpar");
        }
    } else {
        alert("Digite um número inteiro!")
    }
}

parOuImpar(prompt("Digite um número"));
