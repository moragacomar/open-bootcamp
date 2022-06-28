/*
 * Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
 * - Tu nombre (string)
 * - Tu edad (number)
 * - ¿Eres desarrollador? (boolean)
 * - Tu fecha de nacimiento (Date)
 * - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/
const fecha = new Date(2022, 04, 29);

const lista = ["Juan", 36, true, fecha, {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    fecha: "6 de abril de 1943",
    url: "https://es.wikipedia.org/wiki/El_principito"
}]
console.log(lista[3]);
lista[3]