// data.json というファイルを作成し、count というプロパティに 0 の値を持つオブジェクトを JSON フォーマットで記述して保存する 
const fs = require('fs')
const json = fs.readFileSync('./kadai-06/data.json').toString()

let object
try {
    object = JSON.parse(json)
} catch (error) {
    console.log('不正なJSONフォーマットです')
    process.exit(1)
}

object.count = object.count + 1
object.updateAt = Date()
fs.writeFileSync('./kadai-06/data.json',JSON.stringify(object))