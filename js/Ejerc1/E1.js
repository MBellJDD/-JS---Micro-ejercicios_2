// E-1. Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.       
 
let dato1, dato2, num1, num2, resultado;

 dato1 = window.prompt("Primer numero?", "0");
 num1 = parseInt(dato1);

 dato2 = window.prompt("Segundo numero?", "0");
 num2 = parseInt(dato2);
if (num1>num2){
    resultado = "el primero";
}

else{
    resultado = "el segundo";
}

document.write(`<h3>El mayor es ${resultado}</h3>`);

