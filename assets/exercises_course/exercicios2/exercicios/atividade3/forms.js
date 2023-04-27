const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1,2,3,4,5]

p_array.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener("click",(evt)=>{
    resultado.innerHTML = elementos_array.reduce((atual,anterior)=>{
     const result = anterior+atual
     return result
    }) 

})