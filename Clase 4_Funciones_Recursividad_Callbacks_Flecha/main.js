// Declarar / Ejecutar
function sumar1() {
//   va el codigo
let num1 = 55;
let num2 = 10;

 return num1 + num2;
}

console.log(sumar1());

// Esa funcion la podemos mejorar pasendole parametros

function sumar(num1, num2) {
return num1 + num2;
}

console.log(sumar('hola', 'como estas?'));

function saludar(nombre) {
console.log(`hola ${nombre}`);
}

saludar('Max');

function sumar(a, b) {
console.log('Ya hice la suma');
return a + b; // Devolvemos al exterior de la funcion la suma de a + b
console.log('Ya hice la suma'); // Esto no lo devuelve porque esta despues del return
}

// let resultado = sumar(5, 5);
let resultado = 10;

console.log(resultado);

// Otro ejemplo
function sumarNumeros(num1, num2) {
if (num1 === 4) {
return console.log('el num es un 4');
}

return num1 + num2;
}

console.log(sumarNumeros(2, 2));

//  Funciones flecha 

// Sintaxis
/*
const nombreFuncion = (parametro) => {
aca va el codigo
};*/

/*esto es una forma
function saludo(nombre) {
console.log(`hola ${nombre}`);
}*/

//esto es otra forma
const saludo= (nombre) => {
return console.log(`hola ${nombre}`);
};

saludo('Maxi');


// Funcion anonima
// Una funcion es anonima cuando se define sin un nombre. La funcion se va a almacenar en la memoria. Y el uso mas comun es asignarla a una variable
/*
let hola = function () {
console.log('hola');
};

let hola = () => {} //asi se escribe la funcion de arriba con funcion flecha
*/

// Si vamos a tener un parametro con una expresion no necesitamos return

// (parametro) => expresion;
let hola = (parametro) => 'hola';

// Si tenemos dos parametros
(parametro1, parametro2) => expresion;

//Si vamos a tener varios parametros, y varias lineas, necesitamos parentesis y llaves
/*
(a, b) => {
let a = 1;
return a + b;
}; */

// ejemplo con 1 parametro

let saludar5 = (nombre) => console.log(`hola ${nombre}`);
saludar5('Corradi');

// ejemplo con 2 parametros

let descripcion5 = (nombre, edad) =>
console.log(`Hola ${nombre}, tenes ${edad}`);

descripcion5('Corradi10', 35);


// ejemplo con 2 parametros y varias lineas de codigo

let sumarFlecha = (a, b) => {
let resultado = a + b;
return resultado;
};

console.log(sumarFlecha(33, 33));

// resumen level 5

function pepe(nombre7){
console.log(`Como estas? ${nombre7}`)
}

pepe('Maxi');

//let pepe = (nombre7) => console.log(`Hola ${nombre7}`);

//  Funciones Recursivas
// Primero ejemplo con un for
let i = 0;

for (let i = 4; i > 0; i--) {
console.log(i);
}

// Hagamoslo con la funcion recursiva

let cuentaAtras = (numero) => {
// Caso base / condicion para que termine
  if (numero === 0) {
    return;
  }

  console.log(numero);

  return cuentaAtras(numero - 1);
};

cuentaAtras(3);

/*
1. La entrada actual es 5
2. Pregunta, 5 es igual a 0?
3. No, Oka, entonces imprimi 5 en la consola
4. La funcion se llama asi misma con el numero -1, en este caso 5 - 1
--
5.  La entrada actual es 4
6. Pregunta, 4 es igual a 0?
7. No, imprimi en la consola
y asi sucesivamente hasta que la entrada sea 0 y se cumpla la condicion, ahi la funcion termina.
*/

// Ejemplo func recursiva

// Quiero crear una funcion que le pasemos un numero, lo dupliquemos y despues pasar ese valor y duplicarlo

const duplicar = (num) => {
  // Entra el numero, se suma asi mismo
  num = num + num;
  // Lo pinta
  console.log(num);

  // Caso base
  if (num > 50) {
    return console.log('Te pasaste ');
  }
  // Se llama asi misma

  return duplicar(num);
};


duplicar(5);

// Callback

// Un callback es una funcion que se pasa como argumento a otra funcion
/*
const alertHola = (nombre) => {
  return alert(`Hola ${nombre}`);
};

alertHola('Nelson');

const consoleHola = (nombre) => {
  return console.log(`Hola ${nombre}`);
};

consoleHola('Nelson');

const procesarEntrada = (callback) => {
  const nombre = prompt('Por favor ingresa tu nombre');

  callback(nombre);
};

procesarEntrada(alertHola);

const saludar = (nombre) => {
  console.log(`Hola ${nombre}`);
};

saludar('asd');

const procesarSaludo = (funcion) => {
  const nombre = prompt('pone tu nombre');

  funcion(nombre);
};

procesarSaludo(saludar);

// Ejemplo usando un metodo de array

const names = ['Pepe', 'pepito', 'pepita'];

names.forEach((pepe) => {
console.log(pepe);
});
*/