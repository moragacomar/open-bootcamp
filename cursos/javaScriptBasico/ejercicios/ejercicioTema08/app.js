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

function* indicesPares(indice = 2) {
    while (indice <= 10) {
        yield indice;
        indice = indice + 2;
    }
}

const indice = indicesPares();

imprimir(indice.next().value);
imprimir(indice.next().value);
