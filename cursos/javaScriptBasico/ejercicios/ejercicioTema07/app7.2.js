/*
 * Crea un archivo llamado objetos.js que contenga las siguientes líneas
 * - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
 * - Una variable que obtenga tu edad a partir del objeto anterior
 * - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales
 *   de tus dos mejores amig@s
 * - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */

const imprimir = text => console.log(text);

const datosPersonales = {
    nombre: "Juan",
    apellido: "Moraga",
    edad: 36,
    altura: 172,
    eresDesarrollador: true
};
imprimir(datosPersonales);

const miEdad = datosPersonales.edad;
imprimir(miEdad);

const datosPersonalesAmigos = [datosPersonales,
    { nombre: "Rajesh Ramayan", apellido: "Koothrappali", edad: 40, altura: 178, eresDesarrollador: false },
    { nombre: "Sheldon Lee", apellido: "Cooper", edad: 43, altura: 186, eresDesarrollador: false }];
imprimir(datosPersonalesAmigos);

const datosPersonalesAmigosOrdenados = datosPersonalesAmigos;
datosPersonalesAmigosOrdenados.sort((a, b) => b.edad - a.edad);


imprimir(datosPersonalesAmigosOrdenados);
