
// minha forma de resolver o exercicio 

// farenheit -> celsius 

/*
function transformFc(fahrenheit){

   return (fahrenheit - 32) * 5/9

  

}

console.log("valor em Celsius: " + transformFc(50))
*/


/*
function celsius(){

    let fahrenheit = (prompt("digite fahrenheit: "))
   return  (fahrenheit - 32) * 5/9
}

console.log("celsius: " + celsius())
*/


// celsius -> farenheit ---------------------

function fahrenheit(){

    let celsius = (prompt("digite celsius: "))
   return  celsius * 9/5 + 32
}

console.log("fahrenheit: " + fahrenheit())