console.log(typeof Object);
class produto {};
console.log(typeof produto);

//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
};

imprimirSoma(2, 5);
imprimirSoma(2);
imprimirSoma(2, 5, 10, 20, 50, 4);
imprimirSoma();

//função com retorno
function Soma(a, b = 1) {
    return a + b;
};
console.log(Soma(2.3, 3));
console.log(Soma(2.3));
console.log(Soma());

console.log('armazenando uma função em uma variável: ');

const imprimirSoma2 = function(a, b) {
    console.log(a + b);
}
imprimirSoma2(2, 3);

console.log('armazenando uma função arrow em uma variável: ');

const soma2 = (a, b) => {
    return a + b;
}
console.log(soma2(20, 50));

console.log('função arrow com return implicito: ');

const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir = a => console.log(a);
imprimir('Legal!!!!!');