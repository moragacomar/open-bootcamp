/*
 * Crea un archivo JS que contenga las siguientes líneas
 * - Una cadena de texto con tu Nombre
 * - Otra cadena de texto con tu Apellido
 * - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
 * - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
 * - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
 * - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
 * - Una variable que contenga la primera letra del Nombre
 * - Otra variable que contenga la última letra del Apellido
 * - Una cadena de texto que elimine los espacios de la variable "estudiante"
 * - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/
const nombre = "Juan Manuel";
const apellido = "Moraga";
const estudiante = `${nombre} ${apellido}`
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const cantidadDeLetras = estudiante.length;
const primeraLetraNombre = nombre[0];
const ultimaLetraApellido = apellido[apellido.length - 1];
// const sinEspacios = estudiante.split(" ").join("")
const sinEspacios = estudiante.replace(/ /g, "");
const nombreDentroDeEstudiante = estudiante.includes(nombre);

console.log(nombre, apellido, estudiante, estudianteMayus, estudianteMinus, cantidadDeLetras, primeraLetraNombre, ultimaLetraApellido, sinEspacios, nombreDentroDeEstudiante);
