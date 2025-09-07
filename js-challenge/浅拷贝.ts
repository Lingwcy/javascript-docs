/**
 * 浅拷贝（shallow copy） 指的是创建一个新的对象或数组，这个新对象或数组中的第一层属性值会被复制，
 * 但如果属性值是引用类型（如对象或数组），则只复制引用地址，而不是深层的数据。
 *
 */

const arr = Array.from({ length: 10 }, (_, i) => i * i)
console.log(arr)

//1. 扩展运算符 ...
const arr2 = [...arr]
arr2[0] = 100
console.log(arr2)
console.log(arr)

//2. object.assign()
//特性:
//1.同名被后来属性覆盖
//2.可以拷贝symbol
//3.忽略null和undefined
const arr3 = Object.assign({ a: 1 }, { a: 2 }) // {a:2}
const s = Symbol();
const obj = Object.assign({}, { arr3 }, { [s]: 123 }, null, undefined)
console.log(obj)
// {
//   arr3: {
//     a: 2,
//   },
//   [Symbol()]: 123,
// }



///数组拷贝方法
//1.扩展运算符
//2.array.slice()
//3.array.concat()
const arr7 = Array.from({ length: 10 }, (_, i) => i * i)
const arr8 = arr7.slice()
const arr9 = arr7.concat()
console.log(arr8)
console.log(arr9)



/// 最佳浅拷贝
/**
 * 
 * 原型链：保留原对象的原型。
   自身属性：包括不可枚举的、带 getter/setter 的属性。
   属性描述符：完整保留 writable、enumerable、configurable 等。
 */
console.log("最佳浅拷贝")
let clone = Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
);

console.log(clone)
