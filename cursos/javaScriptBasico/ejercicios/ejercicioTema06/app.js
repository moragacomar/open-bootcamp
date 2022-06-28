/*
 * Crea un archivo JS que contenga las siguientes líneas
 * - Una variable que contenga la lista de la compra (mínimo 5 elementos)
 * - Modifica la lista de la compra y añádele "Aceite de Girasol"
 * - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
 * - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
 * - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
 * - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
 * - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
 * - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
 * - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
 */



const imprimir = text => console.log(text);

const misCompras = ["Leche", "Azucar", "Té", "Yerba", "Vasos"];
imprimir(misCompras);
misCompras.push("Aceite de Girasol");
imprimir(misCompras);
misCompras.pop();
imprimir(misCompras);

const misPeliculasFavoritas = [
    { titulo: "Titulo 01", director: "Director 01", fecha: 2008 },
    { titulo: "Titulo 02", director: "Director 02", fecha: 2009 },
    { titulo: "Titulo 03", director: "Director 03", fecha: 2010 },
    { titulo: "Titulo 04", director: "Director 04", fecha: 2011 },
    { titulo: "Titulo 05", director: "Director 05", fecha: 2012 },
    { titulo: "Titulo 06", director: "Director 06", fecha: 2013 },
    { titulo: "Titulo 07", director: "Director 07", fecha: 2014 }
];

imprimir(misPeliculasFavoritas[2].fecha)

const misPeliculasFavoritas2010EnAdelante = misPeliculasFavoritas.filter(e => e.fecha >= 2010)

imprimir(misPeliculasFavoritas2010EnAdelante);

const misPeliculasFavoritasDirectores = misPeliculasFavoritas.map(e => e.director)

imprimir(misPeliculasFavoritasDirectores);

const misPeliculasFavoritasTitulos = misPeliculasFavoritas.map(e => e.titulo)

imprimir(misPeliculasFavoritasTitulos);

const misPeliculasFavoritasTitulosyDirectoresConcat = misPeliculasFavoritasTitulos.concat(misPeliculasFavoritasDirectores);

imprimir(misPeliculasFavoritasTitulosyDirectoresConcat);

const misPeliculasFavoritasTitulosyDirectores = [...misPeliculasFavoritasTitulos, ...misPeliculasFavoritasDirectores]

imprimir(misPeliculasFavoritasTitulosyDirectores);
