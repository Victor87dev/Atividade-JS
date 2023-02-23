let earlyLifeFinn = 100

let coup1finn = 10
let coup2finn = 10
let coup3finn =10
let coup4finn = 10

let earlyLifeReiGelado = 100

let coup1ReiGelado = 10
let coup2ReiGelado = 30
let coup3ReiGelado= 10
let coup4ReiGelado = 10

// função para descobrir a soma dos golpes do Finn

function sumOfBlowsFinn(){

    return coup1finn + coup2finn + coup3finn + coup4finn

}

let sumFinn = sumOfBlowsFinn(coup1finn,coup2finn,coup3finn,coup4finn)


// função para descobrir a soma dos golpes do Rei Gelado

function sumOfBlowsReiGelado(){

    return coup1ReiGelado + coup2ReiGelado + coup3ReiGelado + coup4ReiGelado

}

let sumReiGelado = sumOfBlowsReiGelado(coup1ReiGelado,coup2ReiGelado,coup3ReiGelado,coup4ReiGelado)


// função para descobrir a vida final de Finn

function finalFinn(){

    return earlyLifeFinn - sumReiGelado

}

let finalLifeFinn = finalFinn(earlyLifeFinn,sumReiGelado)


// função para descobrir a vida final do Rei Gelado


function finalReiGelado(){

    return earlyLifeReiGelado - sumFinn

}

let finalLifeReiGelado = finalReiGelado(earlyLifeReiGelado,sumFinn)




if(finalLifeFinn > finalLifeReiGelado){

    console.log(`Após esquivar de todas as magias do mago, Finn venceu a luta e deu ${sumFinn} 
    de dano, Deixando o Rei gelado com ${finalLifeReiGelado} de vida restante. `)


}else if(finalLifeReiGelado > finalLifeFinn){

   console.log(`As magias foram implacaveis, Finn lutou com todas suas forças, mas o Rei Gelado foi vitorioso, o mago conseguiu dar ${sumReiGelado} de dano, Deixando Finn com ${finalLifeFinn} de vida restante.`)

}else{

console.log(`Apesar dos esforços, ninguem foi capaz de ser vitoriso, ficando com exatamente ${finalLifeFinn} de vida restante cada. Portanto terão que resolver suas intrigas em outra oportunidade`)

}