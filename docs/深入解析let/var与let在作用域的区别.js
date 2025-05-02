/*

    let 声明的变量的作用域只在其声明的块或子块内部，在这一点上，它与 var 非常相似。
    二者之间主要的区别在于 var 声明的变量的作用域是整个闭合的函数。


*/

function varTest() {
  var x = 1;
  {
    var x = 2; // 同一个变量！ 这这里只是重复声明了 x
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // 不同的变量 单独的块变量
    console.log(x); // 2
  }
  console.log(x); // 1
}




/*
    变量作用域 与 暂时性死区的冲突
    以下代码会导致 ReferenceError
*/
function test() {
  var foo = 33; // 此 foo 在该块以及子块都有效
  // if 中传入 var foo
  if (foo) {
    // 此块中存在同名块变量 foo, 所以赋值变量也是 let foo 本身
    // 但是 let foo 此时处于 暂时性死区，结果报错 Uncaught ReferenceError ReferenceError: Cannot access 'foo' before initialization
    let foo = foo + 55; // ReferenceError
  }
}
test();
