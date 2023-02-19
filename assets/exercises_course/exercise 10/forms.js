function contaRestaurante(){

let conta = parseFloat (document.getElementById("conta").value)

let gorjeta = 0.10

let valorDaGorjeta = operacaoGorjeta(conta,gorjeta)

function operacaoGorjeta(){

    return conta * gorjeta


}

document.getElementById("gorjeta").innerHTML = "o valor da gorjeta é: " + valorDaGorjeta.toFixed(2)
document.getElementById("contaGorjeta").innerHTML = "conta com a gorjeta: " + (conta + valorDaGorjeta).toFixed(2)





}