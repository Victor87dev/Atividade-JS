const f_tipoMilitar = document.querySelector("#f_tipoMilitar") // (radio) militar
const f_tipoNormal = document.querySelector("#f_tipoNormal") // (radio) normal
const f_blindagem = document.querySelector("#f_blindagem") // caixa de texto Blindagem
const f_municao = document.querySelector("#f_municao") // caixa de texto Munição
const f_nome = document.querySelector("#f_nome") // caixa de texto Nome
const f_portas = document.querySelector("#f_portas") // caixa de texto Portas
const carros = document.querySelector("#carros") // caixa que será criada
const btn_addCarro = document.querySelector("#btn_addCarro")  // botao para adicionar 

let a_carros = []

const removerCarro=(quem)=>{
  a_carros=a_carros.filter((el)=>{
    return el.nome!=quem
  })
}

f_tipoMilitar.addEventListener("click",(evt)=>{
  f_nome.value = ""
  f_portas.value = 0
  f_blindagem.value = 0
  f_municao.value = 0
  f_blindagem.removeAttribute("disabled")
  f_municao.removeAttribute("disabled")
})
f_tipoNormal.addEventListener("click",(evt)=>{
  f_nome.value = ""
  f_portas.value = 0
  f_blindagem.value = 0
  f_municao.value = 0
  f_blindagem.setAttribute("disabled","disabled")
  f_municao.setAttribute("disabled","disabled")
})

const gerenciarExibicaoCarros=()=>{
  carros.innerHTML = ""
  a_carros.forEach((c)=>{
      const div = document.createElement("div")
      const btn = document.createElement("button")
      btn.innerHTML = "remover"
      btn.addEventListener("click",(evt)=>{
        const quemRemover = evt.target.parentNode.dataset.nome
        removerCarro(quemRemover)
        gerenciarExibicaoCarros()
      })
    div.setAttribute("class","carro")
    div.setAttribute("data-nome",c.nome)
    div.innerHTML = `Nome: ${c.nome}<br/>`
    div.innerHTML += `Portas: ${c.portas}<br/>`
    div.innerHTML += `Cor: ${c.cor}<br/>`
    div.innerHTML += `Blindagem: ${c.blindagem}<br/>`
    div.innerHTML += `Munição: ${c.municao}<br/>`
    div.appendChild(btn)
    carros.appendChild(div)
  })
}

btn_addCarro.addEventListener("click",(evt)=>{
  if(f_tipoNormal.checked){
    const c = new Carro(f_nome.value,f_portas.value)
    a_carros.push(c)
  }else{
    const c = new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)
    a_carros.push(c)
  }
  gerenciarExibicaoCarros()
})

class Carro { // Classe pai / classe base
  constructor(nome,portas){
    this.nome = nome 
    this.portas = portas 
    this.ligado = false 
    this.vel = 0
    this.cor = undefined
  }
  ligar=function(){
     this.ligado = true
  }
  desligar=function(){
    this.ligado = false 
  }
  setCor=function(cor){
    this.cor = cor 
  }
}

class Militar extends Carro { // classe filho
  constructor(nome,portas,blindagem,municao){
    super(nome,portas)
    this.blindagem = blindagem
    this.municao = municao 
    this.setCor("verde")
  }
  atirar=function(){
    if(this.municao>0){
      this.municao--
    }
  }
}

class Utilitario extends Carro {
  constructor(nome,portas,lugares,ipva){
    super(nome,portas)
    this.lugares = lugares
    this.ipva = ipva
  }
  setVel=function(vel){
    this.vel = vel
  }
}

const c1 = new Carro("normal",4)
c1.ligar()
c1.setCor("preto")

const c2 = new Militar("lutador",1,100,50)
c2.setCor("azul")
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

const c3 = new Utilitario("maximi",3,"maceio",1500)
c3.setCor("branco")
c3.desligar()
c3.setVel(500)

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado?"sim":"nao"}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("------------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado?"sim":"nao"}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Cor: ${c2.municao}`)
console.log("------------------------")

console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Lugares: ${c3.lugares}`)
console.log(`Cor: ${c3.cor}`)
console.log(`Ligado: ${c3.ligado?"sim":"nao"}`)
console.log(`Ipva: ${c3.ipva}`)
console.log(`Velocidade: ${c3.vel}`)
console.log("------------------------")