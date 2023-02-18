function transformandoDiasHoras(){

let minutos = parseFloat (document.getElementById("minutos").value)

let hora = 60

let horasOperacao = transformandoHora(minutos,hora)

function transformandoHora(){

return minutos / hora 

}

let dia = 1440 

let diasOperacao = transformandoDia(minutos,dia)

function transformandoDia(){
    return minutos / dia
}

document.getElementById("horas").innerHTML = horasOperacao + " horas"

document.getElementById("dias").innerHTML = diasOperacao + " dias"
}