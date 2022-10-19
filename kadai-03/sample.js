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
