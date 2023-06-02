class carInfo{
    constructor(year,company,model){
        this.year = year
        this.company = company
        this.model = model
    }
    getDescription(){
        return `This is ${this.year} ${this.company} ${this.model}`
    }
}
let obj = new carInfo(2023,'skoda','rapid')
console.log(obj.getDescription());