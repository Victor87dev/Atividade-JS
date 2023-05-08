// coleção map ----------------------------------------
/*
const caixa = document.querySelector("#caixa")

let mapa = new Map() 

mapa.set("curso","javaScript")
mapa.set(1,"cfb curso")
mapa.set(2,"cfb array")

mapa.delete(1)

console.log(mapa)

let res = ""
let pes = "curso"

if(mapa.has(pes)){
   res = innerHTML = "a chave existe na coleçao:" + mapa.get(pes)
}else{
    res = innerHTML = "a chave nao existe"
}
res += "<br> o tamanho da coleção é " + mapa.size

mapa.forEach((el)=>{
   console.log(el)
})

caixa.innerHTML = res
*/

// coleção set -------------------------------------------

const caixa = document.querySelector("#caixa")

let colecao = new Set(["musica","boa"])

colecao.add("musica suave")
colecao.add("musica suave")
colecao.delete("musica")

// colecao.forEach((el)=>{
//    caixa.innerHTML += el + "<br>" 
// })

for(let m of colecao){
   caixa.innerHTML += m + "<br>" 
}

console.log(colecao)


