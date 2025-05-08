const bookPrototype = {
    displayInfo(){
        console.log(`Book => name: ${this.name} type: ${this.type}`)
    }
}

// mathBook 是一个继承了 book 的对象
const mathBook = {
    name:"mathBook",
    type:"guide",
    __proto__: bookPrototype
}
mathBook.displayInfo() //Book => name: CommonBook type: Story


const books = [
    {name: "JavaScript Guide",type:"Guide", __proto__:bookPrototype},
    {name: "Csharp Guide",type:"Guide", __proto__:bookPrototype},
]
books.forEach((value) =>{
    console.log(value)
})

