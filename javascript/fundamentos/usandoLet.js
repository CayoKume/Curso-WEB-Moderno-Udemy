let numero = 1; {
    let numero = 2;
    console.log('dentro: ', numero);
}
console.log('fora: ', numero);
/*let tem 3 scoopos possíveis, scoopo global, visivel em toda a sua aplicação e na variável global 
window(browser), scoopo de função, somente visível dentro da função, e scoopo de bloco visivel somente dentro
de um bloco especifico.*/
let numero = 1; {
    let numero2 = 2;
    console.log('dentro: ', numero);
}
console.log('fora: ', numero);
/* o let da prioridade para a variavél dentro do bloco primeiro, ou seja o código irá verificar se a váriavel existe
dentro do scoopo menor, caso não exista ele parte para os demais scoopos superiores.*/