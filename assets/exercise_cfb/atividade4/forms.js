const btnSoma = document.querySelector('#soma')
const btnSubtrair = document.querySelector('#subtrair')
const btnMulti = document.querySelector('#multi')
const btnDividir = document.querySelector('#dividir')
const resultado = document.querySelector('#resultado')

const operacoes = [
  () => {
    const valores = [document.getElementById("numero1").value,document.getElementById("numero2").value]
    resultado.value = Number(valores[0])+Number(valores[1])
  },
  () => {
    const valores = [document.getElementById("numero1").value,document.getElementById("numero2").value]
    resultado.value = Number(valores[0])-Number(valores[1])
  },
  () => {
    const valores = [document.getElementById("numero1").value,document.getElementById("numero2").value]
    resultado.value = Number(valores[0])*Number(valores[1])
  },
  () => {
    const valores = [document.getElementById("numero1").value,document.getElementById("numero2").value]
    resultado.value = Number(valores[0])/Number(valores[1])
  }
]

btnSoma.addEventListener("click",operacoes[0])
btnSubtrair.addEventListener("click",operacoes[1])
btnMulti.addEventListener("click",operacoes[2])
btnDividir.addEventListener("click",operacoes[3])

