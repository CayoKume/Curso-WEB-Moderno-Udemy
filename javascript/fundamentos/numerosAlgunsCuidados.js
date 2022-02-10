let infinity = 7 / 0; //divisão por zero não dá erro
console.log(infinity);

/*quando a operação faz sentido como divisão, multiplicação e subtração é pegado o valor da string 
e efetuado o cálculo somente com adição que ocorre a concatenação ao invez da operação original.*/
let string = "10" / 5;
console.log(string);
string = ("show" * 2);
console.log(string);

let decimal = (0.1 + 0.7);
console.log(decimal); //arredondamento do javascript não dá numero exato por causa da IEEE

//console.log((10).tostring()) não dá pra converter para string o literal em sí.
console.log((10.1235467).toFixed(2))