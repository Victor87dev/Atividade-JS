/*
let dez = [50,10,41,20];
*/
// for tradicional 
/*
for(let i = 0;i < dez.length;i++) {
  console.log(dez[i])
}
*/
// for in 
/*
for(n in dez) {
  console.log(dez[n])
}
*/
// for of 
/*
for(y of dez) {
  console.log(y)
}
*/
/*
let numerico = [40,50]

let somar = 0

for(num of numerico) {
 somar += num
 console.log(somar)
}
*/

// Diferença entre 'while' e 'do while'
/*
let n = 10;

while(n<10) {
  console.log('voar')
  n++
}
console.log('fim do programa')
*/
// 'while' (se a condição passada não for veradeira, não acontecera nada)
/*
do{
console.log('voar')
n++
}while(n<10)

console.log('encerrar')
*/
// 'do while' (retorna ao menos uma vez o codigo, mesmo a condição sendo falsa)
/*
let number = 0; 

while(number<10){
console.log(number)
number++
}

console.log('acabe')
*/

// break (para uma execução)
/*
let n = 0
let max = 50

while(n<max){
  console.log('curso ' + n)
  if(n>10){
    break
  }
  n++
}

console.log('fim')
*/

// continue (pula uma interação e vai para a proxima)
/*
let a = 0
let maxi = 1000
let pares = 0

for(let i = a;i < maxi;i++) {
  if(i%2!=0) {
  continue
  }
  pares++
}

console.log('a quantidade de numeros pares é: ' + pares)
*/






