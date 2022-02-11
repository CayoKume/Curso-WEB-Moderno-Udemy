const nome = 'Rebeca';
const concatenacao = "Olá" + nome + "!"; //não pode ter quebra de linhas concatenando desta forma

const template =
    `
        Olá ${nome}!
    `;
console.log(concatenacao, template);

//expressões
console.log(`1+1 = ${1+1}`);
const up = texto => texto.toUpperCase();
console.log(`Ei...${up('vai catar coquiquinho')}!`);