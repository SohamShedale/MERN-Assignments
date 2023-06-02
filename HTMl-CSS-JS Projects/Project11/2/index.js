const person = {
    name: "Soham",
    age: 30
} 


function getPerson(person){
    try{
        if(person){
            return `name ${person.name} and age ${person.age}`
        }
        else{
            throw new Error('Person object is not define')
        }
    }
    catch(error){
        return error
    }
}

let p1 = getPerson(person)
console.log(p1);
let p2 = getPerson()
console.log(p2);