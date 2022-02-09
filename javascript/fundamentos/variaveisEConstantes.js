var a = 3;
let b = 4;

var a = 10;
b = 40; // não pode declarar novamente variavel let

console.log(a, b);

a = 300; // não precisa declarar novamente variavel var
b = 400;

console.log(a, b);

const c = 5;
//c = 50  não pode mudar valor de variavel constante
console.log(c);