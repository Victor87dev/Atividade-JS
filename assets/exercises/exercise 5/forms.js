


/*
let listOfSuspects = []

let prohibited = (prompt(`Digite a entrada`))

switch(prohibited){
  case `novo suspeito - altissima periculosidade`:
  listOfSuspects.push('joao')
  break;
  case `novo suspeito - pouco perigoso`:
  listOfSuspects.push('marcos')
  break;
  default:
  `nada`
  break

}

console.log(listOfSuspects)
*/

let listOfSuspects = []

listOfSuspects[0] = (prompt(`novo suspeito - altissima periculosidade`))
listOfSuspects[1] = (prompt(`novo suspeito - pouco perigoso`))
listOfSuspects[2] = (prompt(`livre de suspeita, pode remover`))

console.log(`novo suspeito - altissima periculosidade
 ${listOfSuspects[0]}   
 novo suspeito - pouco perigoso 
 ${listOfSuspects[1]}
 livre de suspeita, pode remover
 ${listOfSuspects[2]} 
 `)
 listOfSuspects.pop()
 

function mudarPosicao(arr, from, to){
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
} 

mudarPosicao(listOfSuspects, 0,1)
console.log(listOfSuspects)



