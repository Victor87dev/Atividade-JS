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






