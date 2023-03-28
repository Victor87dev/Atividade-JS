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
let frase = 'serx ou nao serx, eisx a questaox'
let cont = 0;
let pos = frase.indexOf('x');

while(pos != -1) {
  cont++
  pos = frase.indexOf('x', pos + 1)
}

console.log(cont)








