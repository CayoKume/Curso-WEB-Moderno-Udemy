//Exercicio 1
function operacaoesMatematicas(x, y) {
    console.log(`Soma: ${x + y}`);
    console.log(`Subtração: ${x - y}`);
    console.log(`Multiplicação: ${x * y}`);
    console.log(`Divisão: ${x / y}`);
};
operacaoesMatematicas(10, 10);
//Exercicio 2
function validaTriangulo(a, b, c) {
    if (a == b && a == c && b == c) {
        console.log('Triangulo Equilatero');
    } else if (a === b || b === c || c === a) {
        console.log('Triangulo Isoseles');
    } else {
        console.log('Triangulo Escaleno');
    };
};
validaTriangulo(5, 5, 5);
validaTriangulo(5, 5, 4);
validaTriangulo(5, 4, 3);
//Exercio 3
function exponecial(x, y) {
    console.log(`O coeficiente: ${x} elevado ao expoente ${y} é igual a: ${Math.pow(x, y)}`);
};
exponecial(3, 2);
//Exercio 4
function modulo(x, y) {
    console.log(`O módulo da divisão de ${x} por ${y} é igual a: ${x % y}`);
};
modulo(3, 2);
//Exercio 5
function arredonda(x) {
    console.log(x.toFixed(2));
};
arredonda(0.30000000000000004);
//Exercio 6 (Não sei se está certo)
let montante = 0;

function simples(capitalInicial, juros, tempo) {
    console.log(montante = capitalInicial * juros * tempo);
};

function composto(capitalInicial, juros, tempo) {
    console.log(montante = capitalInicial * (Math.pow((1 + juros), tempo)));
};
simples(3, 2, 1);
composto(3, 2, 1);
//Exercio 7
let delta = 0;
const resultado = [];

function baskara(ax2, bx, c) {
    delta = (Math.pow(bx, 2)) - (4 * ax2 * c);
    if (delta < 0) {
        console.log('Delta Negativo');
    } else {
        console.log('Delta =', delta);
        let x1 = ((-bx) - (Math.sqrt(delta))) / (2 * ax2);
        let x2 = ((-bx) + (Math.sqrt(delta))) / (2 * ax2);
        resultado.push(x1, x2);
        console.log(resultado);
    };
};
baskara(1, 3, -4);
//Exercio 8
let jogos = [10, 20, 20, 8, 25, 3, 0, 30, 1];
let resultado = [];
let record = 0;
let pior = 0;

function forech([]) {
    for (let i = 0; i < jogos.length; i++) {
        if (jogos[i] < jogos[i + 1]) {
            record = record + 1;
            pior = i + 1;
        };
    };
    resultado.push(record, pior);
    console.log(resultado);
};
forech(jogos);
//Exercio 9

//Exercio 10
//Exercio 11
//Exercio 12
//Exercio 13
//Exercio 14
//Exercio 15
//Exercio 16
//Exercio 17
//Exercio 18
//Exercio 19
//Exercio 20
//Exercio 21
//Exercio 22
//Exercio 23
//Exercio 24
//Exercio 25
//Exercio 26
//Exercio 27
//Exercio 28
//Exercio 29
//Exercio 30
//Exercio 31
//Exercio 32
//Exercio 33
//Exercio 34
//Exercio 35
//Exercio 36
//Exercio 37
//Exercio 38
//Exercio 39
//Exercio 40