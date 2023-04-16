// 10 metodos de array 
/*
const data = [
    {name: "matheus", age:31, sallary:2000, driverLicense:true},
    {name: "joão", age:18, sallary:1500, driverLicense:false},
    {name: "mariana", age:22, sallary:4000, driverLicense:true},
    {name: "pedro", age:50, sallary:7200, driverLicense:true},
    {name: "erica", age:16, sallary:0, driverLicense:false}
];
*/
// 1- reverse (quando voce deseja inverter a ordens dos elementos do array)
/*
const reverseData = data.reverse();

console.log(reverseData);
*/

// 2- find (quando voce deseja buscar um elemento do array atraves de uma condição)
/*
const highSallary = 5000

const highestSallary = data.find((user) => user.sallary > highSallary)

console.log(highestSallary)
*/

// 3- findIndex (vai buscar um index de um array dependendo da condição que voce propor)
/*
const lowesSallary = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000);

console.log(lowesSallary)

data[lowesSallary].sallary += 200;

console.log(data);
*/

// 4- includes (verificar se meu array contem um item especifico)
/*
const numbers = [1,2,6,4];

const hasFour = numbers.includes(4);

console.log(hasFour)
*/

// 5- map (quando queremos fazer uma modificação em todos nossos elementos do array)
/*
data.map((user) => (user.newsLetter = false));

console.log(data);
*/

// 6- filter (vamos poder realizar um filtro baseado em uma condição)
/*
const drivers = data.filter((user) => user.driverLicense);

console.log(drivers)
*/

// 7- reduce (a soma de todos os arrays)
/*
const salario = data.reduce((totalSalario,user) => totalSalario += user.sallary,0
);

console.log(salario)
*/

// 8- forEach (nao tem uma função bem definida, mas serve como loop)
/*
const showUserNames = ((users) => {
  users.forEach((user) => {
    console.log(`ola ${user.name}!`)
  });
});

showUserNames(data);
*/

// 9- some (verificar se a alguma coisa dentro do meu array correspodendo ao que voce esta procurando)
/*
let somaOne = data.some((user) => user.newsLetter);

console.log(somaOne)

data[0].newsLetter = true

somaOne = data.some((user) => user.newsLetter);

console.log(somaOne)
*/
// teste 
/*
data[1].carro = 'fiat' 

console.log(data)
*/
// 10- every (verificando se todos os elementos do array tem o que voce passou como condição)

/*
const everyOne = data.every((user) => user.name);

console.log(everyOne)

const everySalario = data.every((user) => {
  return user.sallary > 2000
});

console.log(everySalario)
*/

// METODOS JAVASCRIPT -----------------------------------------
// split (transforma uma string em array)
// join (transforma um array em string)
/*
let frase = 'manipulando strings com javascript'

let arrayPalavra = frase.split(' ');

console.log(arrayPalavra)


let novaPalavra = arrayPalavra.join(' ');

console.log(novaPalavra)
*/

// splice (remove e adiciona elementos do array)
/*
let control = ['carro', 'moto', 'marinha','maxim'];

let removed = control.splice(2,0,'strong');

console.log(control)

removed = control.splice(2,2,'joao','victor')

console.log(control)
console.log(removed)

removed = control.splice(1,Number.MAX_VALUE)

console.log(control)
console.log(removed)
*/

// slice (fatiando um array e pegando pelo indice)
/*
let nomeCompleto = ['João','Victor','Samapaio','Tenório'];

let fatiado = nomeCompleto.slice(3,4)

console.log(fatiado)
*/

// slice (fatiando uma string, so corta em direção a direita)
/*
let nome = 'armario'

console.log(nome.slice(-3))
console.log(nome.slice(2))
console.log(nome.slice(1,4))
console.log(nome.slice(2,7))
console.log(nome.slice(0,4))
*/
// substring (corta pra direita e pra esquerda)
/*
let nome = 'mozilla';

console.log(nome.substring(4,7))
console.log(nome.substring(7,4))
*/

// indexOf (procura o indice de onde começa um caractere ou palavra especifica)
/*
let nome = 'meu nome é joao'

console.log(nome.indexOf('nome'))// 4
console.log(nome.indexOf(''))// 0
console.log(nome.indexOf('é',2))//9
console.log(nome.indexOf('j',30))//-1 (o numero passado é maior do que a string)
*/

// contando quantos 'x' existem 
/*
let frase = 'serx ou nao serx, eisx a questaox'
let cont = 0;
let pos = frase.indexOf('x');

while(pos != -1) {
  cont++
  pos = frase.indexOf('x', pos + 1)
}

console.log(cont)
*/

// lastIndexOf (verifica o indice do ultimo acontecimento)
/*
let nome = 'bruno bruno'

console.log(nome.lastIndexOf('o'))
*/

// includes (verifica se existe um caractere ou palavra na string e retorna true ou false)
/*
let nome = 'sport ganhou amanha'

console.log(nome.includes('sport', 5))
*/

// map ---------------

/*
const cursos = ['html', 'css', 'javascript', 'php', 'react']
cursos.map((el,i) => {
  console.log('cursos:' + el + ' - posicao do curso:' + i)
})
*/

/*
let array = [1,2,5,4]

let dobro = array.map((el,i)=>{
  return el*2
})

console.log(dobro)
*/

// filter (filtra um novo array de acordo com o codigo definido)
/*
const idades = [10,14,40,20,25]

const maior = idades.filter((user) => {
  if(user >= 18)
    return user
  
})

console.log(maior)
*/

// find (retorna o primeiro elemento que satifaz o codigo definido)
/*
let a = [10,20,30]

const abra = a.find((ele) => {
   if(ele > 15) {
     return ele
   }
})

console.log(abra)
*/

// every (verifica se todos os elementos do array passam no teste que foi definido pela funcion
// e retorna um valor booleano)
/*
let b = [10,25,26,47]

const menores = b.every((user) => {
  if(user < 40){
    return user
  }
})

console.log(menores)


const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
*/

/*
let array = [10,12,40]

const verificando = array.every((elemento)=>{
  if(elemento <= 40) {
    return elemento
  }
})

console.log(verificando)
*/

/*

const somar = ((v1,v2) => {
  let a = v1+v2 
  if(a > 30) {
    return "maior " + a
  } else { 
    return "menor " + a 
  }
  
})

console.log(somar(33,20))
*/


// some (verifica se pelo menos um elemento passa no teste fornecido)

/*
let array = [10,11,13,18,14,15]

const verifica = array.some((user)=>{
  if(user >= 18) {
    console.log("ok")
  } 
  if(user < 18) {
    console.log("erro")
  }
})

*/
/*
const array = [30,20,19,18]

const verificar = array.some((elemento)=>{
  if(elemento >= 18) {
    console.log("ok")
  } else {
    console.log("array não conforme")
  }
})
*/

/*
let array = [10,12,13,14,18]
let erro = "não encontrado"
for(let i = 0;i < array.length;i++) {
  if(array[i] >= 18) {
    console.log('ok')
  } else {
    console.log(erro)
  }
  
}
*/

/*
const lista = [10,3,1,17]

const verificar = lista.some((elemento)=>{
  return elemento >= 18
})

if(verificar){
  console.log("Ok")
} else {
  console.log("array nao conforme")
}
*/


/*
const lista = [10,12,10,11]

function verificar (array) {
  for(i = 0;i <= lista.length;i++) {
    if(array[i] >= 18) {
       return true
    } 
  }

  return false
}

if(verificar(lista)) {
  console.log('Ok')
} else {
  console.log('array não conforme')
}
*/


/*
let array = [10,1,1,18]

const conta = array.some((arr) => {
  return arr >= 18
})

if(conta) { 
  console.log('correto')
} else {
  console.log('errado')
} 


let completando = [15,10,4,9]

function modoAlternativo(numbers) {
  for(i = 0;i <= numbers.length;i++) {
    if(numbers[i] >= 18) {
      return true
    }
  }

  return false
}

if(modoAlternativo(completando)) {
  console.log('correto')
} else {
  console.log('incorreto')
} 

*/

// reduce (reduzir os elementos do array e fornecer um resultado)
/*
const array = [30,1,1,100]

const soma = array.reduce((anterior,atual)=> {
 return anterior + atual 
})

console.log(soma)
*/

// iteradores 
/*
const valores = [10,1,12]
const numbers = valores[Symbol.iterator]()

console.log(valores)
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
*/

// push (adiciona um novo elemento no final do array)
// pop (remove o ultimo elemento do array)
// unshift (adicona um novo elemento no inicio do array)
// shift (remove o primeiro elemento do array)

let numeros = [1,2,3]

function soma(num) {
   const somar = num.reduce((atual,anterior)=> {
    return atual += anterior
   })
   return somar
}

console.log(soma(numeros))













