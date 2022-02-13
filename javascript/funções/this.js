/* on Google Chrome
function f1() {console.log(this === window)};
undefined
f1();
VM111:1 true
undefined
document.getElementsByTagName('body')[0].onclick = f1;
ƒ f1() {console.log(this === window)}
console.log (this === window);
VM123:1 true
undefined
function f2() {console.log(this === document);};
undefined
f2();
VM127:1 false
undefined
document.getElementsByTagName('body')[0].onclick = f2;
ƒ f2() {console.log(this === document);}
VM127:1 false
const body = document.getElementsByTagName('body')[0].onclick = f2;
undefined
function f2() {console.log(this === body);};
undefined
VM127:1 false
const f3 = () => console.log(this === window);
undefined
f3();
VM147:1 true
undefined
document.getElementsByTagName('body')[0].onclick = f3;
() => console.log(this === window)
f3();
VM147:1 true
undefined
*/

//---------------------------------------------------------------------------------------------------------------------

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
};
pessoa.falar();

const falar = pessoa.falar;
falar();

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

//--------------------------------------------------------------------------------------------------------------------

function pessoa2() {
    this.idade = 0;

    const self = this;
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    } /*.bind(this)*/ , 1000)
};

new pessoa2;