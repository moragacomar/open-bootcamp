/*
 * Crea un archivo JS que contenga las siguientes líneas
 * - Una variable que contenga tu altura en centímetros (entero)
 * - Una variable que contenga tu altura en metros (número de coma flotante)
 * - Una variable que contenga tu peso en kilogramos (número de coma flotante)
 * - Una variable que contenga tu altura en metros redondeada hacia arriba
 * - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
 * - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es
 *   igual al máximo valor que se puede obtener en Javascript
 */

const imprimir = text => console.log(text);


const alturaCms = 172;
const alturaMts = 1.72;
const pesoKgs = 65.2;
const alturaRedondeadaHaciaArriba = Math.ceil(alturaMts)
const pesoRedondeadoHaciaAbajo = Math.floor(pesoKgs)
const valorMaximo = Number.MAX_VALUE;
const esIgual = valorMaximo === (valorMaximo + 1)

imprimir(alturaCms);
imprimir(alturaMts);
imprimir(pesoKgs);
imprimir(alturaRedondeadaHaciaArriba);
imprimir(pesoRedondeadoHaciaAbajo);
imprimir(valorMaximo);
imprimir(esIgual);