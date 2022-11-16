//　等価演算子と厳密等価演算子
// 条件分岐
// for文の構造
// for (初期化式; 条件式; 増分式) {
    // 繰り返し処理
const score = 2000
if (score > 60) {
    console.log("合格です")
} else if (score < 60) {
    console.log("不合格です")
}

for (let i = 0; i < 11; i = i + 1) {
    console.log(i)
}

for (let i = 0; i < 100; i = i + 1) {
    console.log(i)
    if (i > 20){
        break
    }
}

//for (let characters = ''; characters !== 'aaaaaaaaaaa'; characters = characters + 'a') {
   // console.log(characters);
    
//}

for (let index = 1; index < 101; index = index + 1) {
    if(index === 51){
        continue
    }
    console.log(index)
}

//whileループは特定の条件を満たしている間反復する
let count = 0
while (count < 100) {
    console.log("こんにちは", count)
    count = count + 1
}

//do..whileループ
let count2 = 0
do {
    console.log('こんにちは', count2)
    count2 = count2 + 1
} while(count2 < 100);

// if文の実習

const score1  = 90
if (score >= 90) {
    console.log('A')
} else if(score >= 80){
    console.log('B')
} else if(score >= 60){
    console.log('C')
} else {
    console.log('F')
}
let sum = 0
for (let i = 1; i <= 1000; i = i + 1) {
   sum = sum + i
    
}
console.log(sum)

let sum2 = 0
for (let i = 0; i <= 1000; i++) {
    if(i % 3 === 1) {
        sum2 = sum2 + i
        console.log(i)
    }
    
}
console.log(sum2)


function hello () {
    console.log('hello!')
    console.log('hello!!')
    console.log('hello!!!')
}
hello()

setTimeout(() => { console.log('Hello!') }, 3000)
