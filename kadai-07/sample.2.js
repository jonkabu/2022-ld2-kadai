class Person {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log("こんにちは、私は" + this.name + "です。")
    }
}

class Student extends Person {
    hello () {
        console.log("こんにちは、私は" + this.name + "です。学生です。")
    }
}

const person = new Person("田中")
const student = new Student("田中")
console.log(student.name)