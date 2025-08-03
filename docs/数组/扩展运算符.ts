/**
 * 主要演示扩展运算符带来的一些新的操作方法
 */

const arr = Array.from({length:10}, (_, i) => i + 1)

// 1. 找最大最小值
console.log(Math.max(...arr)) //10
console.log(Math.min(...arr)) //1


// 2. 复制数组
const arr2  = [...arr]
arr2[0] = 100
console.log(arr2) //[ 100, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(arr) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// -以前的方法
const arr3 = arr2.concat()
arr3[0] = 1000/**
[ 100, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
[ 1000, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] */
console.log(arr2) 
console.log(arr3) 


// 3.合并数组
/**
 * [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000, 2, 3, 4,
  5, 6, 7, 8, 9, 10
]
 */
console.log([...arr,...arr2,...arr3])

// 4.解构赋值
const [first, ...rest] = arr3
console.log(rest) //[ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// 5.将字符串转为真正的数组
console.log([...'hello'])


Number.prototype[Symbol.iterator] = function*() {
  let i = 0;
  let num = this.valueOf();
  while (i < num) {
    yield i++;
  }
}
console.log([...5]) // [0, 1, 2, 3, 4]