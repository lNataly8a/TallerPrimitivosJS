// Ejercicio 1

const promp = require("prompt-sync")();

let edad;
edad = promp("Ingrese su edad: ");
if(edad>=18){
    console.log("Puedes Entrar");
}else{
    console.log("No puedes entrar");
}

// Ejercicio 2

let numero = promp("Ingrese un número: ")
if(numero>0){
    console.log("El número es positivo");
}else if(numero<0){
    console.log("El número es negativo");
}else{
    console.log("El número es cero");
}