/*
 * Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
 * - Un nuevo Set con los nombres de tu familia
 * - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
 * - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/

const imprimir = text => console.log(text);

const miFamiliaArray = ["Juan", "Anyelen", "Norma", "Belen", "Nicolas", "Facundo", "Amadeo"];
imprimir(miFamiliaArray);

const miFamiliaSet = new Set(miFamiliaArray);
imprimir(miFamiliaSet);

miFamiliaSet.add("Juan");
imprimir(miFamiliaSet);

miFamiliaSet.add("JavaScript");
imprimir(miFamiliaSet);
