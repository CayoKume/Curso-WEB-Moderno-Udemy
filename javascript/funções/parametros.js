function area(altura, largura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
    } else {
        return area;
    };
};

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 17, 22, 44));
console.log(area(5, 5));

//----------------------------------------------------------------------------------------------------------------------

function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    };
    return soma;
};

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));

console.log(soma(1.1, 2.2, 'Teste'));
console.log(soma('a', 'b', 'c'));

//---------------------------------------------------------------------------------------------------------------------

function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
};

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? a : c;
};

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

function soma3(a = 1, b = 1, c = 3) {
    return a + b + c;
};

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));