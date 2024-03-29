// Que era un callback?
const saludar = (nombre) => {
  alert(`Hola ${nombre}`);
};

const procesarEntradaUsuario = (callback) => {
  const nombre = prompt('Por favor ingresa tu nombre');

  callback(nombre); //me devuelve el saludo con el nombre que le doy
};
//procesarEntradaUsuario(saludar);


// Repeat(n)
// Es un método de los strings que permite repetirlo n veces sin necesidad de escribir todo el código manualmente.
const nombre = 'Maxi';
console.log(nombre.repeat(5));


// ChartAt()
// Devuelve el caracter en el index(indice) que el especifiquemos
console.log(nombre.charAt(0)); // Devuelve la M de Maxi


// Concact()
// Nos permite concatenar dos o mas arrays/strings

const nombre1 = 'Maxi, ';
console.log(nombre1.concat('Holis')); // Devuelve Maxi, Holis

const arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6])); // Devuelve (6) [1, 2, 3, 4, 5, 6]
console.log(arr.concat('hola')); // Devuelve (4) [1, 2, 3, 'hola']


// Map
const numeros = [1, 2, 3, 4];

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = numeros[i] * 2;
  console.log(numeros[i]); // me devuelve los numeros multiplicados *2.
}

const numerosDobles = numeros.map((numero) => numero * 2);
console.log(numerosDobles);


// Filter
const array = [1, 2, 3, 4, 5, 6];

const arrayFiltrando = array.filter((item) => item > 3);
console.log(arrayFiltrando); // me duvuelve 4 5 6 que son los numeros mayores de 3

// Ejemplo Filter con Array de strings
const arrayPalabras = [
  'Argentina',
  'Brasil',
  'Bariloche',
  'Uruguay',
  'Paraguay',
];

const arrayFiltrandoPalabras = arrayPalabras.filter((item) => {
  return item.includes('guay')
});
console.log(arrayFiltrandoPalabras); // Devuelve (2) ['Uruguay', 'Paraguay']
console.log(arrayPalabras); // Devuelve (5) ['Argentina', 'Brasil', 'Bariloche', 'Uruguay', 'Paraguay']


// Find()
// Devuelve el valor del primer elemento del array que cumpla con la condicion que le pasamos
const array1 = [1, 2, 3, 4, 5, 6];
const find = array1.find((item) => item > 5); //devuelve el numero 6
console.log(find);


// ForEach()
// El metodo forEach ejecuta la funcion indicada por cada elemento del array
const arrayNumeros = [1, 2, 3, 4, 5, 6];

arrayNumeros.forEach((item) => console.log(item)); // Devuelve  del 1 al 6
arrayNumeros.forEach((item) => {
  console.log(`Estamos recorriendo el numero ${item}`);
});


// Reduce
const arrayNumeros1 = [10, 20, 30];
console.log(arrayNumeros1.reduce((a, b) => a + b)); // Devuelve la suma que da 60

// Sort()
const array2 = [1, 3, 7, 9, 24, 12];
console.log(array2.sort());

console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
);


// Every()
// Determina si todos los elementos en el array cumplen una condicion. Devuelve true o false
const arr3 = [1, 3, 7, 9, 24, 12];
console.log(arr3.every((item) => item > 1));


// Some()
// Comprueba si almenos un elemento del array cumple con la condicion

const arrNum = [1, 2, 3, 4, 5, 6];

console.log(arrNum.some((item) => item > 2));


// indexOf()
// Este metodo retorna el primer indice en el que se puede encontrar un elemento dado en el array, devuelve -1 si no esta

console.log(arrNum.indexOf(3));


// Spread Operator
const numeros2 = [1, 2, 3];
const otrosNumeros = [4, 5, 6];

console.log(numeros.concat(otrosNumeros));
console.log([0, ...numeros, ...otrosNumeros, 7, 8]);

const user = {
  id: 1,
  nombre: 'Nelson',
};

let userCopy = { ...user };
userCopy.web = 'nelson.com';
console.log(userCopy);
console.log(user);

const productos = [
  { id: 1, nombre: 'Remera', precio: 500 },
  { id: 2, nombre: 'Pantalon', precio: 2500 },
  { id: 3, nombre: 'Zapatillas', precio: 1500 },
];

console.log(productos);
const productosConDescuentos = productos.map((producto) => {
  if (producto.precio < 1000) {
    return producto;
  }
  return {
    ...producto,
    precio: producto.precio * 0.9,
  };
});

console.log(productos);
console.log(productosConDescuentos);

// Quiero obtener todos los id
//const idProductos = productos.map((producto) => producto.id);

const idProductos = productos.map(({ nombre }) => nombre);
console.log(idProductos); // Devuelve (3) ['Remera', 'Pantalon', 'Zapatillas']



const peliculas = [
  {
    id: 1,
    title: 'Volver al futuro',
    tags: ['ficcion', 'aventura', 'accion'],
    img: 'asd/asd.jpg',
  },
  {
    id: 2,
    title: 'Shrek',
    tags: ['animada', 'aventura', 'accion'],
    img: 'asd/asd.jpg',
  },
  {
    id: 3,
    title: 'Star Wars',
    tags: ['ficcion', 'accion'],
    img: 'asd/asd.jpg',
  },
  {
    id: 4,
    title: 'Memento',
    tags: ['suspenso', 'accion'],
    img: 'asd/asd.jpg',
  },
  {
    id: 5,
    title: 'Spiderman',
    tags: ['accion'],
  },
];


// find
console.log(peliculas.find((pelicula) => pelicula.id === 1)); // Devuelve 'Volver al futuro'


// some
console.log(peliculas.some((pelicula) => pelicula.id === 1)); // Devuelve true


// some & includes
console.log(peliculas.some((pelicula) => pelicula.tags.includes('aventura'))); //Devuelve true


// every
console.log(peliculas.every((pelicula) => pelicula.tags.includes('accion'))); //Devuelve true


// map
console.log(peliculas.map((pelicula) => pelicula.title)); // Devuelve los nombres de las pelis


const imprimirPelis = () => {
  peliculas.map((pelicula) => {
    return `
<h1>${pelicula.title}</h1>
<p>${pelicula.tags}</p>
<img src=${pelicula.img} />
`;
  });
};

//  filter
console.log(peliculas.filter((pelicula) => pelicula.tags.includes('aventura')));

console.log(peliculas.filter((peliculas) => peliculas.img !== undefined));
