// 10 metodos de array 

const data = [
    {name: "matheus", age:31, sallary:2000, driverLicense:true},
    {name: "joão", age:18, sallary:1500, driverLicense:false},
    {name: "mariana", age:22, sallary:4000, driverLicense:true},
    {name: "pedro", age:50, sallary:7200, driverLicense:true},
    {name: "erica", age:16, sallary:0, driverLicense:false}
];

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

// 4- inludes (verificar se meu array contem um item especifico)
/*
const numbers = [1,2,6,4];

const hasFour = numbers.includes(4);

console.log(hasFour)
*/

// 5- map (quando queremos fazer uma modificação em todos nossos elementos do array)

data.map((user) => (user.newsLetter = false));

console.log(data);


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

data[1].carro = 'fiat' 

console.log(data)

// 10- every (verificando se todos os elementos do array tem o que voce passou como condição)

const everyOne = data.every((user) => user.name);

console.log(everyOne)

const everySalario = data.every((user) => {
  return user.sallary > 2000
});

console.log(everySalario)