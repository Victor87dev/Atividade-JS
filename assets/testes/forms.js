

function mediaTempoMusicas(tempoDePassagem){
  let somatorio = 0

  for(let tempo of tempoDePassagem){
  somatorio += tempo
  }

  return somatorio / tempoDePassagem.length
}

let tempoDePassagem = {
  tempo1:[],
  tempo2:[]
}

for(let i = 0;i < 2;i++){
  tempoDePassagem.tempo1[i] = parseFloat (prompt(`digite o numero ${i + 1}:`))
  tempoDePassagem.tempo2[i] = parseFloat (prompt(`digite o numero ${i + 1}:`))
}

mediaTempoDeMusica1 = mediaTempoMusicas(tempoDePassagem.tempo1).toFixed(2)
mediaTempoDeMusica2 = mediaTempoMusicas(tempoDePassagem.tempo2).toFixed(2)

if(mediaTempoDeMusica1 > mediaTempoDeMusica2){
  console.log('tempo1')
}else if(mediaTempoDeMusica1 < mediaTempoDeMusica2){
  console.log('tempo2')
}else{
  console.log('tempos nao identificados')
}
