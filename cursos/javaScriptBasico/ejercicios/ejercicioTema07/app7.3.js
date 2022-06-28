/*
 * Crea un archivo llamado fechas.js que contenga las siguientes líneas
 * - La fecha de hoy
 * - La fecha de tu nacimiento
 * - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
 * - Una variable que contenga el día de tu nacimiento
 * - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
 * - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
 */

const imprimir = text => console.log(text);

const fechaDeHoy = new Date();
imprimir(fechaDeHoy);

const fechaDeMiNacimiento = new Date('1986,5,29');
imprimir(fechaDeMiNacimiento);

const esMasTarde = fechaDeHoy > fechaDeMiNacimiento;
imprimir(esMasTarde);

const diaCumple = fechaDeMiNacimiento.getDate();
imprimir(diaCumple)

const mesCumple = fechaDeMiNacimiento.getMonth();
imprimir(mesCumple)

const anioCumple = fechaDeMiNacimiento.getFullYear();
imprimir(anioCumple)