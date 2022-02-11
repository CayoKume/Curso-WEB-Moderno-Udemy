//outros operadores unários são NOT(!) e a inversão de positivo para negativo(-)
let num1 = 1;
let num2 = 2;

num1++; //operação unaria de incremento pos fixada
console.log(num1);
--num1;
console.log(num1); //operação unaria de incremento pré fixada

console.log(++num1 === num2--); //incremento acontece antes da comparação e tem prioridade então 1 vale 2 e depois 2 vale 1
console.log(num1 === num2);