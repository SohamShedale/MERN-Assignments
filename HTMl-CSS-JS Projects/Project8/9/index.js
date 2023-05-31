let arr = [], size, value, i=0, str =''
function setSize(){
    size = document.getElementById('size').value
    document.getElementById('size').disabled = true
    document.getElementById('setSize').disabled = true
}
function addValue(){
    value = document.getElementById('values').value
    arr[i] = parseInt(value)
    i++
    size--
    if(size==0){
        document.getElementById('addValue').disabled = true
        document.getElementById('values').disabled = true
        alert('Array is Full')
    }
}
function show(){
    let details = document.getElementById('details')
    for(let j=0;j<i;j++){
        if(arr[j]%2==0){
            continue
        }
        if(arr[j]%3==0){
            str += arr[j]
            str+=' '
        }
    }
    details.innerText = str
}