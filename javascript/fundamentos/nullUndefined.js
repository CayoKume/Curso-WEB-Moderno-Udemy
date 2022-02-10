const a = { name: 'teste' };
console.log(a);
const b = a;
b.name = 'OPA';
console.log(a, b);
/*ao armazenar um objeto em uma variavel o que fica armazenado é um endereço de memória onde o objeto fica armazenado
então quando igualamos a à b, b tmb recebe este endereço. por isso podemos alterar as propiedades do objeto pela
variável a e pela variável b*/

let c = 3;
let d = c;
d++;
console.log(c, d);
/*ao armazenar um valor numérico ou string ou booleano em uma variável o que fica armazenado é o própio valor, então
quando igualamos a à b, b recebe uma cópia do valor armazenado em a, por isso não podemos alterar as propiedades
de ambos os valores por uma única variável, como visto no exemplo anterior*/

//começando a enteder null e undefined
let valor; //variável declarada mas não foi atribuida valor nenhum, retorna undefined
console.log(valor);
//console.log(valor2); isto é um erro. a variável nem mesmo foi declarada console retorna is not defined

valor = null; //ausencia de valor
console.log(valor);

//console.log(valor.toString()); isso retorna erro, pois não podemos aplicar função a null

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evite atribuir undefined
console.log(!!produto.preco); //professor fez isso para demonstrar que undefined é considerado como false
console.log(produto);
delete produto.preco;
console.log(produto);

produto.preco = null; //sem preco
console.log(!!produto.preco); //professor fez isso para mostrar que null tmb é considerado false
console.log(produto);

/*Conclusão: sabemos que ao armazenar um objeto em uma variável, o que fica armazenado mesmo é o endereço de memória
no qual se enconttra o objeto e não o objeto em si, portanto caso eu precise que aquela variável não mais aponte 
para o endereço de memória do objeto eu devo setar ela como null.
Evite a qualquer custo atribuir o valor undefined para as variáveis, deixe este ser uma valor que o própio sistema
atribui, quando não encherga o valor da variável.*/