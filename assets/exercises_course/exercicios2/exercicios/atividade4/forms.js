
const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [10,10,10,10,10]

p_array.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener("click",(evt)=>{

function somarMedia(arr){
    const somar = arr.reduce((atual,anterior)=>{
       const result = atual+anterior
       return result / arr.length
    })
    return somar
}

resultado.innerHTML = somarMedia(elementos_array)


})