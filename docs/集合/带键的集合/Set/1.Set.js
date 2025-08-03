/**
 * Set 对象是一组唯一值的集合，可以按照添加顺序来遍历
 * Set 集合的插入、删除和查找操作的时间复杂度可以近似认为是 O(1)
 * 哈希表
 */

const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}


/**
 * 数组和 Set 之间的转换
 */
// 1. Array.from() Set -> Array
console.log(Array.from(mySet)) //[ 1, 'some text' ]
// 2. new Set(Array Object)  Array -> Set
const arr1 = new Array(1,2,3,4,5,6)
const set1 = new Set(arr1)
console.log(set1) //Set(6) { 1, 2, 3, 4, 5, 6 }
