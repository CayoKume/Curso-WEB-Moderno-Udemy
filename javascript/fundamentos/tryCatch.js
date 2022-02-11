function tartarErroELancar(erro) {
    //throw new Error('deu erro aqui!!');
    //throw 10;
    //throw true;
    //throw 'mensagem';
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
};

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUppercase() + '!!!!!');
    } catch (e) {
        tartarErroELancar(e);
    } finally {
        console.log('final');
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj);