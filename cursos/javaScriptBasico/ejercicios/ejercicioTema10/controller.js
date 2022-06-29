export const suma = (a, b) => a + b;

export const multiplica = (a, b) => a * b;

export const imprimir = texto => console.log(texto);

export const factorial = num => {
    let res = 1;
    for (num; num > 1; num--) { res *= num; }
    return res
}