function combustivelCarro(){

    let dinheiro = parseFloat (document.getElementById("money1").value)

    let combustivel = 5.00

    let combustivelValor = operacaoCombustivel(dinheiro,combustivel)

    function operacaoCombustivel(){

        return dinheiro / combustivel 

    }

    let km = 20

    let kmValor = operacaoKm(combustivelValor,km)

    function operacaoKm(){

        return combustivelValor * km
    }

    document.getElementById("combustivel").innerHTML = "seu combustivel é: " + combustivelValor + " litros"
    document.getElementById("km").innerHTML = "você consegue rodar: " + kmValor + " km"


    

    







}