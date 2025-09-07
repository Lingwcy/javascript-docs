/**
 * 
 * Array.prototype.flat 把多维数组“拍平”成一维（或指定深度）数组
 * 
 * const newArr = arr.flat([depth = 1])
    depth 可选，默认 1，表示要展开的层数。
    返回 新数组，原数组不变
 */


const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]
Array.prototype.flat = function (deep = 1) {
    let res = []
    deep--;

    for(const item of this){
        if(Array.isArray(item) && deep >=0){
            res = res.concat(item.flat(deep))
        }else{
            res.push(item)
        }
    }

    return res
}
console.log(arr.flat(1))