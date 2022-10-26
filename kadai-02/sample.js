const report = true
//const 
//console.log(report && (score <= 60))

const dog = true
const cat = true

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

const score  = 90
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
