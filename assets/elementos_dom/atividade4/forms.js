// stop propagation 
/*
const caixa1 = document.getElementById('caixa1')
const todosBtn = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click',(evt)=>{
  console.log('clicou')
})

todosBtn.map((el)=>{
  el.addEventListener('click',(evt)=>{
  evt.stopPropagation()
  })
})
*/

// todosBtn.addEventListener('click',(evt)=>{
//     evt.stopPropagation()
// })
//------------------------------------------------------
// relação dos elementos
/*
const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(btn_c[0].children.length > 0 ? "possui filhos" : "nao possui filhos")
console.log(btn_c[0].hasChildNodes()) // retorna true ou false, caso tenha filho ou nao
console.log(caixa1.children[0].innerHTML = "Main")
*/

// ----------------------------------------------------
// criando elementos pelo script e 
// removendo elementos 
// (createElement, removeChild)

const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "Javascript", "PHP", "MySQL", "React Native"]

cursos.map((el,chave)=>{
  // criando elemento de forma dinamica
  const novoElemento = document.createElement("div")
  novoElemento.setAttribute("id","c"+(chave+1))
  novoElemento.setAttribute("class","curso c1")
  novoElemento.innerHTML = el
  
  // removendo elemento
  const btn_lixeira = document.createElement("img")
  btn_lixeira.setAttribute("src","../atividade4/img/lixeira.png")
  btn_lixeira.setAttribute("class","btn_lixeira")
  btn_lixeira.addEventListener("click",(evt)=>{
    caixa1.removeChild(evt.target.parentNode)
  })

  novoElemento.appendChild(btn_lixeira)
  caixa1.appendChild(novoElemento)
})







