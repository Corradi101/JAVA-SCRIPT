// Metodos de string
// Length
// El length nos devuelve la cantidad de caracteres que tiene el string ( cuenta los espacios)
// * Trukini para acordarnos de escribir bien el length, pensar en Gallina Tiene Huevo
let miString = 'Hola mundo';
console.log(miString);
console.log(miString.length);

// .toUpperCase() / .toLowerCase()
/*
Para pasar una cadena a mayuscula o minuscula se usan los metodos toUpperCase y toLowerCase.
Esto es util para trabajar con usuarios, mails, o datos que se comparan: muchas veces creemos que una palabra en mayuscula o en miniscula son iguales, pero en programacion son diferentes.
*/

// Pasar todo a mayusculas
console.log(miString.toLocaleUpperCase());
// Pasar todo a minusculas
console.log(miString.toLowerCase());

// .replace()
/*
El metodo replace() permite reemplazar un caracter o gurpo de caracteres por otros.
*/
// Devuelve un nuevo string con la cadena reemplazada
let nuevoString = 'Hola soy un string';
console.log(nuevoString.replace('soy', 'somos'));
// Cambiemos el hola por chau de la variable miString
let resultado = miString.replace('Hola', 'Chau');
console.log(resultado);
// Esto no nos modifica nada porque la variable miString tiene un Hola y yo quiero reemplzar hola

// * Solucion
// Primero lo pasamos todo a minuscula y despues reemplazamos
let resultado1 = miString.toLowerCase().replace('hola', 'chau');
console.log(resultado1);

// .trim()
// Se encarga de borrar los espacios del principio y del final
let stringTrim = '     Holis con espacio      ';
console.log(stringTrim);
console.log(stringTrim.trim());

// .split()
// Divide el string en un array a partir de un parametro que le pasemos
let stringSplit = 'Hola soy un string';
console.log(stringSplit);
console.log(stringSplit.split(' '));

// type of
/*
Devuelve una cadena que indica el tipo de dato del parametro. el parametro puede ser una cadena, numero, variable, u objeto para evaluar su tipo. Sirve para detectar que tipo de dato es el parametro.
*/
// El type of nos devuelve que tipo de dato le estamos pasando
let color = 'rojo';
let colores = ['rojo', 'azul', 'amarillo'];
let number = 1;
console.log(typeof number);

// .includes()
// Este metodo determina si un string puede ser encontrada en otro string, devuelve true o false
let stringIncludes = 'Hola soy un string';

console.log(stringIncludes.includes('asdf'));
console.log(stringIncludes.includes('Hola soy un string'));

// * Ejercicio
/*
1. Crear una funcion que reciba dos parametros
2. El primer parametro es un string
3. El segundo parametro es un string a buscar dentro del string anterior
4. Si se encunetra, que nos imprima en consola se encontro
5. Si no, que no lo encontro
*/

const miFuncion = (stringUno, stringDos) => {
  let isInString = stringUno.includes(stringDos);

  if (isInString) {
    console.log(`Se encontro ${stringDos} en el string ${stringUno}`);
  } else {
    console.log(`No se encontro ${stringDos}, proba con otra palabra`);
  }
};

miFuncion('Aguante Messi', 'messi');

// Esto tiene el problema que si busco en minuscula no va a encontrar


// * Solucion

const miFuncion1 = (stringUno, stringDos) => {
  let stringUnoMinus = stringUno.toLowerCase();
  let stringDosMinus = stringDos.toLowerCase();

  let isInString = stringUnoMinus.includes(stringDosMinus);

  if (isInString) {
    console.log(`Se encontro ${stringDos} en el string ${stringUno}`);
  } else {
    console.log(`No se encontro ${stringDos}, proba con otra palabra`);
  }
};

miFuncion1('Aguante meSSi', 'Messi');

// Metodos de arrays
// Length
// EL indice de un array empieza en 0
// La longitud del array nos devuelve la cantidad de elementos que tiene
const array = [1, 2, 3, 'hola'];
console.log(array[0]); // devuelve 1
console.log(array.length); // devuelve 4

// .indexOf()
// Este metodo nos devuelve el indice del elemento que estamos buscando, si devuelve -1 es porque el elemento que estamos buscando no esta
const arrayIndexOf = [1, 2, 3, 4, 5, 6];
console.log(arrayIndexOf.indexOf(7)); // devuelve -1 porque no esta el elemento 7
console.log(arrayIndexOf.indexOf(1)); // devuelve 0, porque arranca en 0

// .pop()
// Elimina el ultimo elemento de un array y lo devuelve. OJO que este metodo cambia la longitud del array

const plantas = ['rosa', 'jazmin', 'arbol', 'girasol'];

console.log(plantas);
console.log(plantas.pop());
console.log(plantas); // Devuelve (3) ['rosa', 'jazmin', 'arbol']

// .shift()
// Elimina el primer elemento de un array y lo devuelve. OJO que este metodo cambia la longitud del array
console.log(plantas.shift());
console.log(plantas); // Devuelve (2) ['jazmin', 'arbol']

// .unshift()
// Este metodo agrega uno o mas elementos al principio del array
console.log(plantas.unshift('nogal'));
console.log(plantas); // Devuelve (3) ['nogal', 'jazmin', 'arbol']

// .reverse()
// Nos da vuelta el array
const plantasReverse = plantas.reverse();
console.log(plantasReverse); // Devuelve (3) ['arbol', 'jazmin', 'nogal']

// .replaceAll()
// Metodo para reemplazar todas las coincidencias en un string
let stringUno = 'Hola Juan, Juan';
console.log(stringUno.replaceAll('Juan', 'Pepito')); // Devuelve Hola Pepito, Pepito

// .toString()
// Convierte un array a un string
const arrayString = [1, 2, 3, 4, 5, 'hola'];
console.log(arrayString.toString()); // Devuelve 1,2,3,4,5,hola

// .join()
// Este metodo junta los elementos de un array en un string con un separador

console.log(arrayString.join('/')); // Devuelve 1/2/3/4/5/hola

// .map()
// Crea un array nuevo con los resultados del map

const arrayNumeros = [1, 2, 3, 4, 5];
const arrayMapeado = arrayNumeros.map((valor) => valor + 2);
console.log(arrayMapeado); // Devuelve (5) [3, 4, 5, 6, 7]

// .push()
// El metodo push agrega uno o mas elementos al final del array, este modifica la longitud del array.

const animales = ['gato', 'perro', 'loro'];
const contador = animales.push('vaca', 'serpiente');
console.log(contador); // Devuelve 5
console.log(animales); // Devuelve (5) ['gato', 'perro', 'loro', 'vaca', 'serpiente']

// .concat()
// Este metodo lo usamos para unir dos o mas arrays.

const arrayConcat = [1, 2, 3, 'hola'];

console.log(arrayConcat.concat(animales)); // Devuelve (9) [1, 2, 3, 'hola', 'gato', 'perro', 'loro', 'vaca', 'serpiente']

// .slice()
// Este metodo devuelve una copia de una parte del array en otro array, empezando por el inicio (primer parametro) y el final (final no incluido). El array original no se modifica

const nombres = ['Pepe', 'Pepito', 'Maxi', 'Coki', 'Pepito', 'Nelson'];

console.log(nombres.slice(2)); // Devuelve (4) ['Maxi', 'Coki', 'Pepito', 'Nelson']

// Los que mas vamos a usar
/*
length
every
filter
find
some
foreach
join
map
*/

const peliculas = [
  {
    id: 1,
    title: 'Volver al futuro',
    tags: ['ficcion', 'aventura'],
  },
  {
    id: 2,
    title: 'Harry potter',
    tags: ['magia', 'aventura'],
  },
  {
    id: 3,
    title: 'spiderman',
    tags: ['accion', `aventura`],
  },
];

// find
// Busca un elemento que tenga lo que estamos buscando
console.log(peliculas.find((item) => item.id === 3)); // Devuelve {id: 3, title: 'spiderman', tags: Array(2)}
