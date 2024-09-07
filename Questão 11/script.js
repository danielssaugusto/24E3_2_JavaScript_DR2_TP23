function horasParaSegundos(nHoras) {
    const numero = parseInt(Number(nHoras)); // Converte para inteiro
    const converterParaMinutos = numero * 60; // Converte para minutos
    const converterParaSegundos = converterParaMinutos * 60; // converte para segundos
    return converterParaSegundos
}

const solicitandoHoras = horasParaSegundos(prompt("Digite um horário"));
console.log(solicitandoHoras);