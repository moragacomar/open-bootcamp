/*
 * Crea un nuevo proyecto de Node
 * - Crea un fichero index.html (utiliza el comando "!")
 * - Crea un fichero index.js
 * - Integra el fichero index.js en el html
 * - En el fichero index.js:
 */

/* Crea una variable con tu nombre */
const nombre = "Juan";

/* Crea una variable con tu apellido */
const apellido = "Moraga";

/* Crea un objeto con tu nombre y tu apellido */
const misDatos = {
    nombre: nombre,
    apellido: apellido
}

/* Almacena el objeto anterior en la SessionStorage */
// sessionStorage.setItem('nombre', nombre);
// sessionStorage.setItem('apellido', apellido);
// sessionStorage.setItem('objeto', JSON.stringify(misDatos));

/* Almacena el objeto anterior en la LocalStorage */
// localStorage.setItem('nombre', nombre);
// localStorage.setItem('apellido', apellido);
// localStorage.setItem('objeto', JSON.stringify(misDatos));

/* Crea una cookie que caduque en 2 minutos con los datos del objeto anterior */
const dosMinutos = new Date();
dosMinutos.setTime(dosMinutos.getTime() + (2 * 60 * 1000));
//document.cookie = `username=${JSON.stringify(misDatos)}; expires=${dosMinutos.toGMTString()}`;

/* Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies */
console.log("Completado...");

/* Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo */
console.log("Completado...");

/* Observa cómo la SessionStorage está vacía */
console.log("Completado...");

/* Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador */
console.log("Completado...");

/* Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado */
console.log("Completado...");
