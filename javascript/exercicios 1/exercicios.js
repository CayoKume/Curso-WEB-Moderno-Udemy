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
function notas(min, max) {
    const valor = Math.ceil(Math.random() * (max - min) + min);
    if (valor < 38) {
        console.log(`A nota do aluno foi ${valor}. Aluno REPROVADO`);
    } else if ((valor % 5) === 2) {
        let arredonda = valor + 3;
        console.log(`A nota do aluno foi ${valor}. Arredondado para ${arredonda}`);
    } else if ((valor % 5) === 3) {
        let arredonda = valor + 2;
        console.log(`A nota do aluno foi ${valor}. Arredondado para ${arredonda}`);
    } else if ((valor % 5) === 4) {
        let arredonda = valor + 1;
        console.log(`A nota do aluno foi ${valor}. Arredondado para ${arredonda}`);
    } else {
        console.log(`A nota do aluno foi ${valor}. Aluno Aprovado`);
    };
};
notas(0, 100);
//Exercio 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function inteiro([]) {
    for (let i = 0; i < numeros.length; i++) {
        if ((numeros[i] % 3) === 0) {
            console.log(`numero divisivél por 3 = ${numeros[i]}`);
        }
    };
};
inteiro(numeros);
//Exercio 11
let anos = [4, 8, 12, 100, 200, 300, 400, 800, 1200, 2016, 2020, 2021, 2022, 2001];

function bisexto([]) {
    for (let i = 0; i < anos.length; i++) {
        if (((anos[i] % 400) === 0)) {
            console.log(`O ano: ${anos[i]} é Bisexto`);
        } else if ((anos[i] % 100) === 0) {
            console.log(`O ano: ${anos[i]} não é Bisexto`);
        } else if ((anos[i] % 4) === 0) {
            console.log(`O ano: ${anos[i]} é Bisexto`);
        } else {
            console.log(`O ano: ${anos[i]} não é Bisexto`);
        }
    };
};
bisexto(anos);
//Exercio 12 (Colei)
function fatorial(n) {
    let numeros = [];
    for (let i = 1; i <= n; i++) {
        numeros.push(i);
    };
    let resultado = 1;
    for (let i = 0; i < numeros.length; i++) {
        resultado *= numeros[i];
    };
    console.log(resultado);
};
fatorial(5);
//Exercio 13
function semana(dia) {
    switch (dia) {
        case 1:
        case 8:
        case 15:
        case 22:
        case 29:
            console.log('domingo');
            break;
        case 2:
        case 9:
        case 16:
        case 23:
        case 30:
            console.log('segunda');
            break;
        case 3:
        case 10:
        case 17:
        case 24:
        case 31:
            console.log('terça');
            break;
        case 4:
        case 11:
        case 18:
        case 25:
            console.log('quarta');
            break;
        case 5:
        case 12:
        case 19:
        case 26:
            console.log('quinta');
            break;
        case 6:
        case 13:
        case 20:
        case 27:
            console.log('sexta');
            break;
        case 7:
        case 14:
        case 21:
        case 28:
            console.log('sábado');
            break;
        default:
            break;
    };
};
semana(5);
semana(15);
semana(20);
semana(1);
semana(7);
//Exercio 14
function fruta(string) {
    let maiuscula = string.toUpperCase();
    switch (maiuscula) {
        case 'MAÇA':
            console.log("Não vendemos esta fruta aqui");
            break;
        case 'KIWI':
            console.log("Estamos com escassez de kiwis");
            break;
        case 'MELANCIA':
            console.log("Aqui está, são 3 reais o quilo");
            break;
        default:
            console.log("Digite uma fruta valida");
            break;
    };
};
fruta("Maça");
fruta('Melancia');
fruta('Kiwi');
fruta('maça');
fruta('melancia');
fruta('Abobrinha');
//Exercio 15
function carro(string) {
    let minuscula = string.toLowerCase();
    switch (minuscula) {
        case 'hatch':
            console.log("Compra efetuada com sucesso");
            break;
        case 'sedans':
            console.log("Tem certeza que não prefere este modelo?");
            break;
        case 'motocicletas':
            console.log("Tem certeza que não prefere este modelo?");
            break;
        case 'caminhonetes':
            console.log("Tem certeza que não prefere este modelo?");
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
            break;
    };
};
carro("hatch");
carro('sedans');
carro('MOTOCICLETAS');
carro('caMinhOnetEs');
carro('bicilcetas');
//Exercio 16
function calculadora(a, operacao = "Digite uma Operação (soma, subtracao, multiplicacao, divisao)", b) {
    minuscula = operacao.toLowerCase();
    switch (minuscula) {
        case 'multiplicacao':
        case '*':
            console.log(a * b);
            break;
        case 'divisao':
        case '/':
            console.log(a / b);
            break;
        case 'subtracao':
        case '-':
            console.log(a - b);
            break;
        case 'soma':
        case '+':
            console.log(a + b);
            break;
        default:
            console.log("Operação Invalida");
            break;
    };
};
calculadora(2, 'soma', 2);
calculadora(2, 'subtracao', 2);
calculadora(2, 'divisao', 2);
calculadora(2, 'multiplicacao', 2);
calculadora(2, '+', 2);
calculadora(2, '-', 2);
calculadora(2, '/', 2);
calculadora(2, '*', 2);
calculadora(2, '%', 2);
//Exercio 17 adicionar aumento.ceil e lowercase()
function plano(plano, salario) {
    minuscula = plano.toLowerCase();
    let aumento = 0;
    switch (minuscula) {
        case 'a':
            console.log(Math.floor(aumento = salario * 1.1));
            break;
        case 'b':
            console.log(Math.floor(aumento = salario * 1.15));
            break;
        case 'c':
            console.log(Math.floor(aumento = salario * 1.2));
            break;
        default:
            console.log('Plano Iválido');
            break;
    };
};
plano('a', 100);
plano('b', 100);
plano('c', 100);
plano('d', 100);
//Exercio 18
function extenso(n) {
    switch (n) {
        case 1:
            console.log('Um');
            break;
        case 2:
            console.log('Dois');
            break;
        case 3:
            console.log('Três');
            break;
        case 4:
            console.log('Quatro');
            break;
        case 5:
            console.log('Cinco');
            break;
        case 6:
            console.log('Seis');
            break;
        case 7:
            console.log('Sete');
            break;
        case 8:
            console.log('Oito');
            break;
        case 9:
            console.log('Nove');
            break;
        case 10:
            console.log('Dez');
            break;
        default:
            console.log('Número fora do intervalo');
            break;
    };
};
extenso(1);
extenso(2);
extenso(3);
extenso(4);
extenso(5);
extenso(6);
extenso(7);
extenso(8);
extenso(9);
extenso(10);
extenso(11)
    //Exercio 19
function cardapio(codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log(`Cachorro Quente R$ 3,00 * ${quantidade}: Total = ${3 * quantidade}`);
            break;
        case 200:
            console.log(`Hambúrguer Simples R$ 4,00 * ${quantidade}: Total = ${4 * quantidade}`);
            break;
        case 300:
            console.log(`Cheeseburguer R$ 5,50 * ${quantidade}: Total = ${5.5 * quantidade}`);
            break;
        case 400:
            console.log(`Bauru R$ 7,50 * ${quantidade}: Total = ${7.5 * quantidade}`);
            break;
        case 500:
            console.log(`Refrigerante  R$ 3,50 * ${quantidade}: Total = ${3.5 * quantidade}`);
            break;
        case 600:
            console.log(`Suco R$ 2,80 * ${quantidade}: Total = ${2.8 * quantidade}`);
            break;
        default:
            console.log('Produto Inexistente');
            break;
    };
};
cardapio(100, 4);
cardapio(200, 4);
cardapio(300, 4);
cardapio(400, 4);
cardapio(500, 4);
cardapio(600, 4);
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
let valores = [-1, -5, -10, 0, 5, 80, 4, -9, 7, 10, 7];
let estaoNoIntervalo = 0;
let estaoForaDoIntervalo = 0;

function intervalo([]) {
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= 10 && valores[i] <= 20) {
            estaoNoIntervalo++;
        } else {
            estaoForaDoIntervalo++;
        };
    };
    console.log(`Quantidade de números que estão no intervalo: ${estaoNoIntervalo}, Quantidade de números que não estão no intervalo: ${estaoForaDoIntervalo}`);
};
intervalo(valores);
//Exercio 30
let valores = [-1, -5, -10, 0, 5, 80, 4, -9, 7, 10, 7];
let compara = 0;

function maiorValor([]) {
    for (let i = 0; i < valores.length; i++) {
        if (compara === 0) {
            compara = valores[i]
        } else if (valores[i] > compara) {
            compara = valores[i]
        };
    };
    console.log(compara);
};
maiorValor(valores);
//Exercio 31
let valores = [-1, -5, -10, 0, 5, 80, 4, -9, 7, 10, 7];
let contador = 0;

function negativos([]) {
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0) {
            contador++
        };
    };
    console.log(contador);
};
negativos(valores);
//Exercio 32
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = 0;

function media([]) {
    for (let i = 0; i < valores.length; i++) {
        resultado += valores[i];
    };
    console.log(resultado / valores.length);
};
media(valores);
//Exercio 33
let vetorInteiro = [1, 2, 3, 4];
let vetorString = ['Cayo', 'Camila', 'Pedro', 'Olivia'];
let vetorDouble = [1.1, 2.2, 3.3, 4.4];

function concat([], [], []) {
    let vetorResultado = vetorInteiro.concat(vetorString, vetorDouble);
    console.log(vetorResultado);
}
concat(vetorInteiro, vetorString, vetorDouble);
//Exercio 34

//Exercio 35
let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function empurra([], []) {
    for (let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i]);
    };
    console.log(vetorPilha);
};
empurra(vetorPilha, vetorAdiciona);
//Exercio 36
let decimal = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.1];
let inteiro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function funcao1([], []) {
    for (let i = 0; i < decimal.length; i++) {
        console.log(`${inteiro[i]} + ${decimal[i]}`);
        let soma = decimal[i] + inteiro[i];
        console.log(soma);
    };
};

function funcao2([], []) {
    for (let i = 0; i < inteiro.length; i++) {
        if (inteiro[i] > 5 && decimal[i] > 5) {
            console.log(`${inteiro[i]} + ${decimal[i]}`);
            let soma = inteiro[i] + decimal[i];
            console.log(soma);
        };
    };
};
funcao1(decimal, inteiro);
funcao2(decimal, inteiro);
//Exercio 37
function pa(a1, n, r) {
    for (let i = 0; i < n; i++) {
        a1 = a1 + r
    };
    console.log(a1);
};

function pg(a1, n, r) {
    for (let i = 0; i < n - 1; i++) {
        console.log(a1 = Math.pow(a1, r));
    };
};
pa(2, 8, 4);
pg(3, 2, 3);
//Exercio 38
function impares(max = 100, min = 0) {
    let dividendo = max - min;
    if (max < min) {
        dividendo = min - max;
    };
    for (let i = 0; i <= dividendo; i++) {
        if (!!(i % 2)) {
            console.log(`${i} é impar`);
        } else {};
    };
};
impares(0, 100);
impares(100, 0);
//Exercio 39

//Exercio 40
let notas = [0, 4.9, 5, 6.9, 7, 8.9, 9, 10];

function conceitos([]) {
    for (let index = 0; index < notas.length; index++) {
        if (notas[index] === 0 || notas[index] <= 4.9) {
            console.log(notas[index]);
            console.log('D');
        } else if (notas[index] === 5 || notas[index] <= 6.9) {
            console.log(notas[index]);
            console.log('C');
        } else if (notas[index] === 7 || notas[index] <= 8.9) {
            console.log(notas[index]);
            console.log('B');
        } else if (notas[index] === 9 || notas[index] <= 10) {
            console.log(notas[index]);
            console.log('A');
        } else {
            console.log(notas[index]);
            console.log('Nota Inválida')
        };
    };
};
conceitos(notas);