let str1 = 'The most affordable learning platform'
let str2 = 'PW Skills', currentHeading

let change = () => {
    currentHeading = document.getElementById('heading')
    if(currentHeading.innerText==str1){
        currentHeading.innerText = str2
    }
    else if(currentHeading.innerText==str2){
        currentHeading.innerText = str1
    }
}