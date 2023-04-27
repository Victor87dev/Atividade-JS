const btn = document.getElementById("btn")

btn.addEventListener("click",(evt)=>{
   const a = (a,b)=>{
    return Math.floor(Math.random() * (b - a + 1))
   }
   alert(a(0,50))
})