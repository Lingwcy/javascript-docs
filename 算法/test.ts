const bookPrototype = {
    displayInfo(){
        console.log(`Book => name: ${this.name} type: ${this.type}`)
    }
}
function Book(name,type){
    this.name = name;
    this.type = type;
}

Book.prototype
Object.prototype