// parametros REST (usando spread como parametro) 
// modo 1 usando for normal 
/*
function soma(...valores) {
  let somar = 0
  let pa = valores.length
  for (let i = 0;i < pa;i++) {
    somar += valores[i]
  }
return somar
}

console.log(soma(10,10))
*/

// modo 2 usando for of 

function soma(...valores) {
    let somar = 0
    
    for (let valor of valores) {
      somar += valor
    }
  return somar
  }
  
  console.log(soma(10,10))