// const videos = new Set();

// const start = async () => {
//     let checkExist = setInterval(() => {
//         if (document.querySelector('iframe').src.length) {
//             const video = document.querySelector('iframe').src.split("&")[0].replace("https://player.vimeo.com/video/", "https://vimeo.com/").replace("?h=", "/");
//             videos.add(video)
//             clearInterval(checkExist);
//         }
//     }, 3000);
//     console.log(videos)
//     setTimeout(() => { document.querySelector('.chakra-button.css-seipng').click() }, 2000);
//     setTimeout(() => { document.querySelector('.chakra-button.css-seipng').click() }, 2000);
// }


// https://vimeo.com/697319094/777a8d4f2e
// https://vimeo.com/697319332/5e88689297
// https://vimeo.com/697327110/5c894e9a66
// https://vimeo.com/697327045/d244a4c657
// https://vimeo.com/697326873/4320c124e3
// https://vimeo.com/697327008/d754d911ee
// https://vimeo.com/697327079/6af55aef6d
// https://vimeo.com/697333086/de697f8d43
// https://vimeo.com/697333168/98a1c87bf9
// https://vimeo.com/698949851/fffd42b646
// https://vimeo.com/698949928/c395381213
// https://vimeo.com/698949643/65fac3372d
// https://vimeo.com/698949813/21cbff6001
// https://vimeo.com/700764927/70316494f7
// https://vimeo.com/700764813/8f5fd0691b
// https://vimeo.com/700764766/3a149b1236
// https://vimeo.com/700764852/38775e5906
// https://vimeo.com/700764885/18850c2c54
// https://vimeo.com/708589890/6abc460e0a
// https://vimeo.com/700802933/4ae90307af
// https://vimeo.com/701139937/7730f3baf5
// https://vimeo.com/701139593/f77c94395a
// https://vimeo.com/701139876/9e3507a88c
// https://vimeo.com/701179050/c1f927ad78
// https://vimeo.com/701189201/281ee9c19f
// https://vimeo.com/701189598/ad0600e9b9
// https://vimeo.com/701189489/d1fb67dc54
// https://vimeo.com/701189132/8457d5773e
// https://vimeo.com/701189338/b6bacb6ded
// https://vimeo.com/701189026/452fa46ddb
// https://vimeo.com/701193966/2975a95d86
// https://vimeo.com/701246899/fd4585acc7
// https://vimeo.com/701247865/39328a2dd9
// https://vimeo.com/701247297/10d7f4c7bd


const titulos = ['Introducción al curso', 'Node y NPM', 'Primer proyecto Node', 'Ejecución y comentarios', 'Enlace al repositorio', 'Ejercicio', 'Tipado en JS y tipos primitivos', 'Declaración de variables y escritura dinámica', 'Notación en JavaScript', 'Listas, Objetos y Fechas en JS', 'Ejercicio', 'Bifurcaciones if else y switch', 'Comparaciones en JS', 'Bucles for y while', 'Formas de controlar los bucles con continue y break', 'Etiquetas en los bucles', 'Ejercicio', 'Tipos de declaracion de strings y cuando utilizarlos', 'Metodos mas comunes de los strings', 'Manipulación de cadenas de texto', 'Expresiones regulares y metodos de busqueda de cadenas', 'Ejercicio', 'Numbers y precisión en JS', 'Operaciones y redondeo', 'Métodos de numbers y límites en JS', 'Ejercicio', 'Listas y métodos de mutacion de listas', 'Concatenación y obtención de fragmentos de listas', 'Métodos de iteración en listas', 'Métodos avanzados, obtención de listas a partir de listas', 'Ordenación de listas y comparación entre dos listas', 'Identificar si existe un valor en un array y objetos iterables', 'Ejercicio', 'Trabajando con Sets', 'Objetos en JavaScript', 'Fechas en JavaScript', 'Uso de la consola en JavaScript', 'Ejercicio 1', 'Ejercicio 2', 'Ejercicio 3', 'Ejercicio 4', 'Introducción a las funciones en JavaScript', 'Funciones de tipo flecha y anónimas', 'Carga y sobrecarga de funciones', 'Funciones asíncronas y promesas', 'Funciones generadoras', 'Ejercicio', 'Errores en JavaScript', 'Gestión de logs en NodeJS', 'Ejercicio', 'Módulos y su utilización con CommonJS', 'Utilizando módulos con ES6', 'Librerías en Node y NPM y su utilización', 'Librerías interesantes', 'Ejercicio', 'Introducción a la Programación Orientada a Objetos', 'Creación y uso de clases en JavaScript', 'Ámbito de las clases, métodos y atributos públicos, privados y protegidos', 'Getters y Setters en objetos', 'Herencia y Polimorfismo', 'Por qué no se habla de Interfaces en JavaScript y alternativas', 'Ejercicio', 'Introducción a la Depuración en VSCode', 'Ejercicios', 'Qué es el linting y ESLint', 'Fichero de configuración ESLint', 'Instalación y creación de ficheros de configuración personalizados', 'Reglas temporales y scrips para ejecución de ESLint en nuestro código', 'Ejercicio', 'Introducción a HTML con JS', 'Utilización de librerías de terceros', 'Manejo de eventos en JavaScript', 'Eventos personalizados', 'JQuery', 'Alertas y Dialogos en pantalla', 'Ejercicio', 'Persistencia de datos en navegador', 'Ejercicio', 'Drag and Drop con JavaScript', 'Ejercicio', 'Inicialización de Mapas en HTML', 'Geolocalización', 'Ejercicio']

for (const [i, v] of titulos.entries()) {
    console.log(`Curso de JavaScript Básico - ${i} - ${v}`);
}
