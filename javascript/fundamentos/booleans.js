let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

/*variável recebe valor 1 do tipo number que não é true, mas se comporta como true em contexto booleano, ou seja
se eu der console.log(isAtivo) o console imprime valor do tipo numerico 1. porém caso necessite eu tmb posso efetuar
uma comparação booleana com esse valor e nesse caso ele se comporta como true*/
isAtivo = 1;
console.log(!!isAtivo); //inverte valor invertido false = true

console.log('os que se comportam como true..');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!(isAtivo = 0)); //retorna falso mas porque pega o valor 0 e zero é tratado como false
let dividendo = 4;
console.log(!!(dividendo % 2));

console.log('os que se comportam como false..');
console.log(!!0);
console.log(!!''); //string nula
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar..');
console.log(!!("" || null || 0 || ''));
console.log(!!("" || null || 0 || 'oi')); //retorna o primeiro valor verdadeiro da expressão

let nome = "";
console.log(nome || 'Desconhecido');

nome = 'Lucas';
console.log(nome || 'Desconhecido');