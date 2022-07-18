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