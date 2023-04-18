// getElementByClassName ------ (pega elemento por classe)

const todosCursos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[0]


console.log(todosCursos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

cursosC1.map((ele) => {
  ele.classList.add("destaque")// adiciona a classe "destaque"
})