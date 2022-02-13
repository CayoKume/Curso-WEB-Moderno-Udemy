function carro(velocidadeMaxima = 200, delta = 5) {
    let VelocidadeAtual = 0;

    this.acelerar = function() {
        if (VelocidadeAtual + delta <= velocidadeMaxima) {
            VelocidadeAtual += delta;
        } else {
            VelocidadeAtual = velocidadeMaxima;
        };
    };

    this.getVelocidadeAtual = function() {
        return VelocidadeAtual;
    };
};



const uno = new carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof carro);
console.log(typeof ferrari);