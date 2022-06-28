/*
 * Crea un archivo JS que contenga las siguientes líneas
 * - Una función sin parámetros que devuelva siempre "true"
 * - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
 * - Una función generadora de índices pares automáticos
 */

const imprimir = text => console.log(text);


const funcionSinParemetros = () => true;

imprimir(funcionSinParemetros());


const funcionAsincrona = async () => {
    setTimeout(() => { console.log(`Hola soy una promesa`) }, 5000)
}

funcionAsincrona();


const indicesPares = ultimoNumero => {
    const indices = [];
    for (let i = 2; i <= ultimoNumero; i = i + 2) {
        indices.push(i)
    }
    return indices;
}

imprimir(indicesPares(23));