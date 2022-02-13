const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
};

function exec() {
    const valor = 'Local';
    minhaFuncao();
};

exec();

//-------------------------------------------------------------------------------------------------------------------

/*Clousere é o scoopo criado quando uma função é declarada, este scoopo permite afunção acessar e manipular variáveis 
externas a função*/

const x = 'Global';

function fora() {
    const x = 'Local';

    function dentro() {
        return x;
    };
    return dentro();
};

const minhaFuncao = fora();
console.log(minhaFuncao);