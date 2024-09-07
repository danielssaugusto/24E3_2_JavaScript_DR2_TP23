// Função para apresentar o passo a passo do café
function fazerCafe(passo) {
    switch (passo) {
        case 1:
            alert("1. Selecione os grãos de café desejados.");
            break;
        case 2:
            alert("2. Torre os grãos de café na torradeira.");
            break;
        case 3:
            alert("3. Moa os grãos de café torrados no moedor.");
            break;
        case 4:
            alert("4. Encha o filtro de papel com o café moído.");
            break;
        case 5:
            alert("5. Preparo do Espresso:");
            alert("   5.1. Encha o porta-filtro com a quantidade correta de café moído fino.");
            alert("   5.2. Nivele o café e tampe o porta-filtro.");
            alert("   5.3. Coloque o porta-filtro na máquina de espresso.");
            alert("   5.4. Dispare a máquina e espere o tempo de extração ideal.");
            break;
        default:
            alert("Passo inválido. \nPor favor, escolha um número entre o primeiro e o último passo.");
    }
}
  
// Solicitando o passo inicial para o usuário
let passoInicial = parseInt(prompt("A partir de qual passo você deseja as instruções?"));
  

// Iniciando a função
for (let i = passoInicial; i <= 5; i++) { // Ajustando o número 5 para o último passo
    fazerCafe(i);
}