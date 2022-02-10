{
    {
        {
            {
                var sera = 'será?????';
                console.log(sera);
            }
        }
    }
}
console.log(sera);

function teste() {
    var local = 123;
    console.log(local);
}
teste();
//console.log(local); isso dá erro, porque você  não pode acessar variável criada dentro da função

/*var só tem 2 scoopos possíveis, ou ela tem scoopo global, visivel em toda a sua aplicação e na variável global 
window(browser), ou ela tem o scoopo de função, somente visível dentro da função.*/
var numero = 1; {
    var numero = 2;
    console.log('dentro: ', numero);
}
console.log('fora: ', numero);