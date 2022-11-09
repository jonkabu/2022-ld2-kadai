// 関数を使って以下の処理を行う関数を定義してみる
// 数字 a と b を引数として与えると、 a と b の積を計算する関数 product
const product = (a, b) => {
    return a * b
}
// 整数 n を引数として与えると、 1 から n までの和を計算する関数 sum
const sum = (n) => {
    let total = 0
    for (let k = 1; k < n + 1; k = k + 1) {
        total = total + k
    }
    return total
}
// 定義したそれぞれの関数を使って、例えば以下の値を出力する（値は好きなものを指定してよい）
// 107 と109 の積
console.log(product(107,109))
// 1 から500 までの和
console.log(sum(500))



