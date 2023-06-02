const convertToNumber = (str) => {
    let num 
    try{
        num = parseInt(str)
        if(!isNaN(num)){
            console.log(num);
        }
        else{
            throw new Error('Invalid number')
        }
    }
    catch(e){
        console.log(e);
    }
}
convertToNumber('123')
convertToNumber('abc')