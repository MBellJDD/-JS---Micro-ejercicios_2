function comparar(){
    let numero1=parseFloat(document.getElementById("n1").value);
    let numero2=parseFloat(document.getElementById("n2").value);
    let mayor=0;
    if (numero1>numero2){
        mayor=numero1;
    }else{
        mayor=numero2;
    }
    document.getElementById("text1").innerHTML= "Este es el mayor: " +mayor;
}