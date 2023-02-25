


/*

let singer1 = (prompt('Digite o nome do primeiro cantor: '))
let singer2 = (prompt('Digite o nome do segundo cantor: '))
let music1Singer1 = (prompt(`Digite o nome da primeira musica do cantor ${singer1}: `))
let music2Singer1 = (prompt(`Digite o nome da primeira musica do cantor ${singer2}: `))
let music1Singer2 = (prompt(`Digite o nome da segunda musica do cantor ${singer1}: `))
let music2Singer2 = (prompt(`Digite o nome da segunda musica do cantor ${singer2}: `))
let duration1Music1Singer1 = parseFloat (prompt(`Digite a duração da musica ${music1Singer1} do cantor ${singer1}: `))
let duration2Music2Singer1 = parseFloat (prompt(`Digite a duração da musica ${music2Singer1} do cantor ${singer1}: `))
let duration1Music1Singer2 = parseFloat (prompt(`Digite a duração da musica ${music1Singer2} do cantor ${singer2}: `))
let duration2Music2Singer2 = parseFloat (prompt(`Digite a duração da musica ${music2Singer2} do cantor ${singer2}: `))

console.log(`musica ${music1Singer1} - cantor ${singer1} - duração ${duration1Music1Singer1} `)
console.log(`musica ${music2Singer1} - cantor ${singer1} - duração ${duration2Music2Singer1} `)
console.log(`musica ${music1Singer2} - cantor ${singer2} - duração ${duration1Music1Singer2} `)
console.log(`musica ${music2Singer2} - cantor ${singer2} - duração ${duration2Music2Singer2} `)

function averageDurationOfSongs1(duration1Music1Singer1,duration2Music2Singer1){

    return (duration1Music1Singer1 + duration2Music2Singer1)/2 

}
let averageOfSongsSinger1 = averageDurationOfSongs1(duration1Music1Singer1,duration2Music2Singer1)

function averageDurationOfSongs2(duration1Music1Singer2,duration2Music2Singer2){

    return (duration1Music1Singer2 + duration2Music2Singer2)/2 

}
let averageOfSongsSinger2 = averageDurationOfSongs2(duration1Music1Singer2,duration2Music2Singer2)


if(averageOfSongsSinger1 > averageOfSongsSinger2){

    console.log(`De acordo com estes dados temos um forte indicativo de que as musicas de ${singer1} são mais
    longas que as de ${singer2}`)

}else if(averageOfSongsSinger2 > averageOfSongsSinger1){

    console.log(`De acordo com estes dados temos um forte indicativo de que as musicas de ${singer2} são mais
    longas que as de ${singer1}`)
}else{

console.log(`Tivemos um empate tecnico`)

}

*/


let informacoesMusicas = {
    musica1:[],
    duracao1:[],
    musica2:[],
    duracao2:[]


}

let cantor1 = (prompt("Digite o nome do primeiro cantor: "))
let cantor2 = (prompt("Digite o nome do segundo cantor: "))

for(let i = 0; i < 2; i++){
    informacoesMusicas.musica1[i] = (prompt(`Digite o nome da ${i + 1} musica do cantor ${cantor1}: `))
    informacoesMusicas.duracao1[i] = parseFloat (prompt(`Digite a duração da ${i + 1} musica do cantor ${cantor1}: `))
    informacoesMusicas.musica2[i] = (prompt(`Digite o nome da ${i + 1} musica do cantor ${cantor2}: `))
    informacoesMusicas.duracao2[i] = parseFloat (prompt(`Digite a duração da ${i + 1} musica do cantor ${cantor2}: `))
}
console.log(`cantor: ${cantor1} musicas: ${informacoesMusicas.musica1} durações: ${informacoesMusicas.duracao1}`)
console.log(`cantor: ${cantor2} musicas: ${informacoesMusicas.musica2} durações: ${informacoesMusicas.duracao2}`)

function sum(array){

    let total = 0

    for(let value of array){

        total += value

    }

   return total

}

let duracaoMusicas1 = sum(informacoesMusicas.duracao1)
let duracaoMusicas2 = sum(informacoesMusicas.duracao2)

function mediaDasMusicasCantor1(duracaoMusicas1){

    return duracaoMusicas1/2

}
let mediaDuracao1 = mediaDasMusicasCantor1(duracaoMusicas1)

function mediaDasMusicasCantor2(duracaoMusicas2){

    return duracaoMusicas2/2

}
let mediaDuracao2 = mediaDasMusicasCantor2(duracaoMusicas2)


if(mediaDuracao1 > mediaDuracao2){
   console.log(`De acordo com estes dados temos um forte indicativo de que as musicas de ${cantor1} são mais
   longas que as de ${cantor2}`)
}else if(mediaDuracao2 > mediaDuracao1){
     console.log(`De acordo com estes dados temos um forte indicativo de que as musicas de ${cantor2} são mais
     longas que as de ${cantor1}`)
}else{
    console.log(`Tivemos um empate tecnico`)
}

