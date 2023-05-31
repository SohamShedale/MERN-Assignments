let arr = [], index = 0, dollarItem = document.getElementById('items')
let addItem = () => {
    arr[index] = dollarItem.value
    index++
    dollarItem.value = ''
    document.getElementsByName('item')[0].placeholder = 'Enter Items'
}

let convertToInr = () => {
    inrItem = document.getElementById('inr')
    inrItem.innerText = 'Items in INR are : \n'
    arr.map((element) => {
        element = element * 80
        inrItem.innerText = inrItem.innerText + element + '\n'
    })
}