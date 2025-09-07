/*



1.let 声明的作用域是块或函数。（块里面的不能访问到块外面的，块间有相同的变量找最近的哪一个变量）

2.let 声明的变量只能在执行到声明所在的位置之后才能被访问（参见暂时性死区）
因此，let 声明通常被视为是非提升的。

3.let 声明在脚本的顶级作用域上声明变量时不会在全局对象上创建属性。

4.let 声明的变量不能被同一个作用域中的任何其他声明重复声明。

5.let 是声明，而不是语句的开头。
这意味着，你不能将单独的 let 声明当做块的主体使用（因为这样做会让变量无法被访问）。
if (true) let a = 1; // SyntaxError: Lexical 


*/

// 1.let 声明的作用域是块或函数。
let x = 1;
{
    let x = 2;
    console.log(x); //2
    {
        let x = 3;
        console.log(x); //3
    }
    console.log(x); //2
}
console.log(x); // 1


// 2.暂时性死区
/*
    当变量处于暂时性死区之中时，其尚未被初始化，
    并且任何访问其的尝试都将导致抛出 ReferenceError。
    当代码执行到变量被声明的位置时，变量会被初始化为一个值。
    如果变量声明中未指定初始值，则变量将被初始化为 undefined。
*/
let y = 1;
{
    console.log(y); //ReferenceError ReferenceError: Cannot access 'y' before initialization
    let y = 1; // 暂时性死区结束（对 y 而言）
}
