
/* switch  */
/* let semaforo = Number(prompt ( "elije un color del semaforo: 1 = Rojo, 2= Amarillo, 3= Verde"))
switch (semaforo) {
    case 1:
      document.write ("no podes Pasar")
      break;
    case 2:
        document.write ("Precaucion")
      break;
    case 3:
        document.write ("Podes Avanzar")
      break;
    default:
        document.write ("Elejí 1 - 2 o 3 no me la compliques")
      break;
  } */

/* let nombre = prompt ( "decime tu nombre")
let recomendaciones = prompt(`Hola ${nombre} vamos a darte recomendaciones, elije: serie - pelicula - libros`)

switch (recomendaciones) {    // RESOLVER USANDO LOS METODOS DE STRING (ESTUDIAR)
    case "Serie":
      document.write (`${nombre}, te recomendamos House of Dradon`)
      break;
    case "Pelicula":
        document.write (`${nombre}, te recomendamos El Efecto Mariposa`)
      break;
    case "Libro":
        document.write (`${nombre}, te recomendamos El Solitario - Guy Des Cars`)
      break;
    default:
        document.write ("Te recomendamos que elijas una opción correcta")
      break;
  } */

  //Métodos de String   (ESTUDIAR)

  /* Sentencia while                */

/*   let numero = Number(prompt ("elije un número"))

  while(numero < 10){
    numero++
    document.write(numero)
  } */

  /* Sentencia do while                */

/*   let numero = Number(prompt ("elije un número"))
  
  do{
    document.write(numero + "<br>");
    numero++;
    } while(numero <= 6) */


    /* BREAK       */
/* let numero = Number(prompt ("elije un número"))

while(numero < 1000){
    numero++;
    document.write(numero + "<br>")

//    if (numero == 10) {
//        break;
//    }
    if (numero == 900) {
      break;
  }
} */

/* Método Aleatorio - Math.random()   */

/* document.write(Math.random()) */

//  Ejercicio DADO
/* 
let dado = Math.round(Math.random()*10)

document.write(dado) */
let nombre = prompt("Decime tu nombre")

function quini6(num1, num2, num3, num4,num5, num6){
  
  document.write(`${nombre} tus números para la jugada de hoy son los siguientes, ${num1} - ${num2} - ${num3} - ${num4} - ${num5} - ${num6} `)

}

quini6(Math.floor(Math.random()*46))

