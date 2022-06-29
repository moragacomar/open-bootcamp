/*
 * Crea un nuevo fichero JS que contenga las siguientes líneas
 * - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la
 *   secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
 * - Ejecuta la depuración de VSCode para visualizar la ejecución de la función
 */

function fibonacci(num) {
    const array = [];
    array[0] = 1;
    array[1] = 1;
    for (let i = 2; i < num; i++) {
        array[i] = array[i - 2] + array[i - 1];
    }
    return array;
}

console.log(fibonacci(6));

/* Se uso la depuracion de VSCode para comprobar su funcionamiento */