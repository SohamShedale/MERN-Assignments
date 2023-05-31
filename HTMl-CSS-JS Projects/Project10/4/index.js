function extract (arr) {
    let [first,second,,,,last] = arr
    return [first,second,last]
}
console.log(extract([1,2,3,4,5,6]));