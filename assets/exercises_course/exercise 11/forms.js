function emprestimoBancario(){
    
let salario = parseFloat (document.getElementById("salario").value)
let prestacao = parseFloat (document.getElementById("prestacao").value)
let limite = 0.20

let salarioPrestacao = operacaoSalarioPrestacao(salario,prestacao)

function operacaoSalarioPrestacao(){
 
    return salario * limite
}

document.getElementById("resposta1").innerHTML = "20% do salário é: " + salarioPrestacao

if(prestacao >= salarioPrestacao){

document.getElementById("resposta").innerHTML = "o valor da prestação é " + prestacao + " o emprestimo não pode ser concedido."


}else{

    document.getElementById("resposta").innerHTML = "o valor da prestação é " + prestacao + " o emprestimo pode ser concedido."

}
    











}