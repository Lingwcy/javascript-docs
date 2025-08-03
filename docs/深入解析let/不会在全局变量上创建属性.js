let testVariable = 123;
var test2 = 456;

console.log(global.hasOwnProperty('testVariable')); // 输出：false
console.log(global.hasOwnProperty('test2')); // 在Node.js模块中，var也不会自动成为全局属性

// 显式地将变量添加到全局对象
global.globalVar = 789;
console.log(global.hasOwnProperty('globalVar')); // 输出：true

// 在浏览器环境中，var声明的变量会成为window对象的属性，但let声明的不会
// 这个文件在Node.js环境下运行，所以行为有所不同
console.log('在Node.js中，模块内的变量默认不会成为全局属性');

console.log(this.test2)//undefined
console.log(this.testVariable)//undefined

parseInt();