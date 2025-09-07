const pro = new Promise((resolve, reject) => {
  resolve(100);
});

// 把 finally 想象成“在 Promise 落槌之前，无论如何都要先执行的一段清理逻辑”。
// 这段逻辑本身可能：
//   1. 同步地跑完
//   2. 返回另一个 Promise（异步）
//
// 无论哪种情况，**原 Promise 的结果（成功值或失败原因）都不能被 finally 回调的返回值“覆盖”**，
// 除非 finally 里显式地抛错或返回一个 rejected Promise。
//
// 因此标准规定：
//   - 如果 finally 回调正常结束，就把“原结果”继续往下传；
//   - 如果 finally 回调里抛错或返回 rejected Promise，就用这个错误把原结果“替换”掉。
//
// 自己实现的简化版就是：
Promise.prototype.finally = function (callback) {
  return this.then(
    value => Promise.resolve(callback()).then(() => value), // 原成功路径
    reason => Promise.resolve(callback()).then(() => { throw reason; }) // 原失败路径
  );
};

// 关键点就在 **Promise.resolve(callback())** 这一句。
// 1. 把 callback 的返回值包成 Promise，保证我们能用 .then 等待它；
// 2. 等待结束后，再把“原值”原封不动往下传（或把原错误重新抛出去）。
//
// 如果不包一层 Promise.resolve，而是直接：
//   return this.then(
//     value => { callback(); return value; },
//     reason => { callback(); throw reason; }
//   );
//
// 会出现两个问题：
// a) callback 若本身返回一个 Promise，我们无法等待它完成，链条会提前继续；
// b) callback 若内部抛错，错误不会被 catch，导致整个实现不符合标准。
//
// 因此“先 Promise.resolve 再 .then” 是为了：
// - 统一处理同步 / 异步清理逻辑；
// - 保证原结果在 finally 正常时不会被覆盖；
// - 保证 finally 内部一旦出错，能够正确地reject 掉整个链条。

const res = await pro
  .then((value) => {
    console.log(value); // 100
    return value;
  })
  .then((value) => {
    console.log(value); // 100
    return value;
  })
  .then((value) => {
    return new Promise((resolve, reject) => reject(value + value)); //“前一个 .then 产生的 reject 会跳过中间所有非捕获型回调（包括 finally），直到遇见第一个** .catch()。”
  })
  .finally((value) => {
    console.log(value); //它 不接收任何参数，所以 finally 的回调函数参数永远是 undefined

    return value;
  })
  .then((value) => {
    console.log(value); // 继续拿到上一条 .then  / finally会透析
    return value;
  })
  .finally(() => {
    return Promise.reject("bad happen!"); // 如果finally 返回 reject 则整个链条会受到影响
  })
  .catch((error) => {
    console.log(error);
    return error; // bad happen 捕获
  });

console.log(res); //error: bad happen!
