// com parametro ----------------------
/*
class Pessoa {
  constructor(pnome){
    this.nome = pnome
  }
}

let p1 = new Pessoa("marcos")

console.log(p1.nome)
*/

// sem parametro -----------------------------
/*
class Pessoa {
  constructor(){
    this.nome = "marcos"
  }
}

let p1 = new Pessoa()

console.log(p1.nome)
*/

/*
class Carro{
  canal = "cfb cursos"
  constructor(pnome,ptipo){
    this.nome = pnome
    if(ptipo==1){
      this.tipo = "Esportivo"
      this.velMax = 200
    }else if(ptipo==2){
      this.tipo = "utilitario"
      this.velMax = 150
    }else if(ptipo==3){
      this.tipo = "passeio"
      this.velMax = 120
    }else{
      this.tipo = "militar"
      this.velMax = 180
    }
  }

  getInfo(){
    return [this.nome,this.tipo,this.velMax]
  }

  setNome(nome){
    return this.nome = nome
  }
  setTipo(tipo){
    return this.tipo = tipo
  }
  setvelMax(velMax){
    return this.velMax = velMax
  }

  info(){
   console.log(`Nome: ${this.nome}`)
   console.log(`Tipo: ${this.tipo}`)
   console.log(`Velocidade: ${this.velMax}`)
   console.log(`canal: ${this.canal}`)
   console.log("--------------------------")
  } 
}

let c1 = new Carro("rapidao",1)
let c2 = new Carro("marqs",2)

// c1.info()
// c2.info()
c1.setNome("veloz")
c1.setTipo("prime")

c1.info()
c2.info()
*/

/*
class Escola {
   canal = "cfb"
  constructor(pnome,ptipo){
    this.canal = "curso"
    this.nome = pnome
    if(ptipo==1){
      this.tipo = "elo"
      this.velMax = 7
    }else if(ptipo==2){
      this.tipo = "paulo freire"
      this.velMax = 2
    }else{
      this.tipo = "manoel borba"
      this.velMax = 45
    }

  }
  getInfo(){
    return [this.nome,this.tipo,this.velMax]
  }
   
  setNome(nome){
    this.nome = nome
  }
  setTipo(tipo){
    this.tipo = tipo
  }
  setvelMax(velMax){
    this.velMax = velMax
  }

  info(){
    console.log(`Nome: ${this.nome}`)
    console.log(`Tipo: ${this.tipo}`)
    console.log(`Vel: ${this.velMax}`)
    console.log(`canal: ${this.canal}`)
    console.log("------------------------")
  }
}

let e1 = new Escola("colegio",1)
let e2 = new Escola("starlink",2)

e1.info()
e2.info()
*/

/*
class Pessoa {
  constructor(pnome){
    this.nome = pnome
  }
}

let p1 = new Pessoa("marcos")

console.log(p1.nome)
*/

// sem parametro -----------------------------
/*
class Pessoa {
  constructor(){
    this.nome = "marcos"
  }
}

let p1 = new Pessoa()

console.log(p1.nome)
*/

/*
class Pessoa{
  constructor(pnome,pidade){
    this.nome = pnome
    this.idade = pidade
  }
  getNome(){
    return this.nome
  }
  getidade(){
    return this.idade
  }
  setNome(nome){
    return this.nome = nome
  }
  setidade(idade){
    return this.idade = idade
  }
  info(){
   console.log(`Nome: ${this.nome}`)
   console.log(`Idade: ${this.idade}`)
   console.log("--------------------------")
  } 
}

let pessoas = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa = ()=>{
  res.innerHTML = ""
  pessoas.map((p)=>{
    const div = document.createElement("div")
    div.setAttribute("class","pessoa")
    div.innerHTML = `Nome: ${p.getNome()}<br/>Idade:${p.getidade()}`
    res.appendChild(div)
  })
}

btn_add.addEventListener("click",(evt)=>{
  const nome = document.querySelector("#f_nome")
  const idade = document.querySelector("#f_idade")
  const p = new Pessoa(nome.value,idade.value)
  pessoas.push(p)
  nome.value=""
  idade.value=""
  nome.focus()
  addPessoa()
})

*/

// usando com function e function anonima --------------------

/*
function Pessoa(pnome,pidade){
  
  this.nome = pnome,
  this.idade = pidade,
  
  this.getNome=function(){
    return this.nome
  },
  this.getidade=function(){
    return this.idade
  },
  this.setNome=function(nome){
    return this.nome = nome
  },
  this.setidade=function(idade){
    return this.idade = idade
  },
  this.info=function(){
   console.log(`Nome: ${this.nome}`)
   console.log(`Idade: ${this.idade}`)
   console.log("--------------------------")
  } 
}

let pessoas = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa = ()=>{
  res.innerHTML = ""
  pessoas.map((p)=>{
    const div = document.createElement("div")
    div.setAttribute("class","pessoa")
    div.innerHTML = `Nome: ${p.getNome()}<br/>Idade:${p.getidade()}`
    res.appendChild(div)
  })
}

btn_add.addEventListener("click",(evt)=>{
  const nome = document.querySelector("#f_nome")
  const idade = document.querySelector("#f_idade")
  const p = new Pessoa(nome.value,idade.value)
  pessoas.push(p)
  nome.value=""
  idade.value=""
  nome.focus()
  addPessoa()
})
*/

// o mesmo exemplo usando objetos literais e usando for in para percorrer o objeto 

const Pessoa={
  nome:"",
  idade:0,
  setNome:function(nome){
      this.nome=nome
  },
  setIdade:function(idade){
      this.idade=idade
  },
  getNome:function(){
      return this.nome
  },
  getIdade:function(){
      return this.idade
  }
}

const addPessoa=()=>{
  for(let prop in Pessoa){
      let res=document.querySelector(".res")
      const div=document.createElement("div")
      div.setAttribute("class","pessoa")
      div.innerHTML=`Name: ${Pessoa.nome}<br/>Idade: ${Pessoa.idade}`
      res.appendChild(div)
      break
  }
}

btn_add.addEventListener("click",(evt)=>{
  const nome=document.querySelector("#f_nome")
  const idade=document.querySelector("#f_idade")
  Pessoa.setNome(nome.value)
  Pessoa.setIdade(idade.value)
  addPessoa()
})