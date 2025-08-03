/*

    静态代码块  static {} 内声明的变量的作用域是该代码块的本地。
    这包括 var、function、const 和 let 声明。
    代码块中的 var 声明不会被提升。

*/

var golbalY = 5

class ClassWithStaticInitializationBlock {
  static staticProperty1 = "Property 1";
  static staticProperty2;
  static {
    this.staticProperty2 = "Property 2";
    var golbalY = 5;
  }
}

console.log(ClassWithStaticInitializationBlock.staticProperty1);
// Expected output: "Property 1"
console.log(ClassWithStaticInitializationBlock.staticProperty2);
// Expected output: "Property 2"

//在静态代码块中使用var声明的变量golbalY的作用域仅限于静态代码块内部，
// 会被提升到类的静态属性中
console.log(ClassWithStaticInitializationBlock.golbalY); // undefined
console.log(golbalY) // 5
