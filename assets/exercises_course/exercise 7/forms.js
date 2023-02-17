function salarioAumento(){

    let nome = (document.getElementById("nome1").value)
    let salario = parseFloat (document.getElementById("salario1").value)
  
    let aumento1 = 0.20
    let aumento2 = 0.15
    let aumento3 = 0.10
    let aumento4 = 0.05

  

    if(salario <= 280){

        let valorExato = aumentoSalarioValor(salario,aumento1)

        function aumentoSalarioValor (){

        return salario * aumento1 

       }

        document.getElementById("valor1").innerHTML = nome + " seu aumento é: " + valorExato.toFixed(2) + " R$"
        document.getElementById("salario2").innerHTML = nome + " seu salario antes era: " + salario.toFixed(2) + " R$"
        document.getElementById("resposta1").innerHTML = nome + " seu salario com aumento é: " + (salario + valorExato).toFixed(2) + " R$" 

    }else if(salario >= 281 && salario <= 700){

        let valorExato2 = aumentoSalarioValor2(salario,aumento2)

        function aumentoSalarioValor2(){
    
            return salario * aumento2
        }

        document.getElementById("valor1").innerHTML = nome + " seu aumento é: " + valorExato2.toFixed(2) + " R$"
        document.getElementById("salario2").innerHTML = nome + " seu salario antes era: " + salario.toFixed(2) + " R$"
        document.getElementById("resposta1").innerHTML = nome + " seu salario com aumento é: " + (salario + valorExato2).toFixed(2) + " R$"

    }else if(salario >= 701 && salario <= 1500){
      

        let valorExato3 = aumentoSalarioValor3(salario,aumento3)

        function aumentoSalarioValor3(){
    
            return salario * aumento3
        }


        document.getElementById("valor1").innerHTML = nome + " seu aumento é: " + valorExato3.toFixed(2) + " R$"
        document.getElementById("salario2").innerHTML = nome + " seu salario antes era: " + salario.toFixed(2) + " R$"
        document.getElementById("resposta1").innerHTML = nome + " seu salario com aumento é: " + (salario + valorExato3).toFixed(2) + " R$"


    }else if(salario >= 1501){

        
        let valorExato4 = aumentoSalarioValor4(salario,aumento4)

        function aumentoSalarioValor4(){

        return salario * aumento4
    }

        document.getElementById("valor1").innerHTML = nome + " seu aumento é: " + valorExato4.toFixed(2) + " R$"
        document.getElementById("salario2").innerHTML = nome + " seu salario antes era: " + salario.toFixed(2) + " R$"
        document.getElementById("resposta1").innerHTML = nome + " seu salario com aumento é: " + (salario + valorExato4).toFixed(2) + " R$"


    }else{
        document.getElementById("resposta1").innerHTML = "salario nao identificado"
    }


    


  







    
    


}