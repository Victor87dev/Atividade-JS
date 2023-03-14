// exercicio 1
/*
let veiculo = {
    marca: "fiat",
    modelo: "cronos",
    descricao: function(){
      console.log(`O carro é da marca ${this.marca} e modelo ${this.modelo}`)
    }
}

veiculo.descricao()
*/

// exercicio 2 
/*
let pessoa = {
  nome: "joao",
  idade: 20,
  profissao:"programador",
  saudacao: function(){
    console.log(`Ola, meu nome é ${this.nome} tenho ${this.idade} e sou ${this.profissao}`)
  }
}

pessoa.saudacao()
*/

// exercicio 3

let pessoa = {
    saldo:1000,
    titular:"joao",
    deposito: function(valor){
    this.saldo += valor
    console.log(`um deposito de ${valor} foi feito. seu novo saldo é ${this.saldo}`)
  
    },
    saque: function(valor){
      this.saldo -= valor
      if(valor <= this.saldo){
        console.log(`saque de ${valor} foi feito, seu saldo atual é: ${this.saldo}`)
      }else{
        console.log(`saldo insuficiente`)
      }
    }
  }
  
  pessoa.deposito(10)
  pessoa.saque(150)
  
  
  /*
  let contaBancaria = {
    saldo:600,
    titular:"joao",
    deposito: function(valor) {
      this.deposito = 600
      this.saldo = this.deposito
    },
    saque: function(valor){
      this.saque = 300
      this.saldo - this.saque
    }
  }
  
  contaBancaria.saque()
  */
  
  // exercicio 5 
  /*
  let numeros1 = [1,2,3]
  
  function maiorNumero(){
    const novo2 = Math.max(...numeros1)
    return novo2
  }
  
  console.log(maiorNumero(numeros1))
  */
  
  