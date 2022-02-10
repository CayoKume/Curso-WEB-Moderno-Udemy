const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); //retorna vazio
console.log(escola.charCodeAt(3)); //retorna valor do caracter na tabela ASCI
console.log(escola.indexOf('3')); //retorna o index na palavra do dígito, caso o mesmo esteja na palavra
console.log(escola.substring(1));
console.log(escola.substring(0, 3)); //retorna do index 0 ao index 2
console.log('Escola: '.concat(escola).concat("!"));
console.log('Escola: ' + escola + "!");
console.log(escola.replace(3, 'e'));
console.log('Ana,Maria,Pedro'.split(',')); //retorna array de objetos