function perguntas(){



let pergunta = (document.getElementById("pergunta1").value)

switch(pergunta){
 
    case 'qual o seu nome ?':
        document.getElementById("resposta1").innerHTML = "João"
        break
     
    case 'qual a sua idade ?':
         document.getElementById("resposta1").innerHTML = 20
        break    

    case 'qual o seu bairro ?':
        document.getElementById("resposta1").innerHTML = "Jordão alto"
        break    

    case 'que cidade você mora ?':
        document.getElementById("resposta1").innerHTML = "Recife"
    break    

    default:
        document.getElementById("resposta1").innerHTML = "Sem resposta"
    break
}

}