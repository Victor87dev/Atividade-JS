/*
var nome = prompt('digite seu nome:');
alert(nome + ', seja bem vindo');

console.log(nome);

document.write(nome);
*/

/*
let resultado = confirm('O valor está correto ?');

if(resultado==true){
   alert('Valor corresponde');

}else{

    alert('Valor não corresponde');

}
*/

/*
let as = 5;
let bs = 7;



if(as > bs){
   document.write('as é maior')

}else{

    document.write('as é menor')
}



if(as > bs){
    alert('as é maior')
}else{
    alert('as é menor')
}



if(as > bs){
    console.log('as é maior')
}else{
    console.log('as é menor')
}

*/

/*
let letraA = 22.50;
let letraB = 28;

if(letraA > letraB){
    alert(letraA)
    console.log(letraA)
    document.write(letraA)
}else{
    alert(letraB)
    console.log(letraB)
    document.write(letraB)
}
*/

/*
let valor = 5;

if(valor >= 0){
    alert(valor +  " positivo");
    document.write(valor,' positivo');
    console.log(valor, ' positivo');
}else{
    alert(valor,' negativo');
    document.write(valor,' negativo');
    console.log(valor, ' negativo');
}
*/

/*
let letra = 'm'

if(letra === 'm'){
    alert('sexo: masculino')
} else if(letra === 'f'){

alert('sexo: feminino')

}else{
    alert('valor nao reconhecido')
}
*/

/*
let data = prompt('digite seu ano de nascimento')
document.write("nasci no ano: "+ data)
let idade = prompt('digite sua idade')
document.write(" tenho: " + idade + " anos")
*/

/*
let valor1 = prompt('digite o valor:')
let valor2 = prompt('digite o valor:')

if(valor1 > valor2){
    document.write(valor1 + ' maior que ' + valor2)
}else{
    document.write(valor2 + ' maior que ' + valor1)
}
*/


/*
let nota1 = parseInt (prompt('digite a primeira nota: '))
let nota2 = parseInt (prompt('digite a segunda nota: '))
let nota3 = parseInt (prompt('digite a terceira nota: '))
let nota4 = parseInt (prompt('digite a quarta nota: '))
let nota5 = parseInt (prompt('digite a quinta nota: '))

let soma = (nota1 + nota2 + nota3 + nota4 + nota5)

let media = (soma/5)

alert('a media das notas é: ' + media)

if(media >= 7){
    alert('aluno aprovado')
}else if(media >= 4){

    alert('aluno em recuperação')

}else{
    alert('aluno reprovado')
}
*/

/*
let dolar = parseFloat (prompt('digite o valor do dolar:'))



let real = parseFloat (prompt('digite o valor do real:'))
let valorConvertido = (real*dolar)

alert("real convertido em dolar " + valorConvertido)
*/

/*
let letra = 'd'

switch('d'){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u': console.log('vogal');break;
    default:
    console.log('consoante'); break;
}
*/

//objeto ---------------------------------------------

/*
let nome = 'Rafael'; //string literal
let idade = 25; // number literal
let estaAprovado = true; //boolean
let sobrenome; undefined; //Undefined
let profissao = 'dev';
let lazer = 'academia';

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'sampaio',
    profissao: 'dev',
    lazer: 'academia'

};

console.log(pessoa);
*/


// arrays ------------------------------------------------

/*
let familia = [35,19,18,77];

console.log(familia.length);

console.log(familia[0]);
*/

/*
let meuColega = ['Amorim',21,'solteiro','marinha'];

console.log(meuColega[1]);
*/

//funcion -----------------------------------------

//verbo + substantivo

/*
let corSite = "amarelo";
function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade;

};

console.log(corSite);
resetaCor("vermelho", " escuro");
console.log(corSite);
*/


/*
let minhaAcademia = "wefit";

function mudarAcademia(acad, local){

    minhaAcademia = acad + local;

};

console.log(minhaAcademia);
mudarAcademia("green", " jordao baixo");
console.log(minhaAcademia);
*/

// rocketseat -------------------------------------------

/*
var weight 

let name = 'jose'
let abi = 18
let stars = 18.1
let isSubscribed = true  
*/

/*
let student = {

};

console.log(typeof student)
*/





/*
console.log(`${student.name} tem ${student.idade} e pesa ${student.star} kg ` )


console.log(student.name + ' tem ' + student.idade + ' e pesa ' + student.star + ' kg ')
*/

/*

let student = {
    name: 'joao',
    idade: 20,
    peso: 10.4
}

let students = [
    student
]


let mark = {
    name: 'rock',
    idade:15,
    peso:48.5
}


students[1] = mark

console.log(students)

*/

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

/*

let valor1 = (prompt("entre com um numero:"))
let valor2 = (prompt("entre com um segundo numero:"))

alert("primeiro numero: " + valor1 + ", segundo numero : " + valor2)
console.log( "primeiro numero: " + valor1 + ", segundo numero : " + valor2)
document.write( "primeiro numero: " + valor1 + ", segundo numero : " + valor2)

*/


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

/*

 
 let meuNome = (prompt("entre com seu nome: "))
 let suaIdade = (prompt("entre com sua idade: "))

 alert("seu nome é: " + meuNome + " e " + " sua idade é: " + suaIdade)
 console.log("seu nome é: " + meuNome + " e " + " sua idade é: " + suaIdade)
 document.write("seu nome é: " + meuNome + " e " + " sua idade é: " + suaIdade)
*/

/*
let numero1 =  parseFloat(prompt("digite o primeiro numero : "))
let numero2 = parseFloat (prompt("digite o segundo numero: "))

let soma = (numero1 + numero2)
let subtracao = (numero1 - numero2)
let multiplicacao = (numero1 * numero2)
let divisao = (numero1 / numero2)

document.write(`a soma: ${soma}, a subtração: ${subtracao}, a multiplicaçã: ${multiplicacao}, a divisão: ${divisao}`)

*/

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

/*
let nome = (prompt("digite o seu nome: "))
let endereco = (prompt("digite sua cidade, estado e cep: "))
let telefone = (prompt("digite seu telefone: "))
let profissao = (prompt("digite sua profissao: "))

document.write(`seu nome: ${nome} , seu endereço: ${endereco} , seu telefone: ${telefone} , sua profissao: ${profissao}`)
*/

/*
let valorDeVendas = parseFloat (prompt("digite o valor total de vendas: "))
const lucro = 0.23

let lucroDaEmpresa = calculoPorcentagem(valorDeVendas,lucro)

function calculoPorcentagem (){
    return valorDeVendas * lucro
}

document.write(`o lucro da empresa é: ${lucroDaEmpresa}`)
*/

/*
let numero1 = parseInt (prompt("digite o primeiro numero: " ))
let numero2 = parseInt (prompt("digite o segundo numero: " ))
let numero3 = parseInt (prompt("digite o terceiro numero: " ))
let numero4 = parseInt (prompt("digite o quarto numero: " ))
let numero5 = parseInt (prompt("digite o quinto numero: " ))

let mais = Math.max (numero1,numero2,numero3,numero4,numero5)

document.write(mais)
*/

//-------------------------------------------------------------
/*
let idade1 = parseInt (prompt("digite a primeira idade: " ))
let idade2 = parseInt (prompt("digite a segunda idade: " ))
let idade3 = parseInt (prompt("digite a terceira idade: " ))

if(idade1 >= 18){

    alert(idade1)

*/
//-----------------------------------------------------------------

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

// apredendo o significado de função --------------------------------

/*
function criandoFrases (){
    console.log('estudar é muito bom')
    console.log('persistir é a chave')
    console.log('nunca desistir')
}

criandoFrases()
criandoFrases()

console.log('fim do programa')
*/

/*
const sum = function(number1,number2){

    total = (number1 + number2)
    return total
}

let number1 = 5
let number2 = 7

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma do numero 1 e numero 2 é:  ${sum(number1,number2)}`)

console.log(total)
*/

// nunca declarar uma variavel sem usar operador especial (var,let ou const)

/*
function fazerSuco(numero1,numero2){
    return 'suco de:' + (numero1 + numero2)
}

const copo = fazerSuco(1,2)

console.log(copo)

*/

// function hoisting, chamando a função antes de executala (nao tem problema)

/*
sayMyName()

function sayMyName(){
    console.log('joao')
}
*/

// arrow function 

/*
const sayMyName = () => {

    console.log('joao')

}

sayMyName()

*/

// callback function, função dentro de função ---------------

/*
function sayMyName (name){
    console.log('antes da callback')

    name()

    console.log('depois callback')
}

sayMyName (
    () => {

        console.log('estou aqui dentro')

    }
    )

*/

// function construtor ---------------------------------

/*
function Person(name,idade){

    this.name = name
    this.idade = idade
    this.walk = function (){
        return this.name + ' de ' + this.idade + ' esta andando'
    }

    
}

const mayk = new Person('mayk', 20)
const joao = new Person('joao', 45)
console.log(mayk.walk())
console.log(joao.walk())
*/

// transformando string em numero e numero em string 

/*
let numero = 10

console.log(String(numero))

let string = '10'

console.log(Number(string))
*/

/*
let joao = function (jogo1,jogo2){

    return jogo1 + jogo2 

}


console.log(joao(10,15))
*/

/*
let io = 48
let oi = 2
let lucas = gratifi (io,oi)



function gratifi (){

    return 'a soma dos numeros:' + (io / oi)

}





console.log(lucas)
*/

// exercicio 1 -----------------------------------

/*
let idade1 = (prompt('informe a sua idade: '))

if (idade1 >= 18){
    alert(`${idade1}, maior de idade`)
}else{

    alert(`${idade1}, menor de idade`)
}
*/

// exercicio 2 --------------------------------------

/*
let numero1 = (prompt(`digite o primeiro numero: `))
let numero2 = (prompt(`digite o segundo numero: `))
let numero3 = (prompt(`digite o terceiro numero: `))

let maior = Math.max(numero1,numero2,numero3)
let menor = Math.min(numero1,numero2,numero3)

alert(`o maior numero é:  ${maior} e o menor: ${menor}`)
*/

// descobrindo quantos caracteres tem uma palavra e quantos digitos tem um numero

/*
let palavra = "paralelepipedo"
console.log(palavra.length)

let numero = 1788
console.log(String(numero).length)
*/

// transformar um numero quebrado em duas casas decimais e trocar ponto por virgula 

/*
let numero = 444.77777288
console.log(numero.toFixed(2).replace("." , ","))
*/

// transformando letras minusculas em maiusculas 

/*
let nome = 'estudar é muito bom'
console.log(nome.toUpperCase().toLowerCase())
*/

// estrutura de repetição for

/*
for (let i = 0; i < 11; i++){

    console.log('5x' + i + "=" + 5*i)

}
*/

// exercicio 1 -----------------------------------------------

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

// exercicio 2 ----------------------------------------------------

/*
let nome = (prompt("digite o nome do usuario: "))

console.log(nome)
document.write(nome)
alert(nome)
 */

// exercicio 3 ----------------------------------------------------

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

// exercicio 4------------------------------------------------

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

// exercicio 5 -------------------------------------------------

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

// manipulando strings -----------------------------------

// verificando se o texto contem a palavra amor

/*
let phrase = "eu quero viver o Amor"
console.log(phrase.includes("amor"))
*/

// manipulando arrays --------------------------------------

// criando array com construtor 

/*
let myArray = new Array('a', 'b', 'c') 
console.log(myArray)
*/

// contar quantos elementos tem no array -------------------
/*
console.log(['a', 'b', 'c'].length)
*/


// transformando uma cadeia de caracteres em elementos de um array ----------------------

/*
let word = "manipulação"
console.log(Array.from(word))
console.log(word[1])
*/


// manipulando dados do array ----------------------
// -------------------------------------------

//let techs = ["html", "css", "js"]

// adicionar um item no fim 
//techs.push("nodejs")
// adicionar um no começo 
//techs.unshift("sql")
// remover do fim 
//techs.pop()
// remover do começo 
//techs.shift()
// pegar somente alguns elemnetos do array 
//console.log(techs.slice(1,3))
//remover 1 ou mais itemns em qualquer posição do array 
//techs.splice(1,2)
// encontrar a posição de um elemento array 

//let index = techs.indexOf('css')
//techs.splice(index, 1)
//console.log(techs)

//----------------------------------------------------------------

// 2 modos de crir objetos 

/*

modo 1 usando 'new'

let name = new String('mayk')
let age = new Number(23)

console.log(name, age)
*/

/*
const person = {

    name: 'mayk',
    age: 25


}

console.log(person)
*/

// delete person.age


//------------------------------------------

// operador condicional (ternario)

// dependendo da condição, nos receberemos valores diferentes
/*
let pao = true
let queijo = false

let condicao = pao && queijo ? "cafe da manha top" : "cafe da manha ruim"

console.log(condicao)
*/
// -------------------------------------------
/*
let idade = 17

let podeDirigir = idade >= 18 ? "pode" : "nao pode"

console.log(podeDirigir)
*/

// estrutura de repetição for, for-of, for-in, while ---------------------------------

// for-in --------------------------
// object 
/*
let person = {

    name: 'john',
    age: 30,
    weight: 88.6

}

for(let property in person){
console.log(property)
console.log(person[property])

}
*/
// for-of ---------------------------------
// array 

/*
let names = ['joao', 'pedro', 'paulo']

for(let name of names){

    console.log(name)
}
*/

// for ---------------------------------
/*
for(let i = 20; i > 1;i--){

    console.log(i)


}
*/

// while -------------------------
// geralmente usado quando nao sabemos o momento da parada
/*
let i = 0

while(i < 10){

    console.log(i)

    i++

    
}
*/

// switch - case -------------------------------------------
/*
function calcular(number1,operador,number2){

    let result

    switch(operador){

        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break 
        case '*':
            result = number1 * number2
            break 
        case '/':
            result = number1 / number2
            break 
        default :
         console.log("nao implementado")   
         break     

    }

  return result 


}

console.log(calcular(7,'+',5))

*/

/*

function calcularNumeros(number5,calc,number6){

let resultado 

    switch(calc){

        case '1':
         resultado = number5 + number6   
            break
        case '2':
            resultado = number5 - number6 
            break
        case '3':
            resultado = number5 * number6 
            break 
        case '4':
            resultado = number5 / number6 
            break      
        default:
            console.log('sem resultados')    
            break 

    }
 return resultado 

}

console.log(calcularNumeros(5,'2',2))


*/


/*
function suco(fruta1,fruta2){

    return fruta1 + " " + fruta2

}

console.log(suco("maracuja","laranja"))
*/





/*
function sucoBom(fruta1,fruta2){

    let resultadoSuco

    switch(fruta1,fruta2){
        case 'maracuja', 'limao': 
        resultadoSuco = "limonada perfeita"
        break
        case 'tangerina', 'laranja':
           resultadoSuco = "tangerina top"
        break 
        default:
            console.log('suco nao funciona')  
        break   



    }

return resultadoSuco

}

console.log(sucoBom("maracuja","limao"))
*/


     /*     
      let nome = 'joao'

      let sobrenome = 'silva'

      let mensagem = `ola , ${nome} ${sobrenome}!`

    console.log(mensagem)
    */

    /*
       let membro = true 

       let mensagem1 = membro ? "sim" : "nao"

       console.log(`ele é membro ${mensagem1}`)


       let numero = 10

       const mensagem = numero%2 ? 'impar' : 'par'

       alert(mensagem)
    */
/*
 let camisa = (prompt("qual a cor da camisa ? "))

 switch (camisa) {
     case "camisa azul":
         console.log("amigo A")
         break;
     case "camisa vermelha" : 
     console.log("amigo B")
     break
     
     case "camisa branca":
        console.log("amigo C")
        break
     default:
         console.log("camisa nao identificada")
         break;
 }
*/

/*
  let mult = (x,y) => Math.max (x,y)


  console.log(mult(10,11))


*/

/*
let fruta = 'melancia'

switch (fruta) {
    case 'maça':
        console.log('nao vendemos essa fruta aqui')
        break;
    case 'kiwi':
        console.log('estamos com escassez de kiwis')
     case 'melancia':
        console.log('aqui esta, sao 3 reais o quilo')
        break      
     default:
         console.log("fruta nao identificada")
         break     

    
}
*/

/*
let tipoVeiculo = 'sedan'

switch (tipoVeiculo) {
    case 'hatch':
        console.log('compra efetuada com sucesso')
        break;
    case 'sedan':
        console.log('tem certeza que nao prefere esse modelo ?')
        break
     case 'caminhonete':
        console.log('tem certeza que nao prefere esse modelo ?')
        break  
    case 'motocicleta':
    console.log('tem certeza que nao prefere esse modelo ?')
    break  

     default:
         console.log("nao trabalhamos com esse tipo de automovel aqui")
         break     

    
}
*/

/*
    let documento = true

    let mensagem = documento ? true : false 

    console.log(`o documento é ${mensagem}`)

*/
/*

   let profissao = 'programador' 
   let nome = 'joao'

   let mensagem = profissao ? 'programador' : false
   
   console.log(`${nome} é ${mensagem}`)
*/

/*
    let numero1 = 5
    let numero2 = 10

    let numeroMaior = numero1 > numero2 ?  `${numero1} é maior que ${numero2}` : `${numero2} é maior que ${numero1}` 

    console.log(`o numero maior é: ${numeroMaior}`)

*/


/*
    function nomeSobrenome(nome,sobrenome){
 
        return `olá ${nome} ${sobrenome}, eu sou uma função.`

    }

    

    console.log(nomeSobrenome('João', 'Victor'))

*/

/*
    let destinatario = 'jv775833@gmail.com'
    let assunto = 'confirmação de cadastro'
    let nome = 'João Victor'
    let linkDeConfirmacao = 'https://exemple.com/confirmar'
    let corpoDoEmail = `
    Olá ${nome} !
    Obrigado por se cadastrar no nosso site. Para confirmar seu cadastro. por favor click 
    no link abaixo: 
    ${linkDeConfirmacao}

    Se você não se cadastrou no nosso site, por favor ignore esse e-mail.

    Atenciosamente, equipe do exemplo.com
    `

    const modeloDeEmail = {

        to: destinatario,
        subject: assunto,
        body: corpoDoEmail
    }

    console.log(modeloDeEmail)

*/

/*
let lifeFinn = 100
let lifeReiGelado = 100


let damage = {

    finn: [],
    reiGelado: []


}

for (let i = 0; i < 4; i++) {
    damage.finn[i] = parseInt(prompt(`Digite o dano de ataque ${i + 1} do Finn.`))
    damage.reiGelado[i] = parseInt(
      prompt(`Digite o dano de ataque ${i + 1} do Rei Gelado.`)
    )
  }

function sum(array){

    let total = 0

    for(let value of array){

        total += value

    }

   return total

}

let totalDamagerFinn = sum(damage.finn)
let totalDamagerReiGelado = sum(damage.reiGelado)


function lifeFinalFinn(lifeFinn,totalDamagerReiGelado){
   return lifeFinn - totalDamagerReiGelado
}
let lifeFinnRemaining = lifeFinalFinn(lifeFinn,totalDamagerReiGelado)


function lifeFinalReiGelado(lifeReiGelado,totalDamagerFinn){
return lifeReiGelado - totalDamagerFinn
}
let lifeReiGeladoRemaining = lifeFinalReiGelado(lifeReiGelado,totalDamagerFinn)



if( lifeFinnRemaining > lifeReiGeladoRemaining){
    console.log(`Após esquivar de todas as magias do mago, Finn venceu a luta e deu ${totalDamagerFinn} 
    de dano, Deixando o Rei gelado com ${lifeReiGeladoRemaining} de vida restante. `)

}else if( lifeReiGeladoRemaining > lifeFinnRemaining){
 console.log(`As magias foram implacaveis, Finn lutou com todas suas forças, mas o Rei Gelado foi vitorioso,
    o mago conseguiu dar ${totalDamagerReiGelado} de dano, Deixando Finn com ${lifeFinnRemaining} de vida restante.`)

}else{
console.log(`Apesar dos esforços, ninguem foi capaz de ser vitoriso, ficando com exatamente ${lifeFinnRemaining} 
de vida restante cada. Portanto terão que resolver suas intrigas em outra oportunidade`)

}

*/