// --------------------- function------------------------------

//verbo + substantivo

// atividade 1 ------------------------------------------------

/*
let corSite = "amarelo";
function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade;

};

console.log(corSite);
resetaCor("vermelho", " escuro");
console.log(corSite);
*/

// ativiade 2 -------------------------------------------------


/*
let minhaAcademia = "wefit";

function mudarAcademia(acad, local){

    minhaAcademia = acad + local;

};

console.log(minhaAcademia);
mudarAcademia("green", " jordao baixo");
console.log(minhaAcademia);
*/

// atividade 3 -----------------------------------------


/*

let id = (prompt(" entre com sua idade "))

let ano1 = 2023

let result = IdadeAtual(id,ano1)

let resultado2 = Idade(result,ano1)

function IdadeAtual(){

    return ano1 - id 
} 

alert(" o seu ano de nascimento é: " + result + " e sua idade é: " + resultado2)

function Idade(){
    return ano1 - result
}

*/


// atividade 4 -------------------------------------------------


/*
 let salarioBase = parseFloat(prompt("entre com o salario base: "))
 const gratificacao = 0.05;
 const imposto = 0.07

 let resultadoS = gratificacaoEsalario(salarioBase,gratificacao)

 function gratificacaoEsalario (){
     return salarioBase * gratificacao
 }


let resultadoFinal = (resultadoS / imposto) 

 document.write("o salario final é: " + resultadoFinal)

*/

// ativiade 5 --------------------------------------------

/*
let numero1 =  parseFloat(prompt("digite o primeiro numero : "))
let numero2 = parseFloat (prompt("digite o segundo numero: "))

let somaDosNumeros = somaFuncao(numero1,numero2)

function somaFuncao (){
    return numero1 + numero2
}


let subtracaoDosNumeros = subtracaoFuncao(numero1,numero2)

function subtracaoFuncao (){
    return numero1 - numero2
}


let divisaoDosNumeros = divisaoFuncao(numero1,numero2)

function divisaoFuncao (){
    return numero1 / numero2
}


let multiplicacaoDosNumeros = multiplicacaoFuncao(numero1,numero2)

function multiplicacaoFuncao () {

    return numero1 * numero2
}

document.write(` soma função: ${somaDosNumeros} , subtração função: ${subtracaoDosNumeros} , divisão função: ${divisaoDosNumeros} , multiplicação função: ${multiplicacaoDosNumeros}`)
alert(`soma função: ${somaDosNumeros} , subtração função: ${subtracaoDosNumeros} , divisão função: ${divisaoDosNumeros} , multiplicação função: ${multiplicacaoDosNumeros}`) 
console.log(`soma função: ${somaDosNumeros} , subtração função: ${subtracaoDosNumeros} , divisão função: ${divisaoDosNumeros} , multiplicação função: ${multiplicacaoDosNumeros}`)  

*/


// atividade 6 ---------------------------------------------------

/*
let valorDeVendas = parseFloat (prompt("digite o valor total de vendas: "))
const lucro = 0.23

let lucroDaEmpresa = calculoPorcentagem(valorDeVendas,lucro)

function calculoPorcentagem (){
    return valorDeVendas * lucro
}

document.write(`o lucro da empresa é: ${lucroDaEmpresa}`)
*/


// atividade 7 --------------------------------------------

/*
let peso = parseFloat (prompt("informe o seu peso: "))
let altura = parseFloat (prompt("informe a sua altura: "))
let idade = parseFloat (prompt("informe a sua idade: "))
let nome = (prompt("informe o seu nome: "))

let resultadoIMC = calcularImc (peso,altura)

function calcularImc (){

    return altura * altura
}

let resultadoFinal = imcCalculo (peso,resultadoIMC)

function imcCalculo (){

    return peso / resultadoIMC
}

document.write(`seu imc é: ${resultadoFinal}`)
*/

// atividade 8 -----------------------------------------------

/*
let valor1 = parseInt(prompt("insira o primeiro numero: "))
let valor2 = parseInt(prompt("insira o segundo numero: "))

let somar = somarNumeros(valor1,valor2)

function somarNumeros(){
    return valor1 + valor2
}

let subtrair = subtrairNumeros(valor1,valor2)

function subtrairNumeros(){
    return valor1 - valor2
}

let multiplicar = multiplicarNumeros(valor1,valor2)

function multiplicarNumeros(){

    return valor1 * valor2
}

let divisao = dividirNumeros(valor1,valor2)

function dividirNumeros(){

    return valor1 / valor2
}

console.log(somar)
console.log(subtrair)
console.log(multiplicar)
console.log(divisao)
*/

// atividade 9 --------------------------------------------

/*
let data = (prompt("informe o ano de nascimento da pessoa: "))
let ano = 2023

let idade = idadeSoma(ano,data)

function idadeSoma(){
    return ano - data
}

if(idade >= 18){

    alert(`${idade}, pessoa maior de idade`)

}else{

    alert(`${idade}, pessoa menor de idade`)

}
*/

// atividade 10 ------------------------------------------------

/*
let nota1 = parseFloat(prompt(" nota1: "))
let nota2 = parseFloat(prompt(" nota2: "))
let nota3 = parseFloat(prompt(" nota3: "))

let soma = somaDasNotas(nota1,nota2,nota3)

function somaDasNotas(){
    return nota1 + nota2 + nota3
}

let resultado = (soma/3)

console.log(`sua media foi: ${resultado.toFixed(2)}`)
*/


// atividade 11 ----------------------------------------------

/*
function somar(){
    
    let v1 = parseFloat (document.getElementById("v1").value)
    let v2 = parseFloat (document.getElementById("v2").value)
    document.getElementById("resultado").innerHTML = "resposta: " + (v1+v2)

  resultado.style.background = 'red'


}

function subtrair(){
    
    let v1 = parseFloat (document.getElementById("v1").value)
    let v2 = parseFloat (document.getElementById("v2").value)
    document.getElementById("resultado").innerHTML = "resposta: " + (v1-v2)

    resultado.style.background = 'blue'



}

function multi(){
    
    let v1 = parseFloat (document.getElementById("v1").value)
    let v2 = parseFloat (document.getElementById("v2").value)
    document.getElementById("resultado").innerHTML = "resposta: " + (v1*v2)


    resultado.style.background = 'yellow'

}

function dividir(){
    
    let v1 = parseFloat (document.getElementById("v1").value)
    let v2 = parseFloat (document.getElementById("v2").value)
    document.getElementById("resultado").innerHTML = "resposta: " + (v1/v2)


    resultado.style.background = 'green'

}

function todasRespostas(){
    let v1 = parseFloat (document.getElementById("v1").value)
    let v2 = parseFloat (document.getElementById("v2").value)
    document.getElementById("Resultados").innerHTML = "resposta da soma: " + (v1+v2) + " resposta subtração: " + (v1-v2) + " resposta da multiplicação: " + (v1*v2) + " resposta da divisão: " + (v1/v2)
}

*/