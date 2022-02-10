const prod1 = {};
prod1.nome = 'Celular Samsung';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40;
console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
};
console.log(prod2);

const prod3 = {
    nome: 'Bola Azul',
    preco: 39.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2,
        }
    }
};
console.log(prod3);

//comparando com um Json
'{"nome":,"Camisa Polo","preco":79.0}'