//Função em JS é first-class object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() {};

//Armazenar em uma variável
const fun2 = function() {};

//Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3));

//Armazenar em um atributo de objeto
const obj = {};
obj.falar = function() {
    return 'OPA'
};
console.log(obj.falar());

//Passar função como parâmetro
function run(fun) {
    fun();
};
run(function() {
    console.log('Executando...');
});

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    };
};

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);

//---------------------------------------------------------------------------------------------------------------------

console.log(soma2(3, 4));
//function declaration
function soma2(x, y) {
    return x + y;
};

//fucntion expression
const sub = function(x, y) {
    return x - y;
};
console.log(sub(3, 4));

//named function expression
const mult = function mult(x, y) {
    return x * y;
};
console.log(mult(3, 4));

//IIFE - Immediately Invoked Function Expressions
(function() {
    console.log('Será executado na hora!!');
    console.log('Foge do escopo mais abrangente!!');
})();