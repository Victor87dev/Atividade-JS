let array = [10,-7,8,-2,-100,45,25]

function retornarPositivo(arr) {
    let novoArray = []

    for(i = 0;i <= arr.length;i++){
      if(arr[i] >= 0){
        novoArray.push(arr[i])
      }
    }
    return novoArray
}

console.log(retornarPositivo(array))



