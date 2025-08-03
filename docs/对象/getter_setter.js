var o = {
    a: 7,
    b: 1,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    },
  };
  
  console.log(o.a); // 7
  console.log(o.b); // 8
  o.c = 50;
  console.log(o.a); // 25


/**
 * 使用 getter 和 setter 添加方法添加到任何对象
 */

var d = Date.prototype;
Object.defineProperty(d, "year", {
  get: function () {
    return this.getFullYear();
  },
  set: function (y) {
    this.setFullYear(y);
  },
});
var now = new Date();
console.log(now.year); // 2000
now.year = 2001; // 987617605170
console.log(now);
// Wed Apr 18 11:13:25 GMT-0700 (Pacific Daylight Time) 2001

