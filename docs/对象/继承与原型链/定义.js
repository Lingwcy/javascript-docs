/**
 * JavaSript使用对象实现继承，每一个对象都有一条链接到另一个称做原型的对象，
 * 该原型对象也有属于自己的原型,以此类推，直到原型是null的对象，null没有原型,
 * 这是原型链的最后一环。
 * 当访问JavaScript对象时，不仅会查找当前对象上的方法和属性，而且会以此查找原型链上的属性,
 * 直到找到名字属性或方法或达到原型链的末尾
 */


const o = {
    a:1,
    b:2,

    // __proto__ 可以显式设置对象 o的 [[Prototype]]
    __proto__:{
        b:3,
        c:4,
    },
}

/**
 * 对象 o 原型链
 * {a:1,b:2} -> {b:3,c:4} -> Object.prototype -> null
 */

console.log(o)
console.log(o.a)
// o 上有自有属性“b”吗？有，且其值为 2。
// 原型也有“b”属性，但其没有被访问。
// 这被称为属性遮蔽（Property Shadowing）
console.log(o.b)
console.log(o.c)
console.log(o.d); // undefined
console.log(o.__proto__.__proto__) // Object.prototype
console.log(o.__proto__.__proto__.__proto__) // null
