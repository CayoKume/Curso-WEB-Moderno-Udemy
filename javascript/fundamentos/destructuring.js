//desestruturando objetos novo recurso de ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);
const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, Humor = 'Triste' } = pessoa;
console.log(sobrenome, Humor);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

/*const { conta: {ag, num} } = pessoa;
console.log(ag, num); isso dá erro porque em pessoa eu não tenho um objeto chamado conta*/

//desestruturando objetos dentro de funcões
function rand({ min = 0, max = 1000 }) { //{} referencia a operação destructuring
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
console.log(rand({ max: 50, min: 40 }));
/*{} referencia aos parametros do objeto seria a mesma coisa que:
const obj = {max: 50, min:40};
console.log(rand(obj));
*/
console.log(rand({ min: 955 })); //posso somente passar o valor de min já que max está setado dentro da função
console.log(rand({})); //posso não setar nem min nem max e ele ficara com valores entre 0 e 1000, já setados dentro da função
/*console.log(rand()) isso dá erro porque as {} da função representam a operação destructuring e não o objeto, 
então você está tentando desestruturar algo que é undefined ou nulo*/

//--------------------------------------------------------------------------------------------------------------------
//desestruturando arrays
const [a] = [10]; //estou pegando o valor do array e atribuindo a variavel a
console.log(a);

const [i0, , i2, i3, i4 = 0] = [10, 7, 9, 8];
/*estou pegando os valores das possições i0, i2, i3 do array e tentatndo acessar a posição i4, como ela não existe, 
atribui o valor zero como padrão*/
console.log(i0, i2, i3, i4);

const [, [, nota]] = [
    [, 8, 8],
    [9, 6, 8]
];
/* estou pegando o segundo elemento do segundo array, do array formado por 2 arrays e atribuindo a variavel nota*/
console.log(nota);

//desestruturando arrays dentro de funcões
function rand2([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max, min]
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand2([50, 40]));
console.log(rand2([992]));
console.log(rand2([, 10]));
console.log(rand2([]));
/*console.log(rand()) isso dá erro porque as [] da função representam a operação destructuring e não o array, 
então você está tentando desestruturar algo que é undefined ou nulo*/