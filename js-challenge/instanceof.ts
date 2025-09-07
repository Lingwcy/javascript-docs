//判断right是否存在于left的原型链上
//函数也是对象的一种。函数可以有自己的原型链，并且函数的原型链也是可以被检查的,所以要判断left是否为函数
function myInstanceof(left, right) {
    if (left == null || typeof left !== 'object' && typeof left !== 'function') {
        return false;
    }
    return Object.getPrototypeOf(left) === right.prototype || myInstanceof(Object.getPrototypeOf(left), right)
}

function Person() { };
var p = new Person();
console.log(myInstanceof(p, Object));
// console.log(p instanceof Person);//true