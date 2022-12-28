/* alert('Hoolaaaa') */


/* //UpperCamelCase
let ApellidoHeroe = "Wayne"

//lowerCamelCase
ApellidoHeroe = "Bruce"

apellidoHeroe = 845

document.write(apellidoHeroe) */


//CASE SENSITIVE

/* ApellidoHeroe = true          // porque es de tipado debil

ApellidoHeroe = null

document.write(ApellidoHeroe) */


/* //VARIABLES

var nombre = 'Juan';
let apellido = 'Perez';     // Vamos a usar principalmente esta forma
const comidaFavorita = 'Pizza';

nombre = 'bruno'
//comidaFavorita = 'Pastel de Papa' // Contante no puedo cambiarla despues

document.write(comidaFavorita)

document.write("Hola " + nombre + " tu comida favorita es " + comidaFavorita)
//La diferencia entre var y let es el scope, una es global la otra depende de donde se use


console.log("Hola " + nombre + " tu comida favorita es " + comidaFavorita); */


/* // TIPOS DE DATOS

let pais = "Argentina"     //String

let fecha = 1986   //number

let numero = 10    //number

let numero2 = "10" 

let fecha2 = "1986"    //String

let encendido = true    //booleano

let variable = null   //

document.write(fecha + numero + "</br>")

document.write(fecha2 + numero + "</br>")

document.write(numero2 * numero +"</br>")

document.write(numero2 * fecha2 + "</br>")

document.write(pais * fecha2 + "</br>")

document.write(numero + numero2 + "</br>")

document.write(variable) 

document.write(batarang)    //undefined       */



//INTERACCIONES

/* var nombre = 'Juan';
let pais = "Argentina"  

alert("hola " + nombre + " como estas? " + pais) */


/* let nombre = prompt('decime tu nombre')

alert("hola " + nombre) */


/* let numeroA = prompt("decime un número")
let numeroB = prompt("decime un número") */

let numeroA = parseInt(prompt("decime un número"))
let numeroB = parseInt(prompt("decime un número"))


let resultado = numeroA + numeroB
alert("LA SUMA DE TUS NUMEROS ES: " + resultado)    //los prompt por defecto toman solo como String, hay que hacer una conversión para operarlos