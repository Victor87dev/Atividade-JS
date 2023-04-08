const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [10,12,14,11,9,11]
p_array.innerHTML = "[" + elementos_array + "]"

btnVerificar.addEventListener("click",(evt) => {
  const verificarEvery = elementos_array.some((elementos,i) => {
   if(elementos >= 18) {
    return  resultado.innerHTML = "Ok"
   } else {
    resultado.innerHTML = "Array não conforme "
   }
  })
})

