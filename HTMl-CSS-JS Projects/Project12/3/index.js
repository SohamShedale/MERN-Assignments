function ageInDays(object,show){
    let fullName = object.firstName + ' ' + object.lastName
    return show(fullName,object.age*365)
}

const obj1 = {
    firstName:'Soham', 
    lastName:'Shedale', 
    age:19
}
function display(fullName,age){
    console.log(`The Person's full name is ${fullName} and their age in days is ${age}.`);
}

ageInDays(obj1,display)