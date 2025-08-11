
/**
 * 如果你希望用单个元素初始化一个数组，而这个元素恰好又是 Number，那么你必须使用[]语法。
 * 当单个 Number 传递给 Array() 构造函数时，将会被解释为 arrayLength，并非单个元素
 * 因为Array()具有重载 Array(arrayLength:number)
 */

const arr1 = [5]
console.log(arr1.length) // 1

const arr2 = new Array(5)
console.log(arr2.length) // 5 个 empty item

//也可以使用 Array.of 静态方法来创建包含单个元素的数组
const arr3 = Array.of(5,5,6,5,[5,4,1,8,4])
console.log(arr3.length) // 1
console.log(arr3)



/**
 * 数组本质上是特殊的对象
 * 如果你在元素key中给数组运算符的是一个非整型数值
 * 那么它将作为一个表示数组的对象的属性创建，而不是数组的元素。
 */

const arr4 = []
arr4[5.5] = 7
console.log(arr4.length) // 0
console.log(Object.hasOwn(arr4,5.5)) //true
// 也就是说，length属性并不会更新非整型key的记录


/**
 * length 属性是特殊的，如果存在最后一个元素，则其length值总是大于其索引的正整数 + 1
 */

const arr5 = [1,2,3]
arr5[100] = 4
console.log(arr5.length) // 101


/**
 * length 属性赋值, 置0为清空数组
 */
const arr6 = [1,2,3,4,5]
arr6.length = 0
console.log(arr6) // []
console.log(arr6[2]) // undefined
arr6.length = 4
console.log(arr6) // [ <4 empty items> ] 确实是彻底清空了   


/**
 * 稀疏数组
 * 数组可以包含“空槽”(empty item)，这与用值 undefined 填充的槽不一样。空槽可以通过以下方式之一创建
 */

// Array 构造函数：
const a = Array(5); // [ <5 empty items> ]

// 数组字面量中的连续逗号：
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// 直接给大于 array.length 的索引设置值以形成空槽：
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// 通过直接设置 .length 拉长一个数组：
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// 删除一个元素：
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]


/**
 * 数组的遍历
 * 
 */

//for...of 会原样输出，这包括 empty item 和 undefined ，统一输出 undefiend
const arr7 = [1,2,3,,,4,5,6,undefined,7]
for(let arr of arr7){
    console.log(arr)
}

// 使用一些数组迭代方法时，空槽（empty item）是被跳过的
// map,filter,some,Object.keys
console.log("==============")
arr7.forEach((ele) => {
    console.log(ele)
})
