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

/*
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
*/


/*
let cores = ['azul', 'vermelho', 'verde']
console.log(cores)
cores.push('amarelo')
console.log(cores)
*/


/*
let array = [1,2,3,4]
  
let max = Math.max(...array)

console.log(max)
*/


/*
let texto = ['a','b','c']

function nomes(array){

  let nome1 = array.join(",")
  let nome2 = nome1.toUpperCase()
  let nome3 = nome2.split(",")
  return nome3
}

console.log(nomes(texto))

*/

/*
const numeros = [58,18,45]
function maior(array){

  const novo2 = Math.max(...array)
  return novo2

}

console.log(maior(numeros))
*/

/*
const arrays1 = [1,2,3,4]
const arrays2 = [5,6]

function arrays(arrays,arrays2){

  const novoArray = [
    ...arrays,
    ...arrays2
  ]
   const array = novoArray.filter((valor,index) => {
     return novoArray.indexOf(valor) === index;
   })
   return array
}
console.log(arrays(arrays1,arrays2))
*/

const numeros = [1,2,3,4,5]

function mediaDosNumeros(numero){

  const somaDasNotas = numero.reduce((acumulador, valor) =>{

    acumulador += valor 
    return acumulador
  },0);

  let mediaAluno = somaDasNotas / numero.length 
  return mediaAluno.toFixed(2);
  
}

console.log(mediaDosNumeros(numeros))