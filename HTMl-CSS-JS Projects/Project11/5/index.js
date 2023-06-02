class Person{
    constructor(n='Unknown',a=0){
        this.name = n
        this.age = a
    }
    getDetails(){
        return `Name ${this.name} Age ${this.age}`
    }
}
let obj1 = new Person('Soham',19)
let obj2 = new Person()
console.log(obj1);
console.log(obj2);