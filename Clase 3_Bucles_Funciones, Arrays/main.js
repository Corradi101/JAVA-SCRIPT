/*Funciones
Como declaramos una funcion?
function identificador() {
Va el codigo de la funcion
}
Y como la ejecutamos?
identificador();
*/

function saludar() {
  console.log('Hola, soy una funcion');
}

saludar();


/* Otro ejemplo con parametros
Sintaxis de funcion con parametros
function nombreDeLaFuncion(parametro){
Aca va el codigo
}
Declarar la funcion
*/

function saludoPersonal(nombre) {
  console.log(`Hola ${nombre} `);
}
// Ejecutamos la funcion
saludoPersonal('Nelson');
saludoPersonal('Pepito');

// Funcion con mulitples parametros
function descripcionPersonal(nombre, edad) {
  console.log(`Hola ${nombre}, tengo ${edad} años`);
}
// Ejecutamos
descripcionPersonal('Pepito');
descripcionPersonal(250, '19');

// Funcion con parametro por defecto
function descripcionPersonal(nombre, edad, carrera = 'nada') {
  console.log(`Hola ${nombre}, tenes ${edad} años y estudias ${carrera}`);
}

descripcionPersonal('Pepito', 28, 'frontend');
descripcionPersonal('Pepito2', 19);
descripcionPersonal("Leo", 35, 'Futbolista');


// Return

function sumar(a, b) {
  return a + b; // Devolvemos la suma de a y b al exterior de la funcion
}

let resultado = sumar(5, 5);

function sumarNumeros(a, b) {
  if (a === 4) {
    return;
  }
  return a + b;
}

console.log(sumarNumeros(5, 5));


/* Bucles
Sintaxis
for ([expresión inicial-desde]; [condición-hasta]; [actualización]) {
lo que va a ejecutar
} */

let nuevoArray = [
  'Auto',
  'Moto',
  'Camioneta',
  'Bicicleta',
  'Barco',
  'Submarino',
  'Camion',
];
console.log(nuevoArray); // Esto devuelve el array completo
console.log(nuevoArray[0]); // Esto devuelve Auto
// Dato de vital importancia, para acordarse como se escribe length, piensen en Gallina Tiene Huevo
console.log(nuevoArray.length); // Esto devuelve 7

//  Volvamos al for

for (let i = 0; i < nuevoArray.length; i++) {
  console.log(nuevoArray[i]);
}

// Analicemos lo sucedido
/*
1. Inicio, creamos una variable i (item), que tiene el valor de let i = 0
2. Condicion, evaluamos la condicion, le preguntamos si i (item) es menor a la longitud del array i < i.nuevoArray.length
3. Si la condicion es falsa, se termina el bucle
4. Si la condicion es true, se ejecuta lo que esta dentro del for
5. Actualizacion, incrementamos en 1. i++
6. Volvemos al paso 2 (evalua nuevamente la condicion)
*/

for (let i = 0; i < 10; i++) {
  console.log(`El numero que estamos iterando es ${i}`);
}

for (let pepito = 1; pepito <= 10; pepito++) {
  console.log(`El numero actual de pepito es: ${pepito}`);
}


// Break

for (a = 0; a < 10; a++) {
  if (a === 4) {
    break;
  }
  console.log(`break del 0 al 3 ${a}`);
}


// Continue

for (e = 0; e < 10; e++) {
  if (e === 3) {
    continue;
  }
  console.log(`Continue del 0 al 9 ${e}`);
}

// Hacer un bucle que imprima solamente los numeros pares

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`El numero ${i} es par`);
}


// While
/*Sintaxis
while (condicion) {
 Codigo a ejecutar
Actualizar
}*/

let o = 0;

while (o < 10) {
  console.log(`De o del 0 al 9 ${o}`);
  o++;
}

// Do while

// Ejecuta primero y despues pregunta si la condicion es true o false

let i = 10;

do {
  console.log(`El numero iterado de do es ${i}`);
  i++;
} while (i < 10);

let array = ['Hola', 20, 'Nucba'];
let string = 'Hola soy un string';
console.log(array[0]);
console.log(Array.isArray(array));

console.log(array.length);
console.log(string.length);

const animales = ['vaca', 'gato', 'perro'];

const contador = animales.push('serpiente');

console.log(animales);
console.log(contador);
