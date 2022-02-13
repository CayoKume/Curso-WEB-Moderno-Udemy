let dobro = function(a) {
    return 2 * a;
};

dobro = (a) => {
    return 2 * a;
};

dobro = a => 2 * a;
console.log(dobro(Math.PI));

let ola = function() {
    return 'OLÁ';
};

ola = () => 'Olá';
ola = _ => 'Olá';
console.log(ola());

//------------------------------------------------------------------------------------------------------------------------

function pessoa() {
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000)
};

new pessoa;

//-------------------------------------------------------------------------------------------------------------------

let comparaComThis = function(parametro) {
    console.log(this === parametro);
};
comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = parametro => console.log(this === parametro);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);