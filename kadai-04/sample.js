//setTimeout(() => { console.log('Hello!') }, 3000)
//setTimeout(() => { console.log('bye!') }, 2000)

//const timerId = setTimeout(() => {
   // console.log('Hello!')
  // }, 3000)

   //clearTimeout(timerId)

// 非同期のパターン

const sleep = (ms) => new Promise(resolve => {
    setTimeout(() => resolve(), ms)
})

const main = async () => {
    for (let index = 0; index < 100; index++) {
        console.log("hello" , index)
        await sleep(100)
    }
}
