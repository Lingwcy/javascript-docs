/**
    1. 全部 Promise 成功时：
    如果传入的 Promise 数组中的所有 Promise 都成功，返回的 Promise 也会成功。
    成功的结果会以数组的形式返回，数组中的值是每个 Promise 的返回值，并且顺序与传入的顺序一致。

    2. 只要有一个 Promise 失败时：
    如果传入的 Promise 数组中任何一个 Promise 失败，返回的 Promise 会立即失败。
    失败的原因是第一个失败的 Promise 的原因。

    3. 可以传入可迭代类型
 */
function PromiseAll(iterObj) {
  //返回一个Promise对象
  return new Promise((resolve, reject) => {
    if (!(typeof iterObj === "object" && iterObj !== null && typeof iterObj[Symbol.iterator] ==="function")) {
      //传入的参数是否可迭代类型
      throw TypeError("传入的不是可迭代类型") 
    }

    const res = [];
    let counter = 0; //设置一个计数器
    iterObj.forEach((value,index) => {
        Promise.resolve(value)
        .then(value =>{
            res[index] = value //这里使用index索引来确保值的顺序与传入顺序强制保持一致
            counter ++;

            if(counter == iterObj.length) resolve(res) //如果成功数量与传入长度一样，表明promise全部成功
        }).catch(e => reject(e))
    })
  });
}

/*******test all *******/

/**
 * 不仅可以传数组，还可以传递迭代器。不是所有迭代器都支持for循环，所以。。。
 */
PromiseAll([
    Promise.reject("d")
]).then(
  (data) => {
    // data:[1,2,3,4]
    // 传递[pro1,pro2,pro3,4]的话:内部默认处理Promise.resolve(4)
    console.log("成功", data);
  },
  (reason) => {
    // reason:reason2
    console.log("失败", reason);
  }
);
