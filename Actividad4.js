// Ejercicio 1 

const promp = require("prompt-sync")();

let numero;
numero = parseInt(promp("Ingrese un número: "))+1;
contador = 1;
while (contador < numero){
    console.log(contador);
    contador = contador + 1;
}

// Ejercicio 2

let contraseña;
contraseña = parseInt(promp("Ingrese una contraseña: "));
while (contraseña !== 1234) {
  console.log("Contraseña incorrecta. Inténtalo de nuevo: ");
  contraseña = parseInt(promp("Ingrese una contraseña: "));
}
console.log("Contraseña correcta");