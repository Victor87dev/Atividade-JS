

let nota1 = parseInt (prompt('digite a sua nota: '))



switch(nota1){

    

    case (nota1 >= 90):
    document.write(`${nota1} A`)
    break

    case (nota1 >= 80):
      document.write(`${nota1} B`)
    break;

    case (nota1 >= 70):
      document.write(`${nota1} C`)
    break;

    case (nota1 >= 60) :
      document.write(`${nota1} D`)
    break;

    case (nota1 < 60):
      document.write(`${nota1} F`)
    break;

    default :
    document.write("nota nao identificada ")
    break;



}




/*

let nota1 = parseInt (prompt("digite a sua nota: "))

if(nota1 >= 90){


    document.write(`${nota1} A`)

}else if(nota1 >= 80){

    document.write(`${nota1} B`)


}else if(nota1 >= 70){

document.write(`${nota1} C`)

}else if(nota1 >= 60){

    document.write(`${nota1} D`)

}else if(nota1 < 60){

    document.write(`${nota1} F`)
}else{

    document.write(`valor nao identificado`)
}
*/