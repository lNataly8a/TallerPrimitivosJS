// Ejercicio 1

for (let i = 1; i<11; i++){
    console.log(i)
}

// Ejercicio 2

const promp = require("prompt-sync")();

let numero;
numero = parseInt(promp("Ingrese un número para ver su tabla: "));
for(let i=1; i<11; i++){
    let resultado=numero*i
    console.log(numero," X ",i," = ",resultado)
}