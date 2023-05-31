let first = document.getElementById('num1')
let second = document.getElementById('num2')
let operator = document.getElementById('operator')
let result = document.getElementById('result')
function calculate(){
    let symbol = operator.value
    switch(symbol){
        case '+':
            result.value = parseInt(first.value)+parseInt(second.value)
            break
        case '-':
            result.value = parseInt(first.value)-parseInt(second.value)
            break
        case '*':
            result.value = parseInt(first.value)*parseInt(second.value)
            break    
        case '/':
            result.value = parseInt(first.value)/parseInt(second.value)
            break
        default:
            console.log('Invalid Operator');
    }
}