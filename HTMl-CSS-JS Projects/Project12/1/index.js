function double(arr,doubleEachElement){
    let element = arr.map(ele => {
        return doubleEachElement(ele)
    })
    return element
}

let arr = [1,2,3,4,5,6]
function doubleEachElement(value){
    return value*2
}
let doubleValue = double(arr,doubleEachElement)
console.log(doubleValue);