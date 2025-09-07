/// 简单粗暴 json
/**
 * 局限:
 * 1.函数属性消失
 * 2.null undefined消失
 * 3.循环引用报错
 */
const source = {
  b: { name: 'xht' },
  foo: () => 5,
  3: undefined
};

const deep = JSON.parse(JSON.stringify(source))
console.log(deep)
/** output
 {
  b: {
    name: "xht",
  },
}
 */



//基础递归实现深拷贝
/**
 * 局限
 * 无法保证循环引用
 */
function baseClone(obj) {
  if (typeof obj !== 'object') return obj

  const result = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    result[key] = baseClone(obj[key])
  }
  return result
}

const baseDeepResult = baseClone(source)
console.log(baseDeepResult)
/**
{
  "3": undefined,
  b: {
    name: "xht",
  },
  foo: [Function: foo],
}
 */


//终极方案：WeakMap破循环
/**
 * 为什么用weakMap而不是map
 * 普通的 Map 也能把这段代码跑通，但它做不到 “一旦原对象在外部被释放，自己保存的那一份键名也跟着消失” 这一点
 * 而 WeakMap 可以。
 * 
 * 弱引用特性：不阻止垃圾回收
 * 内存安全：避免内存泄漏
 */
const source2 = {
  3: undefined,
  foo: () => 8,
  data: new Date()
};
source2.self = source2
function weakClone(target, map = new WeakMap()) {
  if (typeof target !== 'object' || target === null) return target

  // 处理循环引用
  if (map.has(target)) return map.get(target)
  // 创建待填入的空壳结果
  const result = Array.isArray(target) ? [] : {}
  map.set(target, result)

  //对 Map 和 Set 来说，这一步基本不会执行任何操作，因为默认没有属性
  Reflect.ownKeys(target).forEach(key => {
    result[key] = weakClone(target[key], map);
  });


  if (target instanceof Map) {
    target.forEach((v, k) => result.set(k, weakClone(v, map)));
  }
  if (target instanceof Set) {
    target.forEach(v => result.add(weakClone(v, map)));
  }

  return result;
}

const result = weakClone(source2)
console.log(result)
console.log(result === source2)