function numeroPar (){
 
    
    let numero1 = parseInt (document.getElementById("numero1").value)

    if(numero1%2){

        document.getElementById("resultado1").innerHTML = numero1 + (" numero impar, é falso")


    }else{

        
        document.getElementById("resultado1").innerHTML = numero1 + (" numero par, é verdadeiro")
    }
}