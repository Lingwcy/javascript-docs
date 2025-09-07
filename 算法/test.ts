function Persons() { };
var p = new Persons();
console.log(p.__proto__) // Persons {}
console.log(Object.getPrototypeOf(p)) //Persons {}

console.log(Persons.prototype) // //Persons {}
console.log(Object.getPrototypeOf(Persons))