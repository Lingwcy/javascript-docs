/* 
    闭包：嵌套函数的变种，当嵌套函数被返回或传递给其他作用域
          而嵌套函数又引用了外部变量，此时就形成了闭包。
    
    特性: 外部函数的局部变量会被闭包引用，
          生命周期会被延长到直至闭包本身不再被引用。

*/

const createCounter = () =>{
    let counter = 0;

    return () => {
        counter ++;
        console.log(counter)
    }
}


const counter = createCounter();

counter();
counter();
counter();

createCounter()();



