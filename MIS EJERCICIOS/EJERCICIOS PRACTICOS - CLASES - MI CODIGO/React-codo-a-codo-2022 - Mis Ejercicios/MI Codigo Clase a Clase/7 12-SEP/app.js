
//ARRAY - MATRIZ - ARREGLO

/* let instrumentos = ["piano", "trompeta", "bajo", 1, 5, true, false]
            //          1       2           3    4  5   6       7 */



//SCOPE

/* function sumar(num1, num2) {
    return num1 + num2
}
sumar(5,6) */

//ARROW 

/* function sumar(a) {    //funcion normal
    return a + 100;
}

const sumar = a=> {    //funcion flecha
    return a + 100
} */


/* const sumar = (num1, num2)=> {
    return num1 + num2;
}
sumar(5,6) */


/* function resultado(sumar){    //callback, llama a otra funcion dentro de una función
    return num1 + num2
}
resultado(sumar); */


//-------------------------------------------------------------------------------------------------------------------------

//TAREA 
/* Operadores de comparación y su funcionalidad
&&  and
||   or
!=
!==

*/

/* let num1 = 10;
let num2 = 20;
let num3 = "10" */


//AND
/* let resultado = (num1 > num2) && (num3 == num1);
            //      false              true */

/* let resultado = (num1 < num2) && (num3 == num1);
            //      true              true */

/* let resultado = (num1 < num2) && (num3 === num1);
            //      true              false */

//OR

/* let resultado = (num1 < num2) || (num3 == num1);
            //      true              true       */

/* let resultado = (num1 > num2) || (num3 === num1);
            //      true              false          */

/* let resultado = (num1 > num2) || (num3 === num1);
            //      false              false

document.write(resultado) */



/* // NOT 
// ('!==')    no es igual
// Esto devolverá verdadero si los articulos no son iguales entre si de alguna manera

1 !== 1;                 //false
1 !== "1";              //true
"perro" !== "perro";     //false
"perro" !== "Perro"     // true */


// FLUJO DE CONTROL

/* if (condition){

}else {

} */


//let edad = 18;
//let edad = 7;
//let edad = 40;

/* if (edad >= 18){
    document.write("Podés Pasar")
}else {
    document.write("NO Podés Pasar")
} */


/* if (edad >= 18){
    console.log("Podés Pasar")
}else {
    console.log("NO Podés Pasar")
} */

/* if (edad >= 18){
    return"Podés Pasar"
}else {
    return"NO Podés Pasar"
} */



//TAREA
//PEDIMOS LOS DATOS A LA PERSONA (NOMBRE - EDAD)
//INDICAR SI LA PERSONA ES MAYOR DE 18 PUEDE PASAR
// SI LA PERSONA LLEGÓ ANTES DE LAS 2 NO PAGA ENTRADA
// SI LA PERSONA LLEGÓ DESPUES DE LAS 2 PAGA EN PESOS LA SUMA DE LAS LETRAS DE SU NOMBRE + SU EDAD


//FUNCIONES


/* function suma (num1, num2){
    document.write(num1 + num2)
}
suma(10, 10) */


/* function saludar (nombre, numero){
    document.write(`Hola ${nombre} tu número es el ${numero}`)
}
saludar(10, "Juan", 10) */


/* function saludar (nombre, numero){
    document.write(`Hola ${nombre} tu número es el ${numero}`)
}
saludar(10, "Juan", 10)   // es importante el orden de los parámetros */


/* function saludar (nombre, numero){
    document.write(`Hola ${nombre} tu número es el ${numero}`)
}
saludar(prompt("decime tu nombre"), parseInt(prompt("decime tu edad")))  */


/* function suma (num1, num2){
    document.write(num1 + num2)
}
suma(10, 10)
suma(20, 10)
suma(10, 50) */

/* function saludar (){
    document.write("hola")
}
saludar()
saludar()
saludar() */












