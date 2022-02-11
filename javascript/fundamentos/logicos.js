/**
 * tabelas verdade
 * NOT                  OR
 * p  | ~p              p | q | p^q
 * V  |  F              V | V |  V
 * F  |  V              V | F |  V
 *                      F | V |  F
 *                      F | F |  F
 * 
 * AND                  XOR
 * p  |  q  | pVp       p | q | p+q
 * V  |  V  |  V        V | V |  F
 * V  |  F  |  V        V | F |  V
 * F  |  V  |  V        F | V |  V
 * F  |  F  |  F        F | F |  F
 */

function Operadores(parametro1, parametro2) {
    const operacaoOr = parametro1 || parametro2;
    const operacaoAnd = parametro1 && parametro2;
    const operacaoXor = parametro1 != parametro2;
    const operacaoNot = !operacaoOr;

    return { operacaoOr, operacaoAnd, operacaoXor, operacaoNot }
    /*ES2015 surgiu o contexto de objeto implicitamente declarado isso significa que no exemplo acima o return já
    entende que é necessário criar uma variavél para armazenar o valor da constante, e para que o código não fique
    redundante, somente é preciso escrever a variavél, e o valor da constante será aplicado a ela.
    o código acima é o mesmo que:
    return { 
        operacaoOr: operacaoOr, 
        operacaoAnd: operacaoAnd, 
        operacaoXor: operacaoXor, 
        operacaoNot: 
        operacaoNot
    } */
}

console.log(Operadores(true, true));
console.log(Operadores(true, false));
console.log(Operadores(false, true));
console.log(Operadores(false, false));