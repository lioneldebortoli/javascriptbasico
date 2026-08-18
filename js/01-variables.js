//esto es un comentario de una linea

/* comentario multiliea */

let precioCompra;

let descuento;

let nombre;

let apellido = "perez";

/* = operador de asignacion */
nombre = "Alejandro";

console.log("Hola Mundo");

console.log(nombre);

nombre = "Mariano";

console.log("Bienvenido "+ nombre + "por que lalala" + apellido);

console.log(`Bienvenido ${nombre} ${apellido}`);  //template string

//tipos de varibales

let number = 3; //variable mutable, respeta scoope local y global.

var name = "Juan"; //variable mutable, no respeta scope. (no utilizar)

const lastName = "Basso";

console.log(lastName);

// const lastName = "Herrera"

console.log("Hola Mundo");
console.info("Hola Mundo");
console.warn("Hola Mundo");
console.error("Hola Mundo");
console.warn("Hola Mundo");

// alert("Bienvenido")

// const nombreUsuario = prompt("Ingresa tu nombre");
 
//console.log(nombreUsuario);

// document.writeln(`Bienvenido ${nombreUsuario}`)

// let num1 = Number(prompt("Ingrese un numero"))

// console.log(numb1);

let numUno = parseInt(prompt("Ingrese un numero "))

let numDos = parseInt(prompt("Ingrese otro numero")) 

let suma;

suma = numUno + numDos;

document.writeln(`El valor de la suma de los numeros ingresados es ${suma}`);

console.log(2 == "2"); //igualdad debil

console.log(2 === "2"); //igualdad estricta