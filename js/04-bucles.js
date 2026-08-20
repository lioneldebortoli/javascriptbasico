//while, do-while, for

//WHILE
/*while (condicion logica) {
    todas las lineas de codigo que quiero repetir varias veces
    agregamos una linea de codigo que tienda a que la condicion logica no se cumpla 
}*/

/* do {
    todas las lineas de codigo que quiero repetir varias veces
    agregamos una linea de codigo que tienda a que la condicion logica no se cumpla 
} while (condition);*/

/* const pantalla = document.getElementById("pantalla")

let contador = 1;

while (contador <= 100) {
    pantalla.innerHTML += `<p>Fila ${contador}topitos</p>`
    //contador = contador + 1;
    contador++
} */

/* let saldo = 100000;

do {
  const opcion = prompt(
    "Ingresa una opcion: 1-Consultar el saldo || 2-Ingresar dinero || 3-Extraer dinero",
  );

  switch (opcion) {
    case "saldo":
    case "1":
    case 1:
      //aqui agregamos todas las lineas de codigo que necesito para la ocion 1
      alert(`Tu saldo es $ ${saldo}`);
      break;
    case "deposito":
    case "2":
    case 2:
      const deposito = parseFloat(
        prompt("Ingrese el monto que deseas depositar"),
      );
      saldo = saldo + deposito;
      alert(`Ingresaste $ ${deposito}, tu saldo actual es $ ${saldo}`);
      break;
    case "extraer":
    case "3":
    case 3:
      const extraer = parseFloat(prompt("Ingrese el monto a extraer"));
      //verificar si el usuario puede extraer el monto solicitado
      if (extraer <= saldo) {
        saldo = saldo - extraer;
        alert(`Extraiste $ ${extraer}, tu saldo actual es $ ${saldo}`);
      } else {
        alert("Fondos insuficientes");
      }
      break;
    default:
      alert("Ingresaste una opcion erronea");
      break;
  }
} while (confirm("Quieres realizar otra accion"));*/

do {
  let nombre = prompt("Ingrese un nombre");
  let edad = parseInt(prompt("Ingrese una edad"));
  let categoria = "";

  switch (true) {
    case edad < 13:
      categoria = "infantil";
      break;
    case edad >= 13 && edad <= 17:
      categoria = "juvenil";
      break;
    case edad >= 18:
      categoria = "adulto";
      break;
    default:
      categoria = "no valida";
      break;
  }

  let posicion = prompt(
    "Elije entre: arquero, defensor, mediocampista, delantero",
  );
  let goles = parseInt(prompt("Ingrese los goles que hizo"));
  let resultado = "";

  switch (posicion) {
    case "arquero":
      resultado = "Jugador " + categoria + ", Arquero";
      break;

    case "defensor":
      resultado = "Jugador " + categoria + ", Defensor";
      break;

    case "mediocampista":
      resultado = "Jugador " + categoria + ", Mediocampista";
      break;

    case "delantero":
      switch (categoria) {
        case "adulto":
          switch (true) {
            case goles >= 10:
              resultado = "Jugador adulto, Delantero destacado";
              break;
            case goles >= 5 && goles <= 9:
              resultado = "Jugador adulto, Buen delantero";
              break;
            default:
              resultado = "Jugador adulto, Debe mejorar su rendimiento";
              break;
          }
          break;

        default:
          resultado = "Jugador " + categoria + ", Delantero";
          break;
      }
      break;

    default:
      resultado = "Posición no válida";
      break;
  }

  alert(nombre + " es " + resultado);
} while (confirm("Quieres crear otro jugador?"));
