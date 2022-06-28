/*
 * Crea los siguientes archivos JS:
 * - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
 * - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
 * - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
 * 3628800
*/

const factorialFor = (numero) => {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(factorialFor(10));

const factorialWhile = (numero) => {
    let resultado = 1
    while (numero > 1) {
        resultado *= numero;
        numero--;
    }
    return resultado;
}
console.log(factorialWhile(10));

const factorialBreak = (numero) => {
    let resultado = 1;
    while (true) {
        resultado *= numero;
        numero--;
        if (numero < 1) {
            break
        }
    }
    return resultado;
}
console.log(factorialBreak(10));


const factorialRecursivo = (numero) => {
    if (numero == 0) {
        return 1;
    } else {
        return factorialRecursivo(numero - 1) * numero;
    }
}
console.log(factorialRecursivo(10));