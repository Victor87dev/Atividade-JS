//--------------- condition structure ----------------------------

// atividade 1 --------------------------------------

/*
let resultado = confirm('O valor está correto ?');

if(resultado==true){
   alert('Valor corresponde');

}else{

    alert('Valor não corresponde');

}
*/

// atividade 2 ---------------------------------------------

/*
let as = 5;
let bs = 7;



if(as > bs){
   document.write('as é maior')

}else{

    document.write('as é menor')
}



*/

// atividade 3 --------------------------------------------

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

// atividade 4 ----------------------------------------

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

// atividade 5 --------------------------------------

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



// ---------------- condition + prompt --------------------------

// atividade 1 ------------------------------------
/*
let valor1 = prompt('digite o valor:')
let valor2 = prompt('digite o valor:')

if(valor1 > valor2){
    document.write(valor1 + ' maior que ' + valor2)
}else{
    document.write(valor2 + ' maior que ' + valor1)
}
*/

// atividade 2 -----------------------------------------

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

// atividade 3 ------------------------------------------

/*
let idade1 = (prompt('informe a sua idade: '))

if (idade1 >= 18){
    alert(`${idade1}, maior de idade`)
}else{

    alert(`${idade1}, menor de idade`)
}
*/

// atividade 4 ---------------------------------------

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

// ---------------------- switch - case -------------------------

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



