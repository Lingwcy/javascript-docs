/**
 * this指向当前调用者对象,函数的调用方式决定了 this 的值（运行时绑定）。
 * this 不能在执行期间被赋值，this 的值取决于它出现的上下文：函数、类或全局
 * this的核心机制（动态绑定、严格模式、箭头函数）
 */


/**
    隐式绑定
    通过对象方法调用时，this 指向调用该方法的对象。
 */
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};
// 此时this指向调用者test。输出 42
console.log(test.func());

//this 的值总是根据调用函数的方式而改变

const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }


/**
    默认绑定
    函数独立调用时，this 默认指向全局对象（非严格模式）或 undefined（严格模式）。
      "use strict";
      function test() { console.log(this); }
      test(); // 输出 undefined
    作为全局作用域调用，无论 严格或非严格模式 this总是指向windows或global
 */
/**
 * 在 JavaScript 中，this 的指向在回调函数/匿名函数中通常由调用方式决定。在严格模式下，this 默认为undefined。
   而在非严格模式下，this 会指向全局对象，即在浏览器中指向Window 对象，在 Node.js 中指向global 对象。
   这在迭代数组方法、Promise() 构造函数等例子中都是适用的
   也有例外：JSON.parse() 的 reviver 参数和 JSON.stringify() 的 replacer 参数都会把 this 设置为正在被解析/序列化的属性所属的对象。
 */


// 此时 logThis 作为 foreach的匿名函数
// 在非严格模式下为被设置为全局对象,在浏览器中会指向Window对象，严格模式为undefined
function logThis() {
    "use strict"
    console.log(this);
  }
  
  [1, 2, 3].forEach(logThis); 
  

