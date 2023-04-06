const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [21,25,19,20,32,21,21]
p_array.innerHTML = "[" + elementos_array + "]"

btnVerificar.addEventListener("click",(evt) => {
  const verificarEvery = elementos_array.every((elementos,i) => {
   if(elementos >= 18) {
    return  resultado.innerHTML = "Ok"
   } else {
    resultado.innerHTML = "Array não conforme na posição " + i
   }
  })
})

