class employeeSalary{
    constructor(n,p,s){
        this.name = n
        this.position = p
        this.salary = s
    }
    getSalary(){
        return this.salary
    }
}
let obj1 = new employeeSalary('Soham','SDE',50000)
console.log(obj1.getSalary());