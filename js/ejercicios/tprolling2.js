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
