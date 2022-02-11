console.log(Math.ceil(6.1)); //ceil para arredondar para cima floor para arredondar para baixo

const obj1 = {};
obj1.nome = 'Bola';
//obj1['nome'] = 'Bola2';
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Caramba!..');
    }
};

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
const obj4 = new Obj('Sofá');
console.log(obj2.nome);
console.log(obj3.nome);
console.log(obj4.nome);
obj3.exec();