const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null


// function Person(){
//     console.log("aaa")
//     this.name = "peter"
//     return "ccc"
// }

// console.log(Person())
// const a = Person()
// console.log(a)
// const b = new Person()

// console.log(b.name)
// console.log(b)

function Person(name,age){
    this.name = name
    this.age = age
}

const peter = new Person("peter",31)

console.log(Object.keys(peter))