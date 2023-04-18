// ElementById -------------------- (pega um elemento por vez)

const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const array = [dc1,dc2,dc3,dc4,dc5,dc6]

//for (v of array) {
//    console.log(v)
//} 

//array.map((ele) => {
//   ele.innerHTML = "cfb"
//   console.log(ele)
//})

// ElementsByTagName ------------- (pega uma coleção de elementos)

const collection = [...document.getElementsByTagName("div")]

console.log(collection)

collection.map((ele) => {
  console.log(ele)
})




