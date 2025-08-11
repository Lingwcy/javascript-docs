/*
    创建对象方式:
    1. 对象初始化器
    2. 构造函数
    3. Object.create()

*/

// 对象初始化器
const car = {
    make:"BMW",
    model:"M4",
    year:"2022"
}
// 构造函数
function Person(name,age){
    this.name = name
    this.age = age
}



// Object.create
// 创建一种帽子原型
let Hat = {
    type: "贝雷帽",
    display(){
        console.log(this.type)
    }
}
const barHat = Object.create(Hat)
barHat.display();
var fishHat = Object.create(Hat);
fishHat.type = "Fishes";
fishHat.display();




/**
 * 枚举对象属性
 */
const peter = new Person("peter",31)
// 该方法返回对象 o 自身包含（不包括原型中）的所有可枚举属性
console.log(Object.keys(peter))

//该方法返回对象 o 自身包含（不包括原型中）的所有属性 (无论是否可枚举) 的名称的数组。
console.log(Object.getOwnPropertyNames(peter))

for(let prop in peter){
    console.log(prop)
}



/**
 * 通过 prototype属性为之前定义的对象类型增加属性
 */

function Coth(){
    this.type = "毛衣"
}
const coth = new Coth();
console.log(coth)
Coth.prototype.color = "red";
console.log(coth)

// color属性仅存在于原型中，console.log并不会显示它
for (let prop in coth) {
    console.log(prop + ": " + coth[prop]);
}