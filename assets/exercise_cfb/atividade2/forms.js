const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [10,12,11,11,9,11]
p_array.innerHTML = "[" + elementos_array + "]"

btnVerificar.addEventListener("click",(evt) => {
  const verificarSome = elementos_array.some((elementos,i) => {
   return elementos >= 18
  })

  if(verificarSome) {
    resultado.innerHTML = 'correto'    
  } else {
    resultado.innerHTML = 'incorreto'    
  }
})

