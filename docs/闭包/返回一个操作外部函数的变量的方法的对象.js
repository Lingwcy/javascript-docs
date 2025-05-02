//它可以返回一个包含用于操作外部函数的内部变量的方法的对象。

const createPet = (name) => {
    let sex,age;
    
    const pet = {
        setName(newName) {
            name = newName;
        },
        setAge(newAge){
            age = newAge;
        },
        setSex(newSex){
            sex = newSex
        }
        
    }

    return pet;
}

const myPet = createPet('peter')
myPet.setAge(3)
myPet.setName("oioa")
myPet.setAge("man")

