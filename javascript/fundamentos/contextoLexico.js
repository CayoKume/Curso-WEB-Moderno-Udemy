//par nome/valor
const saudacao = 'Opa'; //contexto lexico 1 (contexto léxico é a mesma coisa que scoopo)

function Exec() {
    const saudacao = 'Falaaaa' //contexto lexico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valores
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Antônio Austregésilo',
        numero: 123,
        saudacao: 'olá'
    }
};

console.log(saudacao);
console.log(Exec());
console.log(cliente);