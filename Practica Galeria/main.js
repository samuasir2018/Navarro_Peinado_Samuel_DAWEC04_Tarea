import { Author } from './modules/Author.js';
import { Category } from './modules/Category.js';
import { Coords } from './modules/Coords.js';
import { Image } from './modules/Image.js';
import { Landscape } from './modules/Landscape.js';
import { Portrait } from './modules/Portrait.js';
import { Gallery } from './modules/Gallery.js';
import { ExcepcionMissingField, ExcepcionCampoNoValido, ExcepcionAlreadyExists } from './modules/Exceptions.js';

var categoryDefault = new Category("por defecto", "La categoria asignada a las imagenes que no tienen categoria concreta");
var defaultCategory = {
    category: categoryDefault,
    images: []
}
var defaultAuthor = new Author("DefaultAuth", "defaultmail@mail.com", "default.jpg");
var galeria = new Gallery("El colleccionista de imagenes", defaultCategory, defaultAuthor);

var categoryPaisajes = new Category("Paisajes", "Fotos de paisajes de montallas, campo, bosques...");
try {
    galeria.addCategory(categoryPaisajes);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}


var categoryMotos = new Category("Motos", "Fotos de motos y motocicletas");
try {
    galeria.addCategory(categoryMotos);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

var categoryGames = new Category("Videojuegos", "Fotos de videojuegos y fanarts");
try {
    galeria.addCategory(categoryGames);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}


//Debe lanzar la excepcion
try {
    galeria.addCategory(categoryPaisajes);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

var categorias = galeria.categorias;
console.log(categorias);

try {
    galeria.removeCategory(categoryPaisajes);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

var categorias1 = galeria.categorias;
console.log(categorias1);

//Añadir varios autores
var autorPedro = new Author("Pedro", "pedro.correo@gmail.com", "icon.jpg");
try {
    galeria.addAuthor(autorPedro);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

var autorPaco = new Author("Paco", "pakito.correo@gmail.com", "emoji.jpg");
try {
    galeria.addAuthor(autorPaco);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

var autorAndrea = new Author("Andrea", "andrea.correo@gmail.com", "picture.jpg");
try {
    galeria.addAuthor(autorAndrea);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

var autorAlonso = new Author("Alonso", "alonso.correo@gmail.com", "photo.jpg");
try {
    galeria.addAuthor(autorAlonso);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

var autores = galeria.autores;
console.log(autores);

//Eliminar autores
try {
    galeria.removeAuthor(autorAlonso);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

var autores1 = galeria.autores;
console.log(autores1);


//Add imagen varias veces y probar algunas execpiones y categoria/autor por defecto
var coordsKawasaki = new Coords("1223", "-12123");
var imagenKawasaki = new Image("MotoKawasaki", "Foto de mi moto en el garaje", "./documents/photos/kawasaki.jpg", coordsKawasaki);

var coordsSkyrim = new Coords("167783", "12123");
var imagenSkyrim = new Image("Skyrim", "Foto de mi partida en el juego skyrim", "./user/games/dragon.jpg", coordsSkyrim);

var coordsDefault = new Coords("658", "7421");
var imagenDefault = new Landscape("FotoRandom", "Foto extraña encontrada en internet", "./documents/photos/random.jpg", coordsDefault);

var coordsYamaha = new Coords("588", "-457");
var imagenYamaha = new Portrait("MotoYamaha", "Foto de la moto de mi hermano", "./documents/photos/yamaha.jpg", coordsYamaha);

var autorNoExiste = new Author("NoExiste", "mailfalso@gmail.com", "noavatar.jpg");

try {
    galeria.addImage(imagenKawasaki, categoryMotos, autorPaco);
    galeria.addImage(imagenYamaha, categoryMotos, autorPaco);
    galeria.addImage(imagenSkyrim, categoryGames, autorAndrea);
    galeria.addImage(imagenDefault, categoryPaisajes, autorNoExiste);
    galeria.addImage(null, categoryGames, autorPedro);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

//Obtener las imagenes de la categoria motos
try {
    var imagenesMotos = galeria.getCategoryImages(categoryMotos);
    console.log(imagenesMotos);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

//Obtener las imagenes de una categoria que no existe
try {
    var imagenesPaisajes = galeria.getCategoryImages(categoryPaisajes);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

//Obtener las imagenes de un autor concreto
try {
    var imagenesPaco = galeria.getAuthorImages(autorPaco);
    console.log(imagenesPaco);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

//Obtener las imagenes del autor por defecto
try {
    var imagenesDefault = galeria.getAuthorImages(defaultAuthor);
    console.log(imagenesDefault);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}

//Obtener los landscapes y los portraits
var portraits = galeria.getPortraits();
console.log(portraits);
var landscapes = galeria.getLandscapes();
console.log(landscapes);

//Eliminar la imagen de una categoria
try {
    galeria.removeImage(imagenKawasaki);
    var imagenesMotos2 = galeria.getCategoryImages(categoryMotos);
    console.log(imagenesMotos2);
} catch (excepcion) {
    console.log(excepcion.mensaje);
}