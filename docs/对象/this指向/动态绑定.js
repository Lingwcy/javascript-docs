/**
 * this 的动态绑定是指 this 的值在函数被调用时才确定（而非定义时），
 * 且其指向完全取决于函数的调用方式。
 */

/**
    this 的指向遵循以下优先级（从高到低）：

    显式绑定
    通过 call()、apply() 或 bind() 强制指定 this。

    隐式绑定
    通过对象方法调用时，this 指向调用该方法的对象。

    默认绑定
    函数独立调用时，this 默认指向全局对象（非严格模式）或 undefined（严格模式）。
 */


// 显式绑定

const xiaoming = {
    name:"xiaoming",
    displayName(){
        return this
    }
}

const lilei = {
    name:"lilei"
}
const lihua = {
    name:"lihua"
}
// 1. Function.prototype.call()
/**
 *  这个函数几乎与 apply() 相同，只是函数的参数以列表的形式逐个传递给 call()，
 *  而在 apply() 中它们被组合在一个对象中，通常是一个数组——例如，func.call(this, "eat", "bananas") 与 func.apply(this, ["eat", "bananas"])。
 */
console.log(xiaoming.displayName.call(lilei)) //lilei

// 2. Function.prototype.apply()
console.log(xiaoming.displayName.call(lihua)) //lihua

/**
 * 如果省略第一个 thisArg 参数，则默认为 undefined。
 * 在非严格模式下，this 值将被替换为 globalThis（类似于全局对象）。
 */
console.log(xiaoming.displayName.call()) 

// 3. 使用 Function.prototype.bind()，创建一个新的函数，无论函数如何被调用，其 this 的值都不会改变
const lileiThisForever = xiaoming.displayName.bind(lilei)
console.log(lileiThisForever())
