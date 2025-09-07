// 2025/9/7

const pro = new Promise((resolve, reject) => {
    resolve(100)
})

const res = await pro.then((value) => {
    console.log(value)
    return value
}).then((value) => {
    console.log(value)
    return value
}).then((value) => {
    return new Promise((resolve) =>  resolve(value + value))
}).finally((value) => {
    console.log(value) //它 不接收任何参数，所以 finally 的回调函数参数永远是 undefined
    
    return value
}).then((value) => {
    console.log(value) // 继续拿到上一条 .then  / finally会透析
    return value
}).finally(() => {
    return Promise.reject('bad happen!') // 如果finally 返回 reject 则整个链条会受到影响
}).catch((error) => {
    console.log(error)
    return error // bad happen 捕获
})

console.log(res) //error: bad happen!