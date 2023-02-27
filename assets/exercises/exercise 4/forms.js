// função para calcular a media das músicas de um cantor
function mediaTempoMusicas(tempoMusicas) {
    let somatorio = 0
  
    for (let tempo of tempoMusicas) {
      somatorio += tempo
    }
  
    return somatorio / tempoMusicas.length
  }
  
  // objeto vazio para armazenar o tempo das músicas de cada cantor
  let tempoMusicas = {
    zeVaqueiro: [],
    joaoGomes: []
  }
  
  // loop para pegar todas as entradas
  for (let i = 1; i <= 6; i++) {
    musica = prompt(`Digite as informações da musica ${i}:`).split(' - ')
  
    // condicional para armazenar o tempo das musicas no array de acordo com o cantor
    if (musica[1].toLowerCase().includes('ze vaqueiro')) {
      tempoMusicas.zeVaqueiro.push(parseFloat(musica[2]))
    } else if (musica[1].toLowerCase().includes('joao gomes')) {
      tempoMusicas.joaoGomes.push(parseFloat(musica[2]))
    }
  }
  
  // armazenando as medias das musicas de cada cantor em variaveis
  let mediaTempoMusicasZeVaqueiro = mediaTempoMusicas(tempoMusicas.zeVaqueiro).toFixed(2)
  let mediaTempoMusicasjoaoGomes = mediaTempoMusicas(tempoMusicas.joaoGomes).toFixed(2)
  
  // saída caso não tenha musica de ze vaqueiro ou joão gomes
  if (!tempoMusicas.zeVaqueiro[0] || !tempoMusicas.joaoGomes[0]) {
    console.log('Não Tivemos dados suficientes para chegar uma conclusão.')
  
    // saída caso ze vaqueiro tenha a media de tempo maior
  } else if (mediaTempoMusicasZeVaqueiro > mediaTempoMusicasjoaoGomes) {
    console.log(
      'De acordo com estes dados temos um forte indicativo de que as musicas de Ze Vaqueiro são mais longas que as de Joao Gomes.'
    )
  
    // saída caso ze vaqueiro tenha a media de tempo menor
  } else if (mediaTempoMusicasZeVaqueiro < mediaTempoMusicasjoaoGomes) {
    console.log(
      'De acordo com estes dados temos um forte indicativo de que as musicas de Joao Gomes são mais longas que as de Ze Vaqueiro.'
    )
  
    // saída caso a media de tempo forem iguais
  } else {
    console.log('Tivemos um empate técnico.')
  }