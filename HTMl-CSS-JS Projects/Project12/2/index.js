function manipulateString(str,logstring){
    let newString = str.toUpperCase()
    logstring(newString)
}
let str1 = 'soham adinath shedale'
function logstring(upperString){
    console.log('The string is '+upperString);
}
manipulateString(str1,logstring)