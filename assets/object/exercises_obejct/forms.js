// crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "p"
/*
let pessoa = {
  nome:"joao",
  idade:18,
  p:"p"
}
*/

// crie uma função que receba um objeto pessoa como 
// argumento e retorne a idade da pessoa 
/*
let pessoa = {
  nome:"joao",
  idade:18,
  p:"p"
}

function chamarIdade(){
  return pessoa.idade
} 

console.log(chamarIdade())
*/

// crie uma função que receba um objeto pessoa como argumento 
// e adicione a propriedade "sexo" com o valor "masculino"
/*
let pessoa = {
  nome:"joao",
  idade:18,
  p:"p"
}

function valorMasculino(){
  pessoa.sexo = "masculino"
  return pessoa
}

console.log(valorMasculino())
*/

// crie uma função construtura chamada "Animal" com as prorpiedades "especie" e "nome" 
//, e os metodos "comer" e "dormir"
// crie um objeto "gato" a partir da função construtora Animal com 
// a especie "felino" e o nome "miau"
/*
function Animal(especie,nome){
  this.especie = especie,
  this.nome = nome,
  this.comer = function(){
    console.log("comendo")
  }
  this.dormir = function(){
    console.log("dormindo")
  }
}
 
const gato = new Animal('felino','miau')

console.log(gato)
*/
// crie uma função construtora chamada "ContaBancaria" com as prorpiedades
// "saldo" e "titular", e os metodos "depositar" e "sacar".
//crie um objeto "conta" a partir da função construtora ContaBancaria com
// o saldo incial de 1000 e o titular "joão"

/*
function ContaBancaria(saldo,titular){
  this.saldo = saldo,
  this.titular = titular,
  this.depositar = function(){
    console.log("depositado")
  },
  this.sacar = function(){
    console.log("sacado")
  }
}

const conta = new ContaBancaria(1000,"joão")

console.log(conta)
*/
/*
crie um objeto "carro" com as propriedades "marca", "modelo"
e "ano", e os metodos "ligar" e "desligar". use a notação literal de objetos
*/

/*
let carro = {
  marca:"fiat",
  modelo:"modelo",
  ano:2002,
  ligar: function(){
    console.log("ligar")
  }, 
  desligar: function(){
    console.log("desligar")
  }
}

console.log(carro)
*/

/*
crie um objeto "aluno" com as propriedades "nome", "idade" e "notas".
"notas" deve ser um array com as notas do aluno em uma determinada disciplina.
*/

/*
let aluno = {
  nome:"joão",
  idade:20,
  notas: [7,8,10,5]
}

function mediaDasNotas(nota){
  const somaDasNotas = nota.reduce((acumulador,valor) => {
    acumulador += valor
    return acumulador
  })
  
  const mediaNotas = somaDasNotas / nota.length
  return mediaNotas.toFixed(2)
}

console.log("a media das notas do aluno " + aluno.nome + " é:" + mediaDasNotas(aluno.notas))
*/

let computador = {
  cpu:"i9",
  ram:"64gb",
  hd:"2tb",
  info:function(){
    console.log(`CPU:${this.cpu}`)
    console.log(`RAM:${this.ram}`)
    console.log(`HD:${this.hd}`)
  }
}
// adicionando mais propriedades ao objeto 
computador["monitor"]="22pol"
computador.placaVideo = "rtx"
delete(computador.hd)
// como posso chamar 
// console.log(computador.cpu)
// console.log(computador)
// console.log(computador["monitor"])

const computadores = [
  {
    cpu:"i9",
    ram:"64gb",
    hd:"2tb" 
  },
  {
    cpu:"i10",
    ram:"452gb",
    hd:"2tb" 
  },
  {
    cpu:"i99",
    ram:"12gb",
    hd:"5tb" 
  }
]

// computador.info()
// console.log(computador)
// objetos.innerHTML = JSON.stringify(computadores)

computadores.forEach((c)=>{
  const div = document.createElement("div")
  div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd
  div.setAttribute("class","computador")
  objetos.appendChild(div)
})

// clonando objeto

const c1 = Object.assign({},computador)
c1.info()

// unindo objeto

const o1 = {obj1:"1"}
const o2 = {obj2:"2"}
const o3 = {obj3:"3"}
const o4 = Object.assign(o1,o2,o3)

console.log(o4)

// criando um objeto de um objeto ja existente 

const c2 = Object.create(computador)
c2.cpu = "i87"
c2.info()