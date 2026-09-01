function mostrarPeliculas(notas) {
    pantalla.innerHTML += `<h2>Lista de peliculas - elementos: ${peliculas.length}`

    pantalla.innerHTML += `<p>Notas: ${notas}`

    let listapeliculas = "<ul>";
    for (let i = 0; i < peliculas.length; i++) {
        listapeliculas += `<li>${i} - ${peliculas[i]} </li>` 
    }
    listapeliculas += "</ul>"; 

    pantalla.innerHTML += listapeliculas;

}

// Como declarar un array vacio
const colores = [];

// Como declarar un array con datos
const peliculas = [
  "STAR WARS: Episodio 1",
  "STAR WARS: Episodio 2",
  "F1",
  "El caballero de la noche",
  1,
  2006,
  true,
];

console.log(peliculas);
console.log(peliculas[1]);

const pantalla = document.getElementById("pantalla")
pantalla.innerHTML = `<p>El array de peliculas tiene ${peliculas.length} elementos `

pantalla.innerHTML += peliculas;

mostrarPeliculas("Arreglo Original")


//Metodos de Arrays

peliculas.unshift("Jurassic Park", "Jurassic Park II");
mostrarPeliculas("Agregamos dos elementos al principio")

peliculas.push("Interestellar",)
mostrarPeliculas("Agregar al final del array el elemento")

peliculas.splice(6, 0, "La vida es bella")
mostrarPeliculas("Agregamos a la posicion 6 del array un elemento")

// Modificar elementos del array
peliculas[7] = "Black Mirror"
mostrarPeliculas("Modificamos un elemento del array")

// Eliminar elemento del array 
peliculas.shift()
mostrarPeliculas("Eliminamos el primero elemento del array")

peliculas.pop()
mostrarPeliculas("Eliminamos el ultimo elemento del array")

const sagaStarWar = peliculas.filter((pelicula) => typeof pelicula === "string" && pelicula.toLowerCase().includes("star"))
console.log("Saga de Star Wars", sagaStarWar);

const aniosEstreno = [2010, 2012, 2013, 2020, 2015]
const anioFiltrado = aniosEstreno.filter((item) => item >= 2012)
console.log(anioFiltrado);

const peliculaBuscada = peliculas.find((peli)=>peli.toLowerCase().includes("jurassic"))
console.log(peliculaBuscada);

const indicePeliBuscada = peliculas.findIndex((peli)=>peli.toLowerCase().includes("vida"))
console.log(indicePeliBuscada);

pantalla.innerHTML += "<h2 class=text>danger>Peliculas de Star Wars </h2>"

let itemStarWars = sagaStarWar.map((peli) => `<li> ${peli} </li>`).join("")
pantalla.innerHTML += `<ul> ${itemStarWars} </ul>`