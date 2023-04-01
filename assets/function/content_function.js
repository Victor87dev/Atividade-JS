// content functions ----------------------------------------------

//verbo + substantivo

/*
let corSite = "amarelo";
function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade;

};

console.log(corSite);
resetaCor("vermelho", " escuro");
console.log(corSite);
*/


// ------------------------------------------------------


/*
let minhaAcademia = "wefit";

function mudarAcademia(acad, local){

    minhaAcademia = acad + local;

};

console.log(minhaAcademia);
mudarAcademia("green", " jordao baixo");
console.log(minhaAcademia);
*/



// apredendo o significado de função --------------------------------

/*
function criandoFrases (){
    console.log('estudar é muito bom')
    console.log('persistir é a chave')
    console.log('nunca desistir')
}

criandoFrases()
criandoFrases()

console.log('fim do programa')
*/


// nunca declarar uma variavel sem usar operador especial (var,let ou const)


/*
const sum = function(number1,number2){

    total = (number1 + number2)
    return total
}

let number1 = 5
let number2 = 7

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma do numero 1 e numero 2 é:  ${sum(number1,number2)}`)

console.log(total)
*/

//  modo certo de ser feito -----------------------------------------------

/*
function fazerSuco(numero1,numero2){
    return 'suco de:' + (numero1 + numero2)
}

const copo = fazerSuco(1,2)

console.log(copo)

*/

// function hoisting, chamando a função antes de executala (nao tem problema) ------------------

/*
sayMyName()

function sayMyName(){
    console.log('joao')
}
*/

// arrow function --------------------------------------

/*
const sayMyName = () => {

    console.log('joao')

}

sayMyName()

*/


// callback function, função dentro de função -----------------

/*
function sayMyName (name){
    console.log('antes da callback')

    name()

    console.log('depois callback')
}

sayMyName (
    () => {

        console.log('estou aqui dentro')

    }
    )

*/



// function construtor ---------------------------------

/*
function Person(name,idade){

    this.name = name
    this.idade = idade
    this.walk = function (){
        return this.name + ' de ' + this.idade + ' esta andando'
    }
}

const mayk = new Person('mayk', 20)
const joao = new Person('joao', 45)
console.log(mayk.walk())
console.log(joao.walk())
*/


// transformando string em numero e numero em string 

/*
let numero = 10

console.log(String(numero))

let string = '10'

console.log(Number(string))
*/


// 2 modos de fazer uma função ----------------------

/*
let joao = function (jogo1,jogo2){

    return jogo1 + jogo2 

}

console.log(joao(10,15))
*/


/*
let io = 48
let oi = 2
let lucas = gratifi (io,oi)

function gratifi (){

    return 'a soma dos numeros:' + (io / oi)

}

console.log(lucas)
*/

// 

/*
let jogador1 = {nome:'bruno', idade:12, magia:400,}
let jogador2 = {nome:'joao', idade:14, magia:500, skin: 123}
let jogador3 = {...jogador1,...jogador2}

console.log(jogador1)
console.log(jogador3)
*/

// function anonima 

// const f = function(v1,v2) {
//     return v1 + v2 
// }
// console.log(f(5,5))

// function construtora 
/*
const f = new Function('v1,v2','return v1 + v2')

console.log(f(5,6))
*/










