
// minha forma de resolver o exercicio 

// farenheit -> celsius 

/*
function transformFc(fahrenheit){

   return (fahrenheit - 32) * 5/9

  

}

console.log("temperatura em Celsius: " + transformFc(50))
*/


/*
function celsius(){

    let fahrenheit = (prompt("digite fahrenheit: "))
   return  (fahrenheit - 32) * 5/9
}

console.log("celsius: " + celsius())
*/


// celsius -> farenheit ---------------------
/*
function fahrenheit(){

    let celsius = (prompt("digite celsius: "))
   return  celsius * 9/5 + 32
}

console.log("fahrenheit: " + fahrenheit())
*/


// rocketseat -----------------------------------

function transformDegree(degree){

    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro 

    if(!celsiusExists && !fahrenheitExists){
     
        throw new Error('Grau não identificado')
        

    }

    // fluxo ideal, F -> C 

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo C -> F

    if(celsiusExists){

         updatedDegree = Number(degree.toUpperCase().replace("C", ""));
         formula = celsius => celsius * 9/5 + 32
         degreeSign = 'F'

    }

return formula(updatedDegree) + degreeSign



}

try{
 console.log(transformDegree('10C'))
 console.log(transformDegree('50F'))
 transformDegree('50Z')
} catch(error){

    console.log(error.message)

}
