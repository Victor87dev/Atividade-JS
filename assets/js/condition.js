//--------------- condition structure ----------------------------


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



// ---------------- condition + prompt --------------------------

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
let idade1 = (prompt('informe a sua idade: '))

if (idade1 >= 18){
    alert(`${idade1}, maior de idade`)
}else{

    alert(`${idade1}, menor de idade`)
}
*/

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




