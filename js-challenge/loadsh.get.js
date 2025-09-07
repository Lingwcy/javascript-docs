/**
 * _.get 用来安全地“点”进一个对象/数组，取出深层路径上的值；
 * 如果途中任何一级不存在，就返回你指定的默认值，而不会抛 TypeError。
 * _.get(object, path, [defaultValue])
 */


var object = { 'a': [{ 'b': { 'c': 3 } }] };

// path有两种情况： 1.纯数组指定的路径 2.类似a[0].b.c的字符串
function _get(object, path, defaultValue = undefined){
    const newPath = Array.isArray(path) ? path : path.replace(/\[/g,'.').replace(/\]/g,'').split('.')

    // 设定累加器初始值为object，开始向下根据newPath递推值
    // 当obj为undefined时，说明上一个Key本就不存在，为了避免undefined is not an object (evaluating 'obj[key]')
    // 给obj赋值 {}
    return newPath.reduce((obj,key) => obj|| {} [key], object) || defaultValue
}

console.log(_get(object, 'a[0].b.c'));
// => 3
 
console.log(_get(object, ['a', '0', 'b', 'c']));
// => 3
 
console.log(_get(object, 'a.b.c', 'default'));

console.log({}[0]) //undefined