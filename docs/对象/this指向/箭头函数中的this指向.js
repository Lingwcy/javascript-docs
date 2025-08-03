/**
 * 在箭头函数中，this 保留了闭合词法上下文的 this 值.
 */
const pet ={
    name:"peter",
    displayName(){
        //箭头函数 保留上下文this
        return ()=>{
            return this.name;
        }
    }
}
console.log(pet.displayName()()) //peter

//反例

const pet2 ={
    name:"peter",
    displayName(){
        //匿名函数
        return function(){
            return this.name;
        }
    }
}
console.log(pet2.displayName()()) //undefined