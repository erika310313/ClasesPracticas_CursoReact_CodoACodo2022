/* alert('hola') */

/* // LOS OPERADORES MATEMÁTICOS

let suma = 1 + 1
let multiplicacion = 2 * 2
let resta = 2 -2 
let division = 2 / 2 */

/* //MODULO

/* let modulo = 21 % 7 */

/* let modulo = 24 % 7 */

/*  21 % 5 = 1      // 5 * 4 = 20   // 21 - 20 = 1  
    21 % 6 = 3      // 6 * 3 = 18   // 21 - 18 = 3
    21 % 7 = 0      // 7 * 3 = 21   // 21 - 21 = 0  */

/* document.write(modulo) */


/* //OBJETOS GLOBALES Y METODOS

Number
String
Math */

/* // Math.pow

Math.pow(2,2) = 4;
Math.pow(3,2) = 9;
Math.pow(3,3) = 27; */


/* //Math.round; Math.floor; Math.ceil

Math.round(6.5) = 7;    // redondea hacia el entero más cercano
Math.round(6.45) = 6;    // redondea hacia el entero más cercano
Math.floor(6.999) = 6;    // siempre redondeará hacia el número entero más cercano hacia abajo
Math.ceil(6.0001) = 7;    // siempre redondeará hacia el número entero más cercano hacia arriba */


/* //Método .length

let nombre = "Juan Cruz"

document.write(nombre + "</br>")

document.write(nombre.length) */

/* //crear un programa que pida por prompt el nombre a la persona
//por prompt la edad a la persona
//salude con un alert "hola nombre tu edad es: edad"
//va a mostrar en el documento: La cantidad de letras de tu nombre sumado a tu edad da un resultado de: resultado

let nombre = prompt('Escribe tu nombre');
let edad = parseInt(prompt('Escribe tu edad'));

alert("hola " + nombre + " tu edad es: " + edad);

let resultado = nombre.length + edad;
document.write("La cantidad de letras de tu nombre sumado a tu edad da un resultado de: " + resultado); */


/* let nombre1 = prompt('decime tu nombre');
let edad = parseInt(prompt('decime tu edad'));

alert("hola " + nombre1 + " tu edad es: " + edad);

// document.write(nombre1 + "la cantidad de letras de tu nombre sumado a tu edad da un resultado de: " + (nombre1.length + edad));

let resultado = nombre1.length + edad; 

//document.write(nombre1 + " la cantidad de letras de tu nombre sumado a tu edad da un resultado de: " + resultado);

document.write(`tu nombre es ${nombre1} tu edad es ${edad} el resultado es: ${resultado}`) */

//OPERADORES DE COMPARACIÓN

let name = "Bruno"
let surname = "Madrigal"
let year = 1985
let year1 = 19
let year2 = "1985"

let boolean = true
let boolean2 = "true"

/* let comparation = year == year2  // Es TRUE porque no compara el tipo de dato */
/* let comparation = year === year2    // Es FALSE porque los 3 iguales comparan el tipo de dato */
/* let comparation = year1 > year   // TRUE */
/* let comparation = year1 < year    // FALSE */
/* let comparation = year1 <= year     //FALSE */


//AND
/* let comparation = year < year1 && boolean === boolean2
          //            false           false           */

/* let comparation = year < year1 && boolean == boolean2
          //            false           true             */

let comparation = (year > year1) && (boolean == true) // boolean == boolean2
          //         true                 true                      


//OR

let comparation2 = (year > year1) || (boolean === boolean2) // boolean == boolean2
          //         true                       false                      


document.write(comparation2)

// trabajar y resolver && (and) y || (or)

//trabajar y resolver != (distinto) y !== (estrictamente distinto) 