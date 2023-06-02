class User{
    constructor(uName,pass){
        this.userName = uName
        this.password = pass 
    }
    get getPassword(){
        return '*'.repeat(this.password.length)
    }
    set setPassword(newPass){
        if(this.checkPass(newPass)){
            this.password = newPass
        }
        else{
            console.log("Invalid password. Password must be at least 8 characters long and contain at least 1 number and 1 uppercase letter.");
        }
    }
    checkPass(newPass){
        if(newPass.length<8){
            return false
        }
        let upper = /[A-Z]/.test(newPass)
        let digit = newPass.match(/\d/)

        return upper && digit
    }
}

let obj1 = new User('Soham','Password123')
console.log(obj1.getPassword);
obj1.setPassword = 'Soham2202'