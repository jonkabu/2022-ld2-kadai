// profile という名前のオブジェクトを作成し、nama、 age、 hobby、major というプロパティを作成する。値は好きに入れる
const profile = {
    name: "伊能",
    age: 278,
    hobby: "製図",
    major: "教育人間学",
}
// dictionary という名前のオブジェクトを作成し、nama、 age、 hobby、 major を日本語に翻訳する辞書を作成する。英単語をキーに、対応する翻訳を値として格納する
const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻",
}
// ループを使って profile オブジェクトのすべてのプロパティを以下のように表示する。 dictionary オブジェクトを活用する。
const keys = Object.keys(profile)
for (const key of Object.keys(profile)) {
    console.log("私の" + dictionary[key] + "は" + profile[key] + "です")
}

// 私の名前は ○○ です
// 私の年齢は ○○ です
// 私の趣味は ○○ です
// 私の専攻は ○○ です