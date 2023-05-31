const swap = (a,b) => {
    [a,b] = [b,a]
    return [a,b]
}
let x=5,y=10
console.log(swap(x,y)); 