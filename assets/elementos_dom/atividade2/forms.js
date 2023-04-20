// getElementByClassName ------ (pega elemento por classe)
//const btn1 = document.querySelector('#c1')
const todasDivs = [...document.querySelectorAll('.curso')]

// const msg = ()=>{
//   alert('clicou')
// }

// btn1.addEventListener('click',(evt)=>{
//   const el = evt.target
//   el.classList.add("destaque") 
// })

todasDivs.map((el)=>{
  el.addEventListener("click",(evt)=>{
    const ele = evt.target
    ele.classList.add("destaque")
    console.log(ele.innerHTML + " foi clicado")
  })
})