let Student = {
    name1: '',
    printDetails(){
        console.log(`Hello, my name is ${this.name1}`);
    }
}
let obj1 = Object.create(Student)
obj1.name1 = "Soham"
obj1.printDetails()