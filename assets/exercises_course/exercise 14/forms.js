function retornoInvestido(){

   
    function calculoInvestimento(c,i,t){

       let m = c * (1 + i)* t

       return m
    

    }

    let capital = parseFloat (document.getElementById('montante').value)

    let txJuros = 0.05
    let tempo = 24

    let montante = calculoInvestimento(capital,txJuros,tempo)

    document.getElementById('resultado').innerHTML = `o montante de retorno foi: ${montante.toFixed(2)}` 





}