// Escribir una función que determina si un número es primo o no
function esPrimo(numero){
    if (numero <=1) {
        return false
    }

    for(let i = 2; i < numero; i++){
        if(numero % i === 0){

        }
    }

    return true;
}

console.log(esPrimo(2));