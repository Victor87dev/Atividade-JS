function Mostrar(num){
    console.log("O valor agora é" + num)
}



function Somar( X, Y, callback){
   let valor = X+Y;
   //console.log(valor);
   callback(valor)
}


function Subtrair(Z, M,  callback){
    let valor = Z - M;
   // console.log(valor);
    callback(valor)
}

Somar(5,5, Mostrar)  ;

Subtrair(7,4, Mostrar);


// let promise = new Promise(function(resolve, reject) {
//     // a função é executada automaticamente quando a promise é solicitada
 
//     // após 1 segundo  o trabalho está concluído com a saída "concluído"
//     setTimeout(() => resolve("Concluído"), 1000);
//   });


Math.pow(altura * altura)