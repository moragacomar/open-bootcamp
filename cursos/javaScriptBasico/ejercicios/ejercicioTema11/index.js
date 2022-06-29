/*
 * Crea un nuevo fichero JS que contenga las siguientes líneas
 * - Una clase llamada "Estudiante" que tenga:
 * - Una variable llamada nombre
 * - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
 * - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
 * - Crea una nueva instancia de "Estudiante"
 * - Haz la llamada al método obtenDatos
 */

class Estudiante {
    #nombre;
    #asignaturas;
    constructor(nombre = "", asignaturas = []) {
        this.#nombre = nombre;
        this.#asignaturas = asignaturas;
    }
    obtenDatos = () => {
        return { nombre: this.#nombre, asignaturas: this.#asignaturas };
    }
}

const alumno1 = new Estudiante("Juan", ["Javascript", "HTML", "CSS"]);
console.log(alumno1.obtenDatos());

const alumno2 = new Estudiante();
console.log(alumno2.obtenDatos());
