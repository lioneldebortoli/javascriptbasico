//Cree un programa al estilo de un cajero automatico con las siguientes opciones:
//Consultar el saldo
//Ingresar dinero
//Extraer dinero

let saldo = 100000;

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

//Ejemplo de lo que tenemos que evitar
/* if (opcion === "1") {
  alert("Consultar Saldo");
} else if (opcion === "2") {
  alert("Aqui tenemos que ingresar dinero");
} else if (opcion === "3") {
  alert("Aqui tenemos que extraer dinero");
} else {
  alert("Ingrese una opcion valida");
}
*/
