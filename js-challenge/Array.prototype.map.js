Array.prototype.map2 = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

const arr = Array.from({ length: 10 }, (_, i) => i * i);
console.log(arr);
const arr2 = arr.map2((item, index, arr) => {
  console.log(`${item} ${index} ${arr}`);
  return item * item;
});
console.log(arr2);
