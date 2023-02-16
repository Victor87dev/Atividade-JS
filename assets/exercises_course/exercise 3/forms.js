
function numeroTrue (){

    let numero1 = parseInt (document.getElementById("numero1").value)
    let numero2 =  parseInt (document.getElementById("numero2").value)
    let numero3 = parseInt (document.getElementById("numero3").value)

    let maior = Math.max(numero1,numero2,numero3)

    document.getElementById("resultado1").innerHTML = "numero maior é: " + maior


   

}