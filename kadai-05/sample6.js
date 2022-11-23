// 参照型に関するありそうなミス

const student1 = {
    score: 80,
    name: "鎌田",
}

//const student2 = student1
//student2 = "山田"

const student2 = {
    score: 90,
    name: "山田",
}

const student3 = Object.assign({}, student2)
student3.name = "鈴木"
console.log(student1)
console.log(student2)
console.log(student3)

const student4 = { ...student3}
student4.score = 100
console.log(student4)

const student_a = {
    ...student_default,
    name: "田中"
}
const student_b = {
    ...student_default,
    name
}