const btn = document.getElementById("btn")
let numero = 10

btn.addEventListener("click",(evt)=>{
  if(numero <= 10){
    alert('insuficiente')
  } else if(numero <= 14){
     alert('bom')
  } else if(numero > 14){
    alert('muito bom')
  }

})