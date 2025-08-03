var mySet = new Set([1,2,3,4,5,6])
// set.add() 添加元素
mySet.add(7)
console.log(mySet)

// set.clear 删除全部元素
mySet.clear()
console.log(mySet)

var mySet = new Set([1,2,3,4,5,6])
// set.difference(Set Object) 返回一个包含此 set 中的元素但不在给定集中的新 set
// ES 2024

// set.entries() 返回一个[value,value] 格式的迭代器
const mySetIterator = mySet.entries()
for(item of mySetIterator){
    console.log(item)
}
//set.foreach 遍历
//set.has
//set.intersection(Set Object) [ES 2024] 取得交集
//set.isDisjointFrom(Set Object)[ES 2024] 指示该 set 是否与给定 set 没有共同的元素 返回 BOOL
//set.isSubsetOf(Set Object)[ES 2024] 指示该 set 是否与给定 set 的子集 返回 BOOL
//set.isSupersetOf(Set Object)[ES 2024] 指示该 set 是否与给定 set 的父集 返回 BOOL
//set.symmetricDifference(Set Object)[ES 2024] 返回同时不在两者集合的元素的集合
//set.union(Set Object)[ES 2024] 并集


//set.values() 返回一个迭代器 [value]
for(item of mySet.values()){
    console.log(item)
}