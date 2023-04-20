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

const listaNumeros = [10,12,45,150,77,124]
let maiorNumero = 0

function procurandoMaior() {
  for(let i = 0;i < listaNumeros.length;i++){
    numberToCheck = listaNumeros[i]

    if(numberToCheck >= maiorNumero) {
      maiorNumero = numberToCheck
    } 
}
return maiorNumero 
}

console.log(procurandoMaior())
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

// 5 - atividade

/*
let arrayDeNumeros = [10,45,47,56,22,89,18,16,6,74]

function pares(arr) {
  let novoArrayPar = []

  for (i = 0;i <= arr.length;i++) {
    if(arr[i] % 2 === 0) {
      novoArrayPar.push(arr[i])
    }
  }

return novoArrayPar
}

console.log(pares(arrayDeNumeros))
*/

// 6 - atividade 









