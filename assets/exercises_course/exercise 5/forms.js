function converterCelsius(){

let Fahrenheit = parseFloat (document.getElementById("Fahrenheit").value)

let conversao = operacaoFahrenheit(Fahrenheit)

function operacaoFahrenheit(){

    return (5*(Fahrenheit-32)/9)
}

document.getElementById("resultado1").innerHTML = `à temperatura é: ${conversao}`


}