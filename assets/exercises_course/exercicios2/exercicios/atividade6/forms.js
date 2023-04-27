function calculoJuros(valorInicial,juros12){
    let juros = valorInicial * juros12  
    let valorInicialComJuros = juros + valorInicial
    return valorInicialComJuros
}

let valorInicial = 1200
let juros1 = 0.10
let juros2 = 0.20
let parcelamento = 5

let valorComJuros1 = calculoJuros(valorInicial,juros1)
let valorComJuros2 = calculoJuros(valorInicial,juros2)


switch(parcelamento) {
    case 3:
        console.log("o valor dividindo em 3x ficará: " + valorComJuros1 + " e o valor da parcela ficará: " + (valorComJuros1 / parcelamento))
    break;
    case 5:
        console.log("o valor dividindo em 5x ficará: " + valorComJuros2 + " e o valor da parcela ficará: " + (valorComJuros2 / parcelamento))
    break;
    default:
        console.log("valor de parcelamento nao informado")
    break;
}





