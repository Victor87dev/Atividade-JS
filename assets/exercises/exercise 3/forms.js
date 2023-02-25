




let cantor1 = (prompt('Digite o nome do primeiro cantor: '))
let cantor2 = (prompt('Digite o nome do segundo cantor: '))
let musica1Cantor1 = (prompt(`Digite o nome da primeira musica do cantor ${cantor1}: `))
let musica2Cantor1 = (prompt(`Digite o nome da primeira musica do cantor ${cantor2}: `))
let musica1Cantor2 = (prompt(`Digite o nome da segunda musica do cantor ${cantor1}: `))
let musica2Cantor2 = (prompt(`Digite o nome da segunda musica do cantor ${cantor2}: `))
let duracao1Musica1Cantor1 = parseFloat (prompt(`Digite a duração da musica ${musica1Cantor1} do cantor ${cantor1}: `))
let duracao2Musica2Cantor1 = parseFloat (prompt(`Digite a duração da musica ${musica2Cantor1} do cantor ${cantor1}: `))
let duracao1Musica1Cantor2 = parseFloat (prompt(`Digite a duração da musica ${musica1Cantor2} do cantor ${cantor2}: `))
let duracao2Musica2Cantor2 = parseFloat (prompt(`Digite a duração da musica ${musica2Cantor2} do cantor ${cantor2}: `))

console.log(`musica ${musica1Cantor1} - cantor ${cantor1} - duração ${duracao1Musica1Cantor1} `)
console.log(`musica ${musica2Cantor1} - cantor ${cantor1} - duração ${duracao2Musica2Cantor1} `)
console.log(`musica ${musica1Cantor2} - cantor ${cantor2} - duração ${duracao1Musica1Cantor2} `)
console.log(`musica ${musica2Cantor2} - cantor ${cantor2} - duração ${duracao2Musica2Cantor2} `)

function mediaDeDuracaoDasMusicas1(duracao1Musica1Cantor1,duracao2Musica2Cantor1){

    return (duracao1Musica1Cantor1 + duracao2Musica2Cantor1)/2 

}
let mediaDasMusicasCantor1 = mediaDeDuracaoDasMusicas1(duracao1Musica1Cantor1,duracao2Musica2Cantor1)


function mediaDeDuracaoDasMusicas2(duracao1Musica1Cantor2,duracao2Musica2Cantor2){

    return (duracao1Musica1Cantor2 + duracao2Musica2Cantor2)/2 

}
let mediaDasMusicasCantor2 = mediaDeDuracaoDasMusicas2(duracao1Musica1Cantor2,duracao2Musica2Cantor2)


if(mediaDasMusicasCantor1 > mediaDasMusicasCantor2){

    console.log(`De acordo com estes dados temos um forte indicativo de que as musicas de ${cantor1} são mais
    longas que as de ${cantor2}`)

}else if(mediaDasMusicasCantor2 > mediaDasMusicasCantor1){

    console.log(`De acordo com estes dados temos um forte indicativo de que as musicas de ${cantor2} são mais
    longas que as de ${cantor1}`)
}else{

console.log(`Tivemos um empate tecnico`)

}









