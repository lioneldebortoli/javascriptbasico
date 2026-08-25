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