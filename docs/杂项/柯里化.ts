/***
 * 柯里化函数（Currying）‌是一种将多参数函数转换为单参数函数的函数转换技术。
 * 柯里化函数首先接收一些参数，但不立即执行，而是返回一个新的函数，这个新函数再接收剩余的参数并最终计算出结果。
 * 这个过程可以看作是将一个多参数的函数逐步拆解为一系列单参数的函数调用。‌
 * 
 */

function curry(func) {

  return function curried(...args) {
    
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

// 用法
function sum(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}

let curriedSum = curry(sum);

console.log(curriedSum(7)(1,2,3,4,5,6))