//funcioN
//pedimos los datos a la persona.(nombre - edad)
// indicar si la pérsona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Erika";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 13;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



function devolverString(str) {
  document.write(str);
  /* console.log(str) */
}
devolverString("Hola" + "</br>")

//Función flecha

const devolverString2 = str =>
document.write(str)
/* console.log(str) */
devolverString2("Hola con función flecha" + "</br>")

/* --------------------------------------------------------------------------------------------- */

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  document.write(x + y + "</br>")
 /* console.log((x + y) + " </br>") */
}
suma(10, 20)

//Función flecha

const suma2 = (x,y) => {
  document.write("suma con función flecha: " + (x + y) + " </br>")
  /* console.log("suma con función flecha: " + (x + y) + " </br>") */
}
suma2(10, 20)

/* --------------------------------------------------------------------------------------------- */


function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  document.write(x - y + "</br>")
 /*  console.log((x - y) + " </br>") */
}
resta(100, 80)

//Función flecha

const resta2 = (x,y) => {
  document.write("resta con función flecha: " + (x - y) + " </br>")
  /* console.log("resta con función flecha: " + (x - y) + " </br>") */
}
resta2(100, 80)

/* --------------------------------------------------------------------------------------------- */

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  document.write(x * y + " </br>")
  /* console.log((x * y) + " </br>") */
}
multiplica(10, 50)

//Función flecha

const multiplica2 = (x,y) => {
  document.write("multiplicación con función flecha: " + (x * y) + "</br>")
  /* console.log("multiplicación con función flecha: " + (x * y) + " </br>") */
}
multiplica2(10, 50)

/* --------------------------------------------------------------------------------------------- */

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  document.write(x / y + " </br>")
  /* console.log(x / y + " </br>") */
}
divide(100, 50)

//Función flecha

const divide2 = (x,y) => {
  document.write("división con función flecha: " + (x / y) + " </br>")
  /* console.log("división con función flecha: " + (x / y) + " </br>") */
}
divide2(100, 50)


/* --------------------------------------------------------------------------------------------- */

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  document.write((x === y) + " </br>")
  /* console.log((x === y) + " </br>") */
}
sonIguales(10,20)

//Función flecha

const sonIguales2 = (x,y) => {
  /* document.write("son iguales, con función flecha: " + (x === y) + "</br>") */

  if (x===y) {
    document.write("usando if, " + true + " </br>")
  }else{
    document.write("usando else, " + false + " </br>")
  }

  /* if (x===y) {
    console.log("usando if, " + true + " </br>")
  }else{
    console.log("usando else, " + false + " </br>")
  } */
}
sonIguales2(20, 10)

/* --------------------------------------------------------------------------------------------- */

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:

  document.write("tienen la misma longitud: " + (str1.length === str2.length) + " </br>")
 /* console.log("tienen la misma longitud: " + (str1.length === str2.length) + " </br>") */

}
tienenMismaLongitud("Paola", "Erika")


//Función flecha

const tienenMismaLongitud2 = (str1, str2) => {
  document.write("tienen la misma longitud2: " + (str1.length === str2.length) + " </br>")
  /* console.log("tienen la misma longitud2: " + (str1.length === str2.length) + " </br>") */
}
tienenMismaLongitud2("Paola", "Andreina")

/* --------------------------------------------------------------------------------------------- */

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:

  document.write("número menor que 90: " + (num<90) + "</br>")
}
menosQueNoventa(110)

//Función flecha

const menosQueNoventa2 = (num) => {
  document.write("número menor que 90 con función flecha: " + (num<90) + "</br>")
}
menosQueNoventa2(90)


/* --------------------------------------------------------------------------------------------- */

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  document.write("número mayor que 50: " + (num>50) + "</br>")
}
mayorQueCincuenta(60)

//Función flecha

const mayorQueCincuenta2 = (num) => {
  document.write("número mayor que 50 con función flecha: " + (num>50) + "</br>")
}
mayorQueCincuenta2(90)


/* --------------------------------------------------------------------------------------------- */

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  document.write("módulo: " + (x%y) + " </br>")
}
obtenerResto(21,5)

//Función flecha

const obtenerResto2 = (x,y) => {
  document.write("módulo con función flecha : " + (x%y) + " </br>")
}
obtenerResto2(20,4)

/* --------------------------------------------------------------------------------------------- */

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

  document.write("¿es par?: " + (num%2===0) + " </br>")
}
esPar(11)

//Función flecha

const esPar2 = (num) => {
  document.write("¿es par?, con función flecha: " + (num%2===0) + " </br>")
}
esPar2(11)

//Función flecha obtimizada

const esPar3 = (num) => {document.write("¿es par?, con función flecha obtimizada: " + (num%2===0) + " </br>")};esPar3(11)



/* --------------------------------------------------------------------------------------------- */

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  document.write("¿es impar?: " + (num%2 !== 0) + " </br>")
}
esImpar(10)

//Función flecha

const esImpar2 = (num) => {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  document.write("¿es impar?, con función flecha: " + (num%2 !== 0) + " </br>")
}
esImpar2(10)



/* --------------------------------------------------------------------------------------------- */

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  document.write("elevado al cuadrado: " + (Math.pow(num, 2)) + " </br>")
}
elevarAlCuadrado(4)

//Función flecha

const elevarAlCuadrado2 = (num) => {
  document.write("cuadrado con función flecha: " + (Math.pow(num, 2)) + " </br>")
}
elevarAlCuadrado2(2)


/* --------------------------------------------------------------------------------------------- */

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  document.write("elevado al cubo: " + (Math.pow(num, 3)) + " </br>")
}
elevarAlCubo(2)

//Función flecha

const elevarAlCubo2 = (num) => {
  document.write("cubo con función flecha: " + (Math.pow(num, 3)) + " </br>")
}
elevarAlCubo2(2)


/* --------------------------------------------------------------------------------------------- */

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  document.write("elevar al exponente: " + (Math.pow(num, exponent)) + " </br>")
}
elevar(2,5)

//Función flecha

const elevar2 = (num, exponent) => {
  document.write("elevar al exponente con función flecha: " + (Math.pow(num, exponent)) + " </br>")
}
elevar2(2,6)
/* --------------------------------------------------------------------------------------------- */

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  document.write("redondear número: " + (Math.round(num)) + " </br>")
}
redondearNumero(6.73)

//Función flecha

const redondearNumero2 = (num) => {
  document.write("redondear número con función flecha: " + (Math.round(num)) + " </br>")
}
redondearNumero2(6.73)


/* --------------------------------------------------------------------------------------------- */

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  document.write("redondear número hacia arriba: " + (Math.ceil(num)) + " </br>")
}
redondearHaciaArriba(5.4)

//Función flecha

const redondearHaciaArriba2 = (num) => {
  document.write("redondear número hacia arriba, con función flecha: " + (Math.ceil(num)) + " </br>")
}
redondearHaciaArriba2(5.4)



/* --------------------------------------------------------------------------------------------- */

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  document.write("número random: " + (Math.random(0,1)) + " </br>")
}
numeroRandom() 

//Función flecha

const numeroRandom2 = () => {
  document.write("número random, con función flecha: " + (Math.random(0,1)) + " </br>")
} 
numeroRandom2() 

/* --------------------------------------------------------------------------------------------- */

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

}

//Función flecha



/* --------------------------------------------------------------------------------------------- */

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

}

//Función flecha



/* --------------------------------------------------------------------------------------------- */

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:

}

//Función flecha



/* --------------------------------------------------------------------------------------------- */

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:

}

//Función flecha



/* --------------------------------------------------------------------------------------------- */

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:

}

//Función flecha



/* --------------------------------------------------------------------------------------------- */

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

}

//Función flecha



/* --------------------------------------------------------------------------------------------- */

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí


}

//Función flecha



/* --------------------------------------------------------------------------------------------- */

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

}

//Función flecha



/* --------------------------------------------------------------------------------------------- */


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí


}

//Función flecha



/* --------------------------------------------------------------------------------------------- */