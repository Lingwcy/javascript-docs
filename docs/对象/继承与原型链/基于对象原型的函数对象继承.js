/**
 * 为每个对象创建手动绑定 __proto__ 仍旧非常不方便
 * 我们就可以使用构造函数，它会自动为每个构造的对象设置 [[Prototype]]。
 * 构造函数是使用 new 调用的函数
 */

const bookPrototype = {
    displayInfo(){
        console.log(`Book => name: ${this.name} type: ${this.type}`)
    }
}
function Book(name,type){
    this.name = name;
    this.type = type;
}
console.log(Book.prototype)
/**
 * 在 ts 声明文件中 prototype 为 Object 类型
    interface Object {
        /** Object.prototype.constructor 的初始值是标准内置的 Object 构造函数。 */
        //constructor: Function;

        /** 返回对象的字符串表示。 */
        //toString(): string;

        /** 使用当前区域设置将对象转换为字符串返回。 */
        //toLocaleString(): string;

        /** 返回指定对象的原始值。 */
        //valueOf(): Object;

        /**
         * 确定对象是否具有指定名称的属性。
/
       // hasOwnProperty(v: PropertyKey): boolean;

        /**
         * 确定一个对象是否存在于另一个对象的原型链中。
/
       // isPrototypeOf(v: Object): boolean;

        /**
         * 确定指定的属性是否可枚举。

       // propertyIsEnumerable(v: PropertyKey): boolean;
    }

 * 
 */

/**
 * ## 
完全替换了`Book`的原型对象，
但新的原型对象`bookPrototype`没有`constructor`属性。
这会导致通过`new Book()`创建的实例的`constructor`属性不正确（或丢失）。
设置`Book.prototype.constructor = Book;`是为了修复这个问题，确保所有`Book`实例的构造器引用都正确地指向`Book`函数。这是JavaScript原型继承中的一种常见模式，用于维护正确的原型链关系。

所以第7行应该更正为`bookPrototype`。
 */
Book.prototype = bookPrototype;
Book.prototype.constructor = Book;  

const commonBook = new Book("harry","story");
commonBook.displayInfo()

/**
 * 通过构造函数创建的每一个实例都会自动将构造函数的 prototype 属性作为其 [[Prototype]]
 * 即，Object.getPrototypeOf(new Book) === Book.prototype
 */
console.log(Object.getPrototypeOf(new Book()) === Book.prototype)