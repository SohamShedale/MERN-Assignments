const removeDuplicates = (arr) => {
    console.log("Array is "+arr);
    const map1 = new Map()
    for(let element of arr){
        if(!map1.has(element)){
            map1.set(element,1)
        }
    }
    let set1 = Array.from(map1.keys())
    return set1
}
const arr1 = [1,2,3,4,1,2,4,5,6,7,8,9,10,8]
console.log('Removed Duplicates '+removeDuplicates(arr1));
