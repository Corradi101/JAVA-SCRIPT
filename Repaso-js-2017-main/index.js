//1) Crea un bucle que por cada iteración muestre en consola un mensaje
// que diga en que número de iteración estamos.
//Tiene que mostrar desde la iteración 1 a la 50 inclusive.

// Nota : el mensaje en consola debe ser “user friendly”
//(Ej: “Estamos en la iteración número “número”)

// for (let index = 1; index <= 50; index++) {
//   console.log(`Estamos en la iteración número ${index}`);
// }

// const imprimirNumeros = (numero) => {
//   for (let index = 1; index <= numero; index++) {
//     console.log(`Estamos en la iteración número ${index}`);
//   }
// };

// imprimirNumeros(10);

// 2) Ahora vamos a hacer el camino inverso al camino anterior,
//  modificalo de manera tal que la iteración sea del 50 al 1.

// Nota : el mensaje en consola debe ser “user friendly”
//  (Ej: “Estamos en la iteración número “número”)

// const imprimirNumeros = (numero) => {
//   for (let index = numero; index >= 1; index--) {
//     console.log(`Estamos en la iteración número ${index}`);
//   }
// };

// imprimirNumeros(10);

// 3) Trabajemos con el bucle while. Creá una variable contador que,
//  mientras que el valor de contador sea menor a 20 ,
//   se aumente en uno con cada iteración. Imprimí en consola el valor
//    actual en cada una de las iteraciones. Finalmente,
//     Imprimí por consola el valor final de la variable contador

// Nota : el mensaje en consola debe ser “user friendly”
//  (Ej: “El valor actual de contador es “número”)

// let contador = 1;

// while (contador < 20) {
//   console.log(`El valor actual de contador es ${contador}`);
//   contador++;
// }
// console.log(`El valor actual de contador es ${contador}`);

// const imprimirNumeros = (numero) => {
//   let contador = 1;

//   while (contador < numero) {
//     console.log(`El valor actual de contador es ${contador}`);
//     contador++;
//     console.log(`El valor actual de contador es ${contador}`);
//   }
// };

// imprimirNumeros(2);

// 4) Momento de agregar arrays a la práctica,
// Escribí un código en el cual crees un array con los números del
// 1 al 10 (Este array lo vamos a seguir usando en los próximos ejercicios )
//  y luego mediante el uso de un bucle, imprimí cada número en consola

// let numeros = [1, 20, 3, 4, 15, 6, 7, 8, 9, 10];
// let otrosNumeros = [1, 20, 3, 4, 15, 6, 7, 8, 9, 10, 1243, 124, 124];

// // function imprimirNumeros(arrayDeNumeros){
// //   /*for*/
// // }

// const imprimirNumeros = (arrayDeNumeros) => {
//   for (let index = 0; index < arrayDeNumeros.length; index++) {
//     console.log(arrayDeNumeros[index]);
//   }
// };

// imprimirNumeros(otrosNumeros);

// 5) Escribí un código que imprima por
//  consola a todos los números del array multiplicados por (numero).

// let numeros = [1, 20, 3, 4, 15, 6, 7, 8, 9, 10];

// const multiplicarNumeros = (arrayDeNumeros, numero) => {
//   for (let index = 0; index < arrayDeNumeros.length; index++) {
//     console.log(arrayDeNumeros[index] * numero);
//   }
// };

// multiplicarNumeros(numeros, 1000);

// 6) Escribí un bucle que imprima únicamente los primeros 5 números del array

// let numeros = [1, 20, 3, 4, 15, 6, 7, 8, 9, 10];

// for (let index = 0; index < numeros.length; index++) {
//   if (index >= 5) {
//     break;
//   }
//   console.log(numeros[index]);
// }

// 7) Escribí un bucle que imprima todos los números del array menos el número 7.
// let numeros = [1, 20, 3, 4, 15, 6, 7, 8, 9, 10];

// for (let index = 0; index < numeros.length; index++) {
//   if (index === 7) {
//     continue;
//   }
//   console.log(numeros[index]);
// }

// 8) Escribí un código que imprima por consola a todos los números
// pares del array de números.

// Pista: Podes utilizar el operador de modulo ( % )

// let numeros = [1, 20, 3, 4, 15, 6, 7, 8, 9, 10];

// for (let index = 0; index < numeros.length; index++) {
//   if (numeros[index] % 2 === 0) {
//     console.log(numeros[index]);
//   }
// }

// // Impares
// for (let index = 0; index < numeros.length; index++) {
//   if (numeros[index] % 2 !== 0) {
//     console.log(numeros[index]);
//   }
// }

/*--------------- CLASE 4 ---------------*/
// 1) Escribí una función que reciba como parámetro un nombre
//  y que imprima en consola “hola, soy {nombre} “.

// function imprimirNombre(nombre) {
//   console.log(`Hola, soy ${nombre}`);
// }

// // Arrow

// const imprimirNombreAlt = (nombre) => console.log(`Hola, soy ${nombre}`);

// imprimirNombre("Mati");
// imprimirNombre("Nelson");
// imprimirNombreAlt("Mati");
// imprimirNombreAlt("Nelson");

// 2) Escribí una función que imprima en consola
//  la suma de dos números pasados por parámetro.

// function suma(num1, num2) {
//   return num1 + num2;
// }

// // arrow
// const sumaAlt = (num1, num2) => num1 + num2;

// console.log(sumaAlt(suma(2, 2), suma(2, 6)));

// // 3) Escribí una función que reciba dos números por parámetro,
// // multiplique a cada uno por dos
// //  y luego imprima por consola la suma de ambos números multiplicados.

// function sumarMultiplicados(num1, num2, multiplicador) {
//   return num1 * multiplicador + num2 * multiplicador;
// }

// const sumarMultiplicadosAlt = (num1, num2, multiplicador) => {
//   return num1 * multiplicador + num2 * multiplicador;
// };

// const sumarMultiplicados2 = (num1, num2, multiplicador) =>
//   num1 * multiplicador + num2 * multiplicador;

// console.log(sumarMultiplicadosAlt(2, 4, 10));

// 4) Escribí una función que pueda recibir un número como parámetro
// y que imprima por consola la tabla de multiplicación del 0 al 10 de ese
//  número. Se debe mostrar de la siguiente manera: “ (número)
//  multiplicado por (número actual de la tabla) es igual a (resultado) “

// function tablaDel(numero) {
//   for (let index = 0; index <= 10; index++) {
//     console.log(
//       `El número ${numero} multiplicado por ${index} es igual a ${
//         numero * index
//       } `
//     );
//   }
// }

// tablaDel(1);
// tablaDel(2);

// 5) Escribí una función que reciba dos números por parámetro y
//  que imprima por consola todo el intervalo entre ambos números,
//   incluyéndolos. Por ejemplo , si ingresamos 1 y 3 deben imprimirse
//    en consola los números “1” , “2” y “3”.
//  Sin son iguales, que se imprima “Ambos números son iguales”.

/*
1- Va a recibir dos numeros como parametros
2- Tengo que escribir mi código de manera tal que cubra todas las posibilidades.
*/

// function intervaloEntre(num1, num2) {
//   let numeroActual = num1;

//   if (numeroActual > num2) {
//     console.log(numeroActual);
//     while (numeroActual > num2) {
//       numeroActual--;
//       console.log(numeroActual);
//     }
//   } else if (numeroActual < num2) {
//     console.log(numeroActual);
//     while (numeroActual < num2) {
//       numeroActual++;
//       console.log(numeroActual);
//     }
//   } else {
//     console.log("Ambos números son iguales");
//   }
// }

// intervaloEntre(5, 5);
// intervaloEntre(1, 5);
// intervaloEntre(5, 1);

// 6) Escribí las siguientes funciones:

// - Escriba las funciones “sumar” , “restar” , “multiplicar” “dividir”
// que puedan recibir dos parámetros e imprima en consola el resultado
// de la operación matemática correspondiente
// - Escriba una función que reciba dos números y una función
// como parámetros y que muestre en consola el resultado correspondiente
//  a la operación matemática pasada como parámetro.

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const hacerOperacion = (num1, num2, fn) => fn(num1, num2);

console.log(hacerOperacion(4, 2, sumar));
console.log(hacerOperacion(4, 2, restar));
console.log(hacerOperacion(4, 2, multiplicar));
console.log(hacerOperacion(4, 2, dividir));
