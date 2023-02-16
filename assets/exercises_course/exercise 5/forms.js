function converterCelsius(){

    let celsius = parseFloat (document.getElementById("celsius1").value)

    document.getElementById("resultado1").innerHTML = "a temperatura em fahreinheit é: " + (5 * (celsius-32)/9)


}