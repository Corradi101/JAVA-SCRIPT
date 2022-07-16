var nombre;

console.log(nombre);
nombre = 'Nelson';
console.log(nombre)

/*
function variables() {
var variableLocal = 'esto es local';
}

console.log(variableLocal); // no se puede ejecutar porque esta dentro de una funcion.
*/

// Ejemplos Scope
var a = 'Estoy Global';

function holi() {
  var b = 'Estoy en una funcion';
}

{
  var c = 'Estoy en bloque';
}

{
  let d = 'Estoy en bloque';
  const e = 'Estoy en bloque';
}

console.log(a);
// console.log(b); // no imprime, porque no esta definido, es local
console.log(c); // imprime porque no es una funcion, es un bloque
// console.log(e); // no imprime porque las de let y conts viven siempre dentro de su bloque

// Operadores
/*
| == / Es igual / a == b
console.log(18 == '18');// true
| === / Es estrictamente igual / a === b
console.log(18 === '18');// false
| != / Es distinto / a != b
console.log(18 != 18); // false
| !== / Es estrictamente distinto / a !== b
console.log(18 !== '18'); // true
| < / Es menor / a < b
console.log(9 < 10); // true
| <= / Es menor o igual / a <= b
console.log(9 <= 9); // true
| > | >= \ se hace igual que el de menor o igual
| && / Operador de and (y)
console.log(18 > 7 && 9 < 9); // false
| || / Operador de or (o)
console.log(18 > 7 || 9 < 9); // true
| ! / Operador not (negar)
console.log(!true); // false
*/

/* Condicionales
// Sintaxis
if (condicion) {
// Codigo a ejecutar si se cumple la condicion, o sea si es true
console.log();
}
*/

/* Que pasa si la condicion es falsa y quiero que haga algo
if (condicion) {
//  si es verdadera ejecuta lo de aca adentro
console.log();
} else {
//   ejecuta esto
}
*/

// Ejmplo de if

let llueve = true;

if (llueve) {
console.log('Esta lloviendo, no te olvides del paraguas');
} else {
console.log('Sali tranqui, no llueve');
}

// Podemos comprobar si es true basicamente usando solo llueve, js asume que es true
// tambien se puede poner: if (llueve == true) o if (llueve === true)
// Y si lo queremos negar le decimos !llueve

// Otro ejemplo de if
let edad = 35;
let apellido = 'Corradi'; 

if (edad > 18 && apellido === 'Corradi') {
console.log('Se puede tomar una birrita');
} else {
console.log('Que tome juguito');
}

// * Switch
// Vamos a ver el ejemplo con if else y despues pasado a switch
/*
const mascota = 'pato';

if (mascota === 'lagarto') {
console.log('Tengo un lagarto');
} else if (mascota === 'perro') {
console.log('Tengo un perro');
} else if (mascota === 'gato') {
console.log('Tengo un gato');
} else if (mascota === 'serpiente') {
console.log('Tengo una serpiente');
} else if (mascota === 'loro') {
console.log('Tengo un loro');
} else {
console.log('No tengo mascota');
}
*/

// Pasemos esto a switch

const mascota = 'gato';

switch (mascota) {
case 'lagarto':
console.log('Tengo un lagarto');
break;
case 'perro':
console.log('Tengo un perro');
break;
case 'loro':
console.log('Tengo un loro');
break;
default:
console.log('Tengo otra mascota');
break;
}

// * Sintaxis
// switch (expresion) {
//   case 1:
//     // codigo a ejecutar si es true
//     break;
//   case 2:
//     // codigo a ejecutar si es tru
//     break;
//   default:
//     // si nada coincide que imprima lo de aca
//     break;
// }

// Ejemplo Switch y scope

const mandado = 'Ir de compras';

switch (mandado) {
  case 'Ir al dentista': {
    let mensaje = 'No me gusta ir al dentista';
    console.log(mensaje);
    break;
  }
  case 'Ir de compras': {
    let mensaje = 'Me encanta ir de compras';
    console.log(mensaje);
    break;
  }
  default:
    console.log('Sin mandados');
    break;
}

/*No podemos declarar la misma variable let mensaje porque ya esta en ese bloque, la consola nos dice que mensaje ya esta declarada
Para solucionarlo, le agregamos {} despues de cada case
case 1: {
codigo a ejecutar
} 
*/

//Ejercicio 1

const arrayPalabras = ["nucba", "Programación", "javascript", "HTML", "react"];

const palabrasConM = (palabras) => {
  let nuevoArray = [];
  palabras.forEach((palabra) => {
    if (palabra.toLowerCase().includes("m")) {
      nuevoArray.push(palabra);
    }
  });
  console.log(nuevoArray);
  return nuevoArray;
};

palabrasConM(arrayPalabras);

//Ejercicio 2

const arrayNumeros = [1, 2, 6, 8, 15, 19, 20, 25, 26];

const numerosEnIntervalo = (num1, num2, numeros) => {
  let nuevoArray = [];
  numeros.forEach((numero) => {
    if (numero > num1 && numero < num2) {
      nuevoArray.push(numero);
    }
  });
  console.log(nuevoArray);
  return nuevoArray;
};

numerosEnIntervalo(4, 15, arrayNumeros);

//Ejerciocio 3

const arrayNumeroS = [1, 2, 6, 8, 11, 12, 13, 25, 26];

const multiplicarMayoresA = (limite, multiplicador, numeros) => {
  let nuevoArray = [];
  numeros.forEach((numero) => {
    if (numero > limite) {
      nuevoArray.push(numero * multiplicador);
    } else {
      nuevoArray.push(numero);
    }
  });
  console.log(nuevoArray);
  return nuevoArray;
};

multiplicarMayoresA(4, 10, arrayNumeros);

//Ejercicio4

const arrayNumeross = [1, 2, 3, 4, 5];

const buscarNumero = (numeros, numeroLimite) =>
  numeros.some((numero) => numero > numeroLimite)
    ? numeros.find((numero) => numero > numeroLimite)
    : "No hay numeros mayores al número dado";

// Es lo mismo que escribir

const buscarNumeroAlt = (numeros, numeroLimite) => {
  if (numeros.some((numero) => numero > numeroLimite)) {
    return numeros.find((numero) => numero > numeroLimite);
  } else {
    return "No hay numeros mayores al número dado";
  }
};

console.log(buscarNumero(arrayNumeros, 3));

//Ejerciocio 5

const arrayPalabraS = ["hola", "bienvenidos", "a", "la", "Nucbanetta"];

const buscarPalabraS = (palabras) =>
  palabras.some((palabra) => palabra.length > 4)
    ? palabras.find((palabra) => palabra.length > 4)
    : "No hay palabras con mas de 4 letras";

// Esto es lo mismo que escribir:

const buscarPalabraSAlt = (palabras) => {
  if (palabras.some((palabra) => palabra.length > 4)) {
    return palabras.find((palabra) => palabra.length > 4);
  } else {
    return "No hay una palabras con mas de 4 letras";
  }
};

console.log(buscarPalabraS(arrayPalabraS));

//Ejercicio 6

const arrayNumerosSS = [2, 4, 6, 8, 10, 12, 14];

const duplicados = (numeros) => numeros.map((num) => num * 2);

//Esto es lo mismo que :

const duplicadosAlt = (numeros) => {
  return numeros.map((num) => num * 2);
};

console.log(duplicados(arrayNumerosSS));
/* output:
[
   4,  8, 12, 16,
  20, 24, 28
]
*/

//Ejerciocio 7

function tablaDel(numero) {
  for (let i = 0; i <= 10; i++) {
    console.log(
      `El número ${numero} multiplicado por ${i} es igual a ${numero * i} `
    );
  }
}

tablaDel(10);

// Con sintaxis de flecha

const tablaDelConFlecha = (numero) => {
  for (let i = 0; i <= 10; i++) {
    console.log(
      `El número ${numero} multiplicado por ${i} es igual a ${numero * i} `
    );
  }
};

//Ejercicio 8

class Pelicula {
  constructor(titulo, duracion, año) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.año = año;
  }
}

const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
const starWars = new Pelicula(
  "Star Wars: El despertar de la fuerza",
  135,
  2015
);
const batman = new Pelicula("Batman vs Superman", 151, 2016);
const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

const arrayPeliculas = [];

arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

console.log(arrayPeliculas);

//Ejercicio 9
/*
class Peliculas {
  constructor(titulo, duracion, año) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.año = año;
  }
}

const pokemon = new Peliculas("Pokemon:La Pelicula", 75, 1998);
const avengers = new Peliculas("Avengers: Endgame", 181, 2019);
const starWars = new Peliculas(
  "Star Wars: El despertar de la fuerza",
  135,
  2015
);
const batman = new Peliculas("Batman vs Superman", 151, 2016);
const wonderWoman = new Peliculas("La Mujer Maravilla", 141, 2017);

const arrayPeliculas = [];

arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

const ordenarPorAño = () => {
  arrayPeliculas.sort(function (peli1, peli2) {
    if (peli1.año > peli2.año) {
      return 1;
    }
    if (peli1.año < peli2.año) {
      return -1;
    }
    // Si el año de la peli1 es igual al de peli 2.
    return 0;
  });
  console.log(arrayPeliculas);
};

ordenarPorAño();
*/

// Ejercicio 10
/*
class Pelicula {
  constructor(titulo, duracion, año) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.año = año;
  }
}

const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
const starWars = new Pelicula(
  "Star Wars: El despertar de la fuerza",
  135,
  2015
);
const batman = new Pelicula("Batman vs Superman", 151, 2016);
const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

const arrayPeliculas = [];

arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

console.log(arrayPeliculas);

const ordenarPorDuracion = () => {
  arrayPeliculas.sort(function (peli1, peli2) {
    if (peli1.duracion > peli2.duracion) {
      return -1;
    }
    if (peli1.duracion < peli2.duracion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
  console.log(arrayPeliculas);
};

ordenarPorDuracion();
*/

// Ejercicio 11
/*
class Pelicula {
  constructor(titulo, duracion, año) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.año = año;
  }
}

const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
const starWars = new Pelicula(
  "Star Wars: El despertar de la fuerza",
  135,
  2015
);
const batman = new Pelicula("Batman vs Superman", 151, 2016);
const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

const arrayPeliculas = [];

arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

console.log(arrayPeliculas);

const pelisLargas = (peliculas) =>
  peliculas.filter((peli) => peli.duracion > 150);

// Esto es lo mismo que
const pelisLargasAlt = (peliculas) => {
  return peliculas.filter((peli) => peli.duracion > 150);
};
console.log(pelisLargas(arrayPeliculas));
*/

// Ejercicio 12
/*
class Pelicula {
  constructor(titulo, duracion, año) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.año = año;
  }
}

const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
const starWars = new Pelicula(
  "Star Wars: El despertar de la fuerza",
  135,
  2015
);
const batman = new Pelicula("Batman vs Superman", 151, 2016);
const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

const arrayPeliculas = [];

arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

console.log(arrayPeliculas);
*/

// Ejercicio 13
/*
class Pelicula {
  constructor(titulo, duracion, año) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.año = año;
  }
}

const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
const starWars = new Pelicula(
  "Star Wars: El despertar de la fuerza",
  135,
  2015
);
const batman = new Pelicula("Batman vs Superman", 151, 2016);
const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

const arrayPeliculas = [];

arrayPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);

console.log(arrayPeliculas);

const totalDeMinutos = (peliculas) =>
  peliculas.reduce((acc, curr) => acc + curr.duracion, 0);

// Es lo mismo que poner:

const totalDeMinutosAlt = (peliculas) => {
  let duracionTotal = peliculas.reduce((acc, curr) => acc + curr.duracion, 0);
  return duracionTotal;
};

console.log(
  `La cantidad total de minutos de las peliculas es de ${totalDeMinutos(
    arrayPeliculas
  )} minutos.`
);
*/