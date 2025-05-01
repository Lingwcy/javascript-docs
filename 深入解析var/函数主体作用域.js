function foo(){
    var x = 1;
    function bar(){
        var y = 2; // 作用域被限制在函数主体内部

        console.log(x); // 1
        console.log(y); // 2
    }

    bar();

    console.log(x); // 1
    console.log(y); // Uncaught ReferenceError ReferenceError: y is not defined
}

foo();