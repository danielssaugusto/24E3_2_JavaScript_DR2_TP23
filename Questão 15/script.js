function eleicoesMascote() {
    // Criando um array de mascotes
    const mascotes = [
        "RoboRat", "SuperKeyboard"
    ];

    // Criando um objeto para armazenar os votos
    const votosRecebidos = {
        RoboRat: 0,
        SuperKeyboard: 0,
    };

    // Solicita a quantidade de votos inválidos
    const votosInvalidos = parseInt(prompt("Digite a quantidade de votos inválidos:"));

    // Verifica se o valor inserido para votos inválidos é válido
    if (isNaN(votosInvalidos) || votosInvalidos < 0) {
        alert("Número de votos inválidos inválido. Por favor, insira um número válido.");
        return;
    }

    // Iterando sobre o array de mascotes para coletar votos
    for (let i = 0; i < mascotes.length; i++) {
        const mascote = mascotes[i];
        const votos = parseInt(prompt(`
    ELEIÇÕES PARA MASCOTE DO E-SPORTS
    **********************************
    Qual a quantidade de votos recebidos para o ${mascote}?
        `));

        // Verifica se o valor inserido é um número válido e não negativo
        if (!isNaN(votos) && votos >= 0) {
            votosRecebidos[mascote] = votos;
        } else {
            alert("Número de votos inválido. Por favor, insira um número válido.");
            i--; // Repetir a iteração para o mesmo mascote
        }
    }

    // Calcula o total de votos válidos e o total geral (incluindo votos inválidos)
    const totalVotosValidos = votosRecebidos.RoboRat + votosRecebidos.SuperKeyboard;
    const totalVotos = totalVotosValidos + votosInvalidos;

    // Calcula a porcentagem de votos para cada mascote e votos inválidos
    const percentualRoboRatGeral = (votosRecebidos.RoboRat / totalVotos) * 100;
    const percentualSuperKeyboardGeral = (votosRecebidos.SuperKeyboard / totalVotos) * 100;
    const percentualInvalidos = (votosInvalidos / totalVotos) * 100;

    // Calcula a porcentagem de votos para cada mascote considerando apenas votos válidos
    const percentualRoboRatValido = (votosRecebidos.RoboRat / totalVotosValidos) * 100;
    const percentualSuperKeyboardValido = (votosRecebidos.SuperKeyboard / totalVotosValidos) * 100;

    // Determina o novo mascote com base na maior porcentagem de votos válidos
    let novoMascote;
    if (percentualRoboRatValido > percentualSuperKeyboardValido) {
        novoMascote = "RoboRat";
    } else if (percentualSuperKeyboardValido > percentualRoboRatValido) {
        novoMascote = "SuperKeyboard";
    } else {
        novoMascote = "Empate entre RoboRat e SuperKeyboard";
    }

    // Exibindo os resultados
    let resultado = "Resultado das Eleições para Mascote:\n";
    resultado += `Percentual de votos (incluindo votos inválidos):\n`;
    resultado += `RoboRat: ${percentualRoboRatGeral.toFixed(2)}%\n`;
    resultado += `SuperKeyboard: ${percentualSuperKeyboardGeral.toFixed(2)}%\n`;
    resultado += `Votos Inválidos: ${percentualInvalidos.toFixed(2)}%\n\n`;

    resultado += `Percentual de votos (apenas votos válidos):\n`;
    resultado += `RoboRat: ${percentualRoboRatValido.toFixed(2)}%\n`;
    resultado += `SuperKeyboard: ${percentualSuperKeyboardValido.toFixed(2)}%\n\n`;

    resultado += `Novo mascote do time: ${novoMascote}\n`;

    alert(resultado);
}

// Chama a função para iniciar o processo
eleicoesMascote();
