// Minha forma de fazer -----------------------------------------

/*
let familia = {
      receitas:[20,30],
      despesas:[10,70]



}

function totalDeReceita(number1,number2){
   
    return number1 + number2

}


let totalReceitas = totalDeReceita(20,30)

console.log('receita da familia: ' + totalReceitas)



function totalDeDespesas(number1,number2){

  return number1 + number2

}

let totalDespesas = totalDeDespesas(10,70) 

console.log('despesas da familia: ' + totalDespesas)


function total(totalDespesas,totalReceitas){

    return totalReceitas - totalDespesas
}

let resultadoFinal = total(totalDespesas,totalReceitas)


if(totalReceitas < totalDespesas){

    console.log("a familia esta com saldo negativo " + resultadoFinal)



}else{

    console.log("a familia esta com saldo positivo " + resultadoFinal)

}
*/

// forma da rocketseat -------------------------------------------------------

let family = {

    incomes:[2200, 3200, 250.43, 360.20],
    expenses:[320.34, 128.20, 176.45, 1450,2000]

}

function sum(array){
let total = 0

for(let value of array){
   total += value

}

return total 

}

function calculateBalance(){

    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)


    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if(itsOk){

        balanceText = "positivo"
        
     }

     console.log(`seu saldo é ${balanceText}: ${total.toFixed(2)} R$ `)
}

calculateBalance()