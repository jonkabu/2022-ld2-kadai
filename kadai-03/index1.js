// node kadai-03/index1.js <数字> というコマンドで与えた数字が素数かどうかを判定し、素数ならばその数字を出力する

const number = parseInt(process.argv[2])

for (let yakusu = 2; yakusu < number; yakusu++) {
    if(number % yakusu === 0) {
        console.log(number, 'は', yakusu, 'で割り切れるので素数ではありません')
        break
    }
}
if(isPrime) {
    console.log(number, 'は素数です')
}