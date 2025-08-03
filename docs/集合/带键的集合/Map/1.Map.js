/**
 * Map 对象 保存键值对 并记住 键的原始插入顺序。任何值（对象和基元值 ）都可以用作键或值。
 */


const fooMap = new Map();
fooMap.set("dog", "woof");
fooMap.set("cat", "meow");
fooMap.set("elephant", "toot");
for (const [key, value] of fooMap) {
  console.log(`${key} goes ${value}`);
}


//1. Map.prototype.clear()  方法从此 map 中删除所有元素。
fooMap.clear()
console.log(fooMap) //Map(0) {}


//2. Map.prototype.delete()  方法按键从此 Map 中删除指定的元素
fooMap.set("dog", "woof");
fooMap.set("cat", "meow");
fooMap.set("elephant", "toot");

fooMap.delete("dog")
console.log(fooMap) //Map(2) { 'cat' => 'meow', 'elephant' => 'toot' }

//3. Map.prototype.entries() 返回一个新的 map 迭代器对象，该对象按插入顺序包含此 map 中每个元素的 [key， value] 对
const fooMapIterator = fooMap.entries()
console.log(fooMapIterator.next()) //{ value: [ 'cat', 'meow' ], done: false }

//4. Map.prototype.forEach()
fooMap.forEach((value,key,map) =>{
   console.log(`m[${key}] = ${value}`);
})


//5. Map.prototype.has() 方法返回一个布尔值，指示此 Map 中是否存在具有指定键的元素
console.log(fooMap.has("bar"));

//6. Map.prototype.keys() 返回一个新的 map 迭代器对象，该对象按插入顺序包含此 map 中每个元素的键
const fooMapIteratorKeys = fooMap.keys();
console.log(fooMapIteratorKeys.next());
