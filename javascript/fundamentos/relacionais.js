//como em javascript não existe tipagem forte dos valores alguns erros podem existir, como tal:
console.log('01 -', '1' == 1); //== compara somente o valor e não o tipo do valor, no caso uma string está sendo equivalete a um number
console.log('02 -', '1' === 1); //== compara o tipo e não o valor, no caso uma string está não sendo equivalete a um number
console.log('03 -', '3' != 3);
console.log('04 -', '3' !== 3);
console.log('05 -', 3 < 2);
console.log('06 -', 3 > 2);
console.log('07 -', 3 <= 2);
console.log('08 -', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09 -', d1 === d2); //nesse caso a operação estrita está comparando endereços de memória tanto d1 como d2 estão armazenando endereços diferentes
console.log('10 -', d1 == d2); //nesse caso a operação está comparando endereços de memória tanto d1 como d2 estão armazenando endereços diferentes
console.log('11 -', d1.getTime() === d2.getTime()); //nesse caso a operação está sendo comparada ao valor
console.log('12 -', undefined == null);
console.log('13 -', undefined === null);

/*concluindo: use sempre estritamente igual (===), que compara tanto tipo quanto valor, evitando assim erros de 
comparação, como por exemplo receber um valor falso ao se esperar um valor true*/