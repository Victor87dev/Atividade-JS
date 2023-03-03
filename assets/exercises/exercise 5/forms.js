function mudarPosicao (arr, from, to) {
 arr.splice(to, 0, arr.splice(from, 1)[0]);
 return arr;
} 

let listOfSuspects = []

listOfSuspects[0] = (prompt(`novo suspeito - altissima periculosidade`))
listOfSuspects[1] = (prompt(`novo suspeito - pouco perigoso`))
listOfSuspects[2] = (prompt(`livre de suspeita, pode remover`))
listOfSuspects[3] = (prompt(`que estranho, esses dois meliantes.. troque-os de lugar`))
listOfSuspects[4] = (prompt(`que estranho, esses dois meliantes.. troque-os de lugar`))

console.log(`novo suspeito - altissima periculosidade
${listOfSuspects[0]}  

novo suspeito - pouco perigoso 
${listOfSuspects[1]}

livre de suspeita, pode remover
${listOfSuspects[2]} 

que estranho, esses dois meliantes.. troque-os de lugar
${listOfSuspects[3]}
${listOfSuspects[4]}

essa posição não esta de acordo, ele não é tao perigoso assim
${listOfSuspects[1]}

como a lista esta ficando ?
${listOfSuspects}
`)

mudarPosicao(listOfSuspects, 1,2)
mudarPosicao(listOfSuspects, 3,4)
listOfSuspects.push(listOfSuspects.splice(0,1)[0])

console.log(listOfSuspects)
console.log(`ja temos nossa lista de suspeitos: 
suspeito 1 ${listOfSuspects[0]} suspeito 2 ${listOfSuspects[1]} suspeito 3 ${listOfSuspects[2]} suspeito 4 ${listOfSuspects[3]} suspeito 5 ${listOfSuspects[4]}`)


