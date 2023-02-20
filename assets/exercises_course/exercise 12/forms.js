function salarioComDesconto () {

let salario = parseFloat (document.getElementById("salario").value)

let desconto = 0.11

let descontoSalario = funcaoDesconto(salario,desconto)

function funcaoDesconto(){

    return salario * desconto

}

let salarioFinal = funcaoSalarioFinal(salario,descontoSalario)

function funcaoSalarioFinal (){

    return salario - descontoSalario
}

if(descontoSalario >= 334.29){

    document.getElementById("desconto").innerHTML = `seu desconto é: ${descontoSalario} , desconto muito alto. ` 
    document.getElementById("salarioDesconto").innerHTML = `desconto não pode ser concedido`


}else{

    document.getElementById("desconto").innerHTML = "seu desconto é: " + descontoSalario
    document.getElementById("salarioDesconto").innerHTML = "seu salário com desconto é: " + salarioFinal


}

    















}