//Ejercicio N 1
/*
function imprimirNombre(nombre){
    console.log(`Hola, soy${nombre}`);
}

imprimirNombre(`Maxi`);
*/

// Con Sintaxis de fleja

const  imprimirNombre = (nombre) => {
    console.log (`Chau, soy ${nombre}`);
};

imprimirNombre (`Maxi`);


// Ejercicio N 2
/*
function Suma(num1, num2){
    console.log (num1 + num2);
}

Suma(1,2);
*/

// Con Sintaxis de fleja

const suma = (num1, num2) => {
    console.log (num1 + num2);
};

suma(2,4);


// Ejercicio N 3
/*
function sumaMultiplicados (num1, num2){
    console.log(num1 + num2 * 2);
}

sumaMultiplicados(1,2);
*/
// Con Sintaxis de fleja

const sumaMultiplicados = (num1, num2) => {
    console.log (num1 * 2 + num2 * 2);
};

sumaMultiplicados (2,4);


// Ejercicio N 4
/*
function tablaDel(numero) {
    for (let i = 0; i <= 10; i++) {
      console.log(
        `El número ${numero} multiplicado por ${i} es igual a ${numero * i} `
      );
    }
  }
  
  //tablaDel(10);
  */
  // Con sintaxis de flecha
  
  const tablaDelConFlecha = (numero) => {
    for (let i = 0; i <= 10; i++) {
      console.log(
        `El número ${numero} multiplicado por ${i} es igual a ${numero * i} `
      );
    }
  };

 tablaDelConFlecha(10);


// Ejercicio N 5
/*
 function intervaloEntre(num1, num2) {
    let numeroActual = num1;
  
    if (numeroActual > num2) {
      console.log(numeroActual);
      while (numeroActual > num2) {
        numeroActual--;
        console.log(numeroActual);
      }
    } else if (numeroActual < num2) {
      console.log(numeroActual);
      while (numeroActual < num2) {
        numeroActual++;
        console.log(numeroActual);
      }
    } else {
      console.log("Ambos números son iguales");
    }
  }
  
  intervaloEntre(25, 20);
  */
  // Con sintaxis de flecha
  
  const intervaloEntreConFlecha = (num1, num2) => {
    let numeroActual = num1;
  
    if (numeroActual > num2) {
      console.log(numeroActual);
      while (numeroActual > num2) {
        numeroActual--;
        console.log(numeroActual);
      }
    } else if (numeroActual < num2) {
      console.log(numeroActual);
      while (numeroActual < num2) {
        numeroActual++;
        console.log(numeroActual);
      }
    } else {
      console.log("Ambos números son iguales");
    }
  };
  
intervaloEntreConFlecha(25, 20);


// Ejercicio N 6
/*
function sumar(num1, num2) {
    console.log(num1 + num2);
  }
  
  function restar(num1, num2) {
    console.log(num1 - num2);
  }
  
  function multiplicar(num1, num2) {
    console.log(num1 * num2);
  }
  
  function dividir(num1, num2) {
    console.log(num1 / num2);
  }
  
  //Con sintaxis de flecha
  
  const sumarAlt = (num1, num2) => {
    console.log(num1 + num2);
  };
  
  const restarAlt = (num1, num2) => {
    console.log(num1 - num2);
  };
  
  const multiplicarAlt = (num1, num2) => {
    console.log(num1 * num2);
  };
  
  const dividirAlt = (num1, num2) => {
    console.log(num1 / num2);
  };
  
  const hacerOperación = (num1, num2, fn) => {
    fn(num1, num2);
  };
  
//Ejemplos
hacerOperación(4, 2, sumar);
hacerOperación(4, 2, restar);
hacerOperación(4, 2, multiplicar);
hacerOperación(4, 2, dividir);
*/


// Ejercicio N 7


