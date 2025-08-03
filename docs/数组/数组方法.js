let array = Array.from({length:10}, (_, i) => i + 1)

// array.push(item)  从尾端添加元素
// 返回: 新增的元素
// 特性: 改变原数组
console.log(array.push(11))
console.log(array)

// array.unshift(item) 从首端添加元素
// 返回: 新增的元素
// 特性: 改变原数组
console.log(array.unshift(0))
console.log(array)

//array.pop() 从尾端提取元素
// 返回: 删除的尾部元素
// 特性: 改变原数组
console.log(array.pop())
console.log(array)

//array.shift() 从首端提取元素
// 返回: 删除的首步元素
// 特性: 改变原数组
console.log(array.shift())
console.log(array)


//array.splice() 增加 | 删除 | 插入
//原型 arr.splice(start[, deleteCount, elem1, ..., elemN]) 
//返回: 删除的元素
//特性：改变原数组
console.log(array.splice(1, 1)) //索引 1 开始删除 1 个元素
console.log(array.splice(0, 3, 'let', 'use' , 'book')) // 删除前三个元素 并增加替换
console.log(array.splice(0,0,'start')) // 从头部插入元素
console.log(array.splice(array.length, 0 , 'end')) //从尾部插入元素
console.log(array)
console.log(array.splice(0)) // 没有提供 deleteCount 参数：默认删除从起始位置到数组末尾的所有元素
console.log(array)

array = Array.from({length:10}, (_, i) => i + 1)
//array.slice()
/*
    它会返回一个新数组，将所有从索引 start 到 end（不包括 end）的数组项复制到一个新的数组。
    start 和 end 都可以是负数，在这种情况下，从末尾计算索引。
*/
//返回: start - end 数组 不包括end
//特性: 不改变原数组
console.log(array.slice(0,5))
console.log(array.slice(-5, -1)) //倒数第五个到倒数第一个


// array.concat()
//返回: 合并之后的数组
//特性: 不改变原数组
console.log(array.concat(11,12))


// array.forEach
// 特性： 为每一个元素执行此函数
array.forEach((item, index , array) => {
    console.log(`${item} is at index ${index} in ${array}`)
})

/**
 * arr.indexOf(item, from) —— 从索引 from 开始搜索 item，如果找到则返回索引，否则返回 -1。
   arr.includes(item, from) —— 从索引 from 开始搜索 item，如果找到则返回 true（译注：如果没找到，则返回 false）。
 */



// arr.find 
// 为每一个元素都执行方法中的函数
// 如果函数返回 true，则搜索停止，并返回 item。如果没有搜索到，则返回 undefined。
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
console.log(users.find((item, index) => item.id === 1).name)

/**
 * arr.findIndex 方法（与 arr.find）具有相同的语法，但它返回找到的元素的索引，而不是元素本身。如果没找到，则返回 -1。
 * 
 * arr.findLastIndex 方法类似于 findIndex，但从右向左搜索，类似于 lastIndexOf。
 */

//arr.filter(fn)
//特性: 如果需要匹配的有很多，我们可以使用 arr.filter(fn)。
const result = users.filter((item) => item.id < 3)
console.log(result)



// arr.map()
// 特性: 它对数组的每个元素都调用函数，并返回结果数组。
const userNameLength = users.map((item) => item.name.length)
console.log(userNameLength)

// arr.sort() 默认按字符进行排序
// 对数组进行 原位（in-place） 排序，更改原数组元素的顺序。
let array2 = [1,15,2]
array2.sort((a, b) => {
    if(a > b) return 1
    if(a === b) return 0
    if(a < b ) return -1
})
console.log(array2)
// arr.sort(fn)中fn的排序只根据返回值的正负，所以可以极度简写
array2.sort((a, b) => b -a) // 倒排
console.log(array2)


//arr.reverse 方法用于颠倒 arr 中元素的顺序。
console.log(array2.reverse())



//str.split(delim) 它通过给定的分隔符 delim 将字符串分割成一个数组。
//特性：不改变原数组
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  console.log( `A message to ${name}.` ); // A message to Bilbo（和其他名字）
}
//若参数为空字符，则将字符串拆分为字母
const foo = 'hello-world'
console.log(foo.split(''))


//arr.join(glue) 与 split 相反。它会在它们之间创建一串由 glue 粘合的 arr 项。
const array3 = Array.from({length:10}, (_, i) => i+ 1)
console.log(array3.join(';'))