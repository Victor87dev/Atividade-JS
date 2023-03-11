/*
function tabuada(){
let numero = document.getElementById("numero").value
let resposta = "";
for(var i = 1;i <=10 ;i++){
   resposta += numero + "x" + i + "=" + (numero*i) + "<br />"
   document.getElementById("resposta").innerHTML = resposta
}

}
*/


function vidaPersonagem(saudes,danoo){
    let dano = document.getElementById("danos").value
    let saude = 100
 
     if(saude > dano){
         document.getElementById("resposta").innerHTML = false 
     }else{
         document.getElementById("resposta").innerHTML = true
     }
 
     
 }