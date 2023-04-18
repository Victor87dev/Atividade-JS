// 1 - atividade
/*
let cores = ['azul','vermelho','verde']
console.log(cores)

cores.push('amarelo')
console.log(cores)
*/

// 2 - atividade 
/*
let array = [10,120,14,100,15,1,6,700]

function maior(elemento) {
 const novo = Math.max(...elemento)
 return novo
}

console.log(maior(array))
*/

// 3 - atividade 
/*
let arrayStrings = ['joao','maria','juba']

function maiuscula(ele) {
  let novaPalavra = arrayStrings.join(' ')
  let maior = novaPalavra.toUpperCase()
  let array = maior.split(' ')
  return array
}

console.log(maiuscula(arrayStrings))
*/

// 4 - atividade 
/* 
let array = [1,4,6,2]

function media(elemento) {
  const soma = elemento.reduce((atual,anterior) => {
    atual += anterior 
    return atual
  })

  let mediaFinal = soma / elemento.length 
  return mediaFinal
}

console.log(media(array))
*/



