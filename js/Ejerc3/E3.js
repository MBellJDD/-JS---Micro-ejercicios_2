// Ejercicio 3 - Escribe un programa que pida un número y diga si es divisible por 2
/* let n1 = prompt("Escribe un número");

if (n1 % 2 === 0) {
document.write("Es divisible por 2");

} else {
document.write("No es divisible por 2");
} */

const imputNumberOne = document.getElementById("numberOne");
const btnCheck = document.getElementById("btn-take-numbers");
const resultado = document.getElementById("divisible");



function averiguarCualesmayor(numbOne){
    if (numbOne % 2 === 0) {
       resultado.innerHTML = "Si es divisible por 2"
     
 } else{
       resultado.innerHTML = "No es divisible por 2"
 }
       
}
btnCheck.addEventListener("click", () =>{
    let numbOneUser = imputNumberOne.value;
    averiguarCualesmayor(numbOneUser);
    
});