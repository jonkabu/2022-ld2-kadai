// 2 から10,000 までの全ての素数を出力する 
let sum1 = 0


for (let number = 2; number <= 10000; number = number + 1) {
    let isPrime = true
    for (let yakusu = 2; yakusu < number; yakusu++) {
        if(number % yakusu === 0) {
            isPrime = false
            console.log(number, 'は', yakusu, 'で割り切れるので素数ではありません')
            break
        }

    }
}
console.log("2 から 10,000 までの素数のうち、3で割ると1余るものの和", sum1)
