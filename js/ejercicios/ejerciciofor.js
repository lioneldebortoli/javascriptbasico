/*Crear un programa que le pida a un docente ingresar las notas de **3 exámenes** de un alumno usando `prompt()`.
Utilizando un bucle `for`:

1. Pedir cada nota (del 1 al 10) indicando el número de examen en el mensaje.
2. Sumar las 3 notas ingresadas.
3. Al finalizar el bucle, calcular el promedio final y mostrarlo en consola.
4. _(Opcional simple)_ Si el promedio es 7 o más mostrar `"Aprobado"`, de lo contrario `"Desaprobado"`*/

let suma = 0;

for (let nota = 1; nota <= 3; nota++) {
    let examen = parseFloat(prompt(`Ingrese la nota del examen ${nota} del 1 al 10:`))
    
    suma += examen;
}

let promedio = suma / 3;

console.log(`Promedio final: ${promedio}`)
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML += `Promedio final: ${promedio}`;

if (promedio >= 7) {
    pantalla.innerHTML += `<br>Aprovado`
} else {
    pantalla.innerHTML += `<br>Desaprovado`
}