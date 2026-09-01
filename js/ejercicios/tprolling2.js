// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// do {
//   const edad = parseInt(prompt("Ingrese su Edad"));
//   if (edad >= 18) {
//     alert("Ya puedes conducir");
//   }
//   if (edad <= 17) {
//     alert("No puedes conducir");
//   } else {
//     alert("La edad ingresada es un numero no valido");
//   }
// } while (confirm("Quieres ingresar otra edad"));

//2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente
// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
// Ejemplo:
// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido

/*
do {
  const nota = parseInt(prompt("Ingrese la nota del examen: "));
  switch (true) {
    case nota > 10 || nota < 0:
      alert("Numero Erroneo");
      break;
    case nota <= 2:
      alert("Muy deficiente");
      break;
    case nota <= 4:
      alert("Insuficiente");
      break;
    case nota <= 6:
      alert("Suficiente");
      break;
    case nota === 7:
      alert("Bien");
      break;
    case nota <= 9:
      alert("Notable");
      break;
    case nota === 10:
      alert("Sobresaliente");
      break;
    default:
      alert("Introduce un numero valido");
      break;
  }
} while (confirm("Quieres ingresar otra nota?"));


3- Realiza un script que pida cadenas de texto hasta que se pulse "cancelar".
Al salir deben mostrarse todas las cadenas concatenadas con un guión.

let texto = "";
let cadena;

do {
    cadena = prompt("Ingrese una cadena de texto:");

    if (cadena !== null) {
        if (texto === "") {
            texto = cadena;
        } else {
            texto += "-" + cadena;
        }
    }

} while (cadena !== null);

alert(texto);
*/


/*
4- Realiza un script que pida números hasta que se pulse "cancelar".
Si no es un número deberá indicarse con un alert.
Al salir deberá indicarse la suma total.

let suma = 0;
let numero;

do {
    numero = prompt("Ingrese un número:");

    if (numero !== null) {

        if (isNaN(numero)) {
            alert("No es un número válido");
        } else {
            suma += parseFloat(numero);
        }

    }

} while (numero !== null);

alert("La suma total es: " + suma);
*/


/*
5- Calcular la letra de un DNI.

let dni;

do {

    dni = prompt("Ingrese su DNI:");

    if (dni !== null) {

        if (isNaN(dni)) {

            alert("Introduce un número válido");

        } else if (dni < 0 || dni > 99999999) {

            alert("El número debe estar entre 0 y 99999999");

        } else {

            const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            const resto = parseInt(dni) % 23;

            alert("La letra del DNI es: " + letras[resto]);

        }
    }

} while (dni !== null);
*/


/*
6- Pirámide del 1 al 30.

for (let numero = 1; numero <= 30; numero++) {

    let texto = "";

    for (let cantidad = 1; cantidad <= numero; cantidad++) {
        texto += numero;
    }

    document.write(texto + "<br>");

}
*/


/*
7- Pirámide inversa.

const numero = parseInt(prompt("Ingrese un número entre 1 y 50:"));

if (numero >= 1 && numero <= 50) {

    for (let i = numero; i >= 1; i--) {

        let texto = "";

        for (let cantidad = 1; cantidad <= i; cantidad++) {
            texto += i;
        }

        document.write(texto + "<br>");
    }

} else {

    alert("Número erróneo");

}
*/


/*
8- Pirámide con números del 1 hasta el número indicado.

const numero = parseInt(prompt("Ingrese un número entre 1 y 50:"));

if (numero >= 1 && numero <= 50) {

    for (let i = 1; i <= numero; i++) {

        let texto = "";

        for (let j = 1; j <= i; j++) {
            texto += j;
        }

        document.write(texto + "<br>");
    }

} else {

    alert("Número erróneo");

}
*/


/*
9- Números del 1 al 500, múltiplos de 4 y 9.
Cada 5 líneas muestra una línea horizontal.

for (let numero = 1; numero <= 500; numero++) {

    let texto = numero;

    if (numero % 4 === 0) {
        texto += " (Múltiplo de 4)";
    }

    if (numero % 9 === 0) {
        texto += " (Múltiplo de 9)";
    }

    document.write(texto + "<br>");

    if (numero % 5 === 0) {
        document.write("-----------------------------<br>");
    }

}
*/


/*
10- Tabla de filas y columnas con números consecutivos
en orden descendente.

const filas = parseInt(prompt("Ingrese la cantidad de filas:"));
const columnas = parseInt(prompt("Ingrese la cantidad de columnas:"));

let numero = filas * columnas;

for (let i = 1; i <= filas; i++) {

    for (let j = 1; j <= columnas; j++) {

        document.write(numero + " ");
        numero--;

    }

    document.write("<br>");
}
*/


/*
11- Pedir 3 edades y 3 nombres e indicar el nombre del mayor.

const nombre1 = prompt("Ingrese el primer nombre:");
const edad1 = parseInt(prompt("Ingrese la edad de " + nombre1));

const nombre2 = prompt("Ingrese el segundo nombre:");
const edad2 = parseInt(prompt("Ingrese la edad de " + nombre2));

const nombre3 = prompt("Ingrese el tercer nombre:");
const edad3 = parseInt(prompt("Ingrese la edad de " + nombre3));

const mayor = Math.max(edad1, edad2, edad3);

if (mayor === edad1) {
    alert("El mayor es " + nombre1);
} else if (mayor === edad2) {
    alert("El mayor es " + nombre2);
} else {
    alert("El mayor es " + nombre3);
}
*/


/*
12- Generar un número aleatorio entre 1 y 99.

const numero = Math.floor(Math.random() * 99) + 1;

alert("El número aleatorio es: " + numero);
*/


/*
13- Pedir un texto y mostrarlo en mayúsculas.

const texto = prompt("Ingrese un texto:");

alert(texto.toUpperCase());
*/


/*
14- Mostrar una cadena poniendo un guión entre cada carácter,
sin utilizar replace().

const texto = prompt("Ingrese un texto:");
let resultado = "";

for (let i = 0; i < texto.length; i++) {

    resultado += texto[i];

    if (i < texto.length - 1) {
        resultado += "-";
    }

}

alert(resultado);
*/


/*
15- Contar el número de vocales de un texto.

const texto = prompt("Ingrese un texto:");
let cantidad = 0;

for (let i = 0; i < texto.length; i++) {

    if (
        texto[i] === "a" ||
        texto[i] === "e" ||
        texto[i] === "i" ||
        texto[i] === "o" ||
        texto[i] === "u"
    ) {
        cantidad++;
    }

}

alert("El texto tiene " + cantidad + " vocales");
*/


/*
16- Pedir una cadena de texto y devolverla al revés.

const texto = prompt("Ingrese un texto:");
let resultado = "";

for (let i = texto.length - 1; i >= 0; i--) {
    resultado += texto[i];
}

alert(resultado);
*/


// 17- Mostrar la posición de la primera vocal.

const texto = prompt("Ingrese un texto:");
let posicion = -1;
let vocal = "";

for (let i = 0; i < texto.length; i++) {

    if (
        texto[i] === "a" ||
        texto[i] === "e" ||
        texto[i] === "i" ||
        texto[i] === "o" ||
        texto[i] === "u"
    ) {

        posicion = i;
        vocal = texto[i];
        break;

    }

}

if (posicion !== -1) {
    alert("La vocal '" + vocal + "' está en la posición " + posicion);
} else {
    alert("No se encontró ninguna vocal");
}