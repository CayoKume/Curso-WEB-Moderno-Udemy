function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
};

let opcao = 0;

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
};

console.log('Até a próxima!');

//--------------------------------------------------------------------------------------------------------------------------

function getInteiroAleatorioEntre2(min, max) {
    const valor2 = Math.random() * (max - min) + min;
    return Math.floor(valor2);
};

let opcao2 = 0;

do {
    opcao2 = getInteiroAleatorioEntre2(-1, 10);
    console.log(`Opção escolhida foi ${opcao2}.`);
} while (opcao2 != -1);

console.log('Até a próxima!');