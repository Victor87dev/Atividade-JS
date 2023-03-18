/*

//exec 1

function multiplicar(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            const valor =  parseInt (prompt("digite um numero"));
            if(valor){
                resolve(valor * 2);
            }else{
                reject("o número não pode ser multiplicado")
            }
        },1000)
    });

}

multiplicar()
.then((result)=>{
    console.log(`o resultado da multiplicação é ${result}`)
})
.catch((error) =>{
    console.error(error)
})
*/

//exec 2

/*
function elevar(a){
    return new Promise ((resolve,reject) => {
       
      if(a<0){
      reject("numero menor que 0 erro")
      }

      setTimeout(()=>{
          resolve("o numero elevado ao quadrado"+ Math.pow(a,2))
      },2000)
    })
}

elevar(10)
.then((resultado)=>{
    console.log(resultado)
})
.catch((erro)=>{
    console.log(erro)
})

*/

//exec 3