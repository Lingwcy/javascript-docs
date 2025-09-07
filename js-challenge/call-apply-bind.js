Function.prototype.call2 = function(context, ...args){
    context = ((context === undefined || context === null) ? window: context)
    context._fn = this
    const res = context._fn(...args)
    delete context._fn()
    return res
}


Function.prototype.apply2 = function(context, args) {
    context = ((context === undefined || context === null) ? window: context)
    context._fn = this
    const res = context._fn(...args)
    delete context._fn()
    return res
}

Function.prototype.bind2 = function(context, ...args1){
    context = ((context === undefined || context === null) ? window: context)
    const _this = this //拷贝地址 this的指向永远固定
    return function(...args2){
        context._fn = _this
        const res = context._fn(...[...args1,...args2])
        delete context._fn()
        return res
    }
}


const xiaoming = {
    name:"xiaoming",
    displayName(age,gender){
        return {
            name: this.name,
            age,
            gender
        }
    }
}

const lilei = {
    name:"lilei"
}

console.log(xiaoming.displayName.call2(lilei,15,"woman"))
console.log(xiaoming.displayName.apply2(lilei,[15,"woman"]))
const lileis = xiaoming.displayName.bind2(lilei,15,"woman")
console.log(lileis())