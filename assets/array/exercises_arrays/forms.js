/*
let produtos = ['arroz', 'trigo', 'feijao']

produtos.push('carne')
console.log(produtos)

produtos.pop()
console.log(produtos)

produtos.splice(1,1)
console.log(produtos)

let meuArray = [1,2,3, "quatro", true]
meuArray[1] = "dois"
console.log(meuArray)

for(let i = 1;i < 11; i++){
    console.log(i)
}
*/


/*
const soma = (numeros.reduce((acumulador, valorAtual))>= {
    return acumulador + valorAtual
}

console.log(soma)
*/

/*
let numeros = [1,2,3,4]

let modificador = numeros.map(function(contando,numero){
    return contando + numeros
})

console.log(modificador)
*/

// o dobro do numero do array 
/*
let total = 0
let numeros = [2,3,4]

function sum(valor,indice){
    total = (numeros[indice] + valor)
 
    return total
}

let resultado = numeros.map(sum)
console.log(resultado)
*/

// exercicio 2
/*
const numeros = [1,2,3,4,5]

const soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
})

console.log(soma)
*/

// exercicio 3

/*
const numeros = [1,2,3,4,5]

const numerosMaiores = numeros.map(numero => numero * 2)

console.log(numerosMaiores) 
*/

// exercicio 4


/*
const arr = [1,2,3,4,5];
let min = Math.min(...arr);



console.log(min); 
*/

// exercicio 5
/*
let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]

let soma = array1.map((num, index) => num + array2[index])

console.log(soma)
*/

// exercicio 6
/*
const numeros = [1,2,3,4,5,6,7,8,9,10]

let resultado = numeros.filter(item => item %2 ==0)
console.log(resultado) 
*/

// exercicio 7

/*
const numeros = [1,2,3,4,5,6,7,8,9,10]

let resultado = numeros.filter(item => item %2 ==1)
console.log(resultado) 
*/

// exercicio 8
/*
const numeros = [1,2,3,4,5,6,7,8,9,10]

let resultado = numeros.filter(item => item %3 ==0)
console.log(resultado) 
*/

// exercicio 9
/*
let nomesAlunos = ['João','Marcos','Ronaldo']

let notas1Alunos = [10,3.5,7]

let notas2Alunos = [8,6.4,8]
*/


let objetoAlunos = {
    aluno1: ['joao',10,7.5],
    aluno2: ['ronaldo',4,7,8],
    aluno3: ['marcos', 8,7,7]
}

function sum(array){

let total = 0 
for(let value of array){
    total += value
}

return total 
}

totalAluno1 = sum(objetoAlunos.aluno1)
totalAluno2 = sum(objetoAlunos.aluno2)
totalAluno3 = sum(objetoAlunos.aluno3)

function mediaDasNotas(totalAluno,totalAluno1,totalAluno2,totalAluno3){

    return totalAluno/objetoAlunos.length

}

console.log(mediaDasNotas.totalAluno1)

mediaAluno1 = mediaDasNotas(totalAluno1)
mediaAluno2 = mediaDasNotas(totalAluno2)
mediaAluno3 = mediaDasNotas(totalAluno3)
 

if(mediaAluno1 >= 7){
    console.log(objetoAlunos.aluno1)
}else if(mediaAluno2 >= 7){
    console.log(objetoAlunos.aluno2)
}else if(mediaAluno3 >= 7){
    console.log(objetoAlunos.aluno3)
}else{
    console.log('abaixo da media')
}