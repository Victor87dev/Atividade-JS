// stop propagation 

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

// todosBtn.addEventListener('click',(evt)=>{
//     evt.stopPropagation()
// })

