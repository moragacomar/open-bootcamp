/*
 * Crea un nuevo proyecto de Node
 * - Instala la dependencia Winston
 * - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
 * - Registra el error en un archivo a través de un try...catch
 */

const logger = require("./logger")

const funcionConErrorPersonalizado = numero => {
    if (typeof numero === "number") {
        return numero * 2;
    }
    throw "Tiene que ser un numero";
}
try {
    logger.error(funcionConErrorPersonalizado("numero"));
} catch (error) {
    logger.error(`ERROR: ${error}`);
}