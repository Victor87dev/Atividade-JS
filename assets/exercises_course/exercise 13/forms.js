function numeroDivisivelPor3(){

let number = parseInt (document.getElementById("numero").value)




if(number % 3 == 0){

    document.getElementById("resposta").innerHTML = true



}else{


    document.getElementById("resposta").innerHTML = false

}




}