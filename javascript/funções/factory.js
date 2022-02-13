//factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    };
};
console.log(criarPessoa());

//factory por parametros
function criarProduto(nome, preco) {
    return {
        nome,
        preco
    };
};
console.log(criarProduto('veja', 7.50));

//classe vs factory
class pessoa {
    constructor(nome) {
        this.nome = nome;
    };
    falar() {
        console.log(`Meu Nome é: ${this.nome}`);
    };
};
const p1 = new pessoa('João');
p1.falar();

const criarPessoa2 = nome => {
    return {
        falar: () => console.log(`Meu Nome é: ${nome}`)
    };
};
const p2 = criarPessoa2('João');
p2.falar();

//desafio função construtora
function pessoa3(nome) {
    this.nome = nome;
    this.falar = function() {
        console.log(`Meu nome é : ${nome}`);
    };
};
const p3 = new pessoa3('Cayo');
p3.falar();
console.log(p3.nome);