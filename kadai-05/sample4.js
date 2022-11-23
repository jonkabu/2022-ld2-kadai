const dish = {
    name: "ラーメン",
    price: 1000,
    osuume: "☆☆☆☆☆"
}

const keys = Object.keys(dish)
const values = Object.values

const a = {
    x : 1,
    y : 2
}

const b = a
console.log("a:",a)
console.log("b:",b)
b.x =10
console.log(a.x)
console.log(b.x)

console.log(a)

const name1 = "たま"
console.log(name1)
let name2 = name1
console.log(name2)
name2 = "ぽち"
console.log(name2)
console.log(name1)
