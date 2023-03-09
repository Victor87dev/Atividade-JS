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

// transformando letras e palavras minusculas em maiusculas com function 

/*
let texto = ['a','b','c']

function nomes(array) {
  let nome1 = array.join(",")
  let nome2 = nome1.toUpperCase()
  let nome3 = nome2.split(",")
  return nome3
}

console.log(nomes(texto))
*/

// puxando o maior valor do array com function 
/*
const numeros = [58,18,45]
const numeros2 = [13,14]
function maior(numero) {
  const novo2 = Math.max(...numero)
  return novo2
}
console.log(maior(numeros2))
*/

// juntando numeros de dois arrays diferentes com function 
/*
const arrays1 = [1,2,3,4]
const arrays2 = [5,6,10,11,12]

function arrays(arrays1,arrays2) {
  const novoArray = [
    ...arrays1,
    ...arrays2
  ]
   const array = novoArray.filter((valor,index) => {
     return novoArray.indexOf(valor) === index;
   })
   return array
}
console.log(arrays(arrays1,arrays2))

*/

// somando numeros de um array e dando a media com function

/*
const numeros = [1,40,3,4,75]

function mediaDosNumeros(numero) {

  const somaDasNotas = numero.reduce((acumulador, valor) => {
    acumulador += valor 
    return acumulador
  },0);

  let mediaAluno = somaDasNotas / numero.length 
  return mediaAluno.toFixed(2);
}

console.log(mediaDosNumeros(numeros))
*/

// criar um array com numeros e depois retornar os
//numeros pares desse array, usando função.

/*
let numeros = [1,2,3,4,5,6,7,8,9,10]

function numerosPares(numero) {

  let novoArray = [
    ...numeros
  ] 
  
  let array = novoArray.filter((valor) => {
    return novoArray.indexOf(valor) % 2 === 1 
  })
  return array

}

console.log(numerosPares(numeros))
*/

// criar um array com numeros e depois retornar os
//numeros impar desse array, usando função.

/*
let numeros = [1,2,3,4,5,6,7,8,9,10]

function numerosPares(numero) {
  let novoArray = [
    ...numeros
  ] 
  let array = novoArray.filter((valor) => {
    return novoArray.indexOf(valor) % 2 === 0 
  })
  return array
}

console.log(numerosPares(numeros))
*/

//

let pessoas = [
    {
      nome: 'joao',
      idade: 10
    },
    {
      nome: 'marcos',
      idade: 19
    }
  ]
  
  
  
// crie um array de numeros e depois o retorne com os numeros do menor para o maior.
/*
let numeros = [40,12,90,100,1,36]
  
numeros.sort(function(a,b) {
  
  if(a > b) return 1
  if(a < b) return -1
  return 0
})
  
console.log(numeros)
*/

// crie um array de numeros e depois o retorne com os numeros do maior para o menor.
/*
let numeros = [40,12,90,100,1,36]
  
numeros.sort(function(a,b) {
  
  if(a < b) return 1
  if(a > b) return -1
    
})
  
console.log(numeros)
*/  

