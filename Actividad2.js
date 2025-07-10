// Ejercicio 1
const promp = require("prompt-sync")();

let numero1
numero1 = parseInt(promp("Escriba el primer número: "));
let numero2
numero2 = parseInt(promp("Escriba el segundo número: "));
let suma = numero1 + numero2;
console.log("La suma es: ", suma);
