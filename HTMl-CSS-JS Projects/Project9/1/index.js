let uName, reverseName, section
let reverse = () => {
    uName = document.getElementById('uName').value
    section = document.getElementById('section')
    reverseName = uName.split("").reverse().join("")
    console.log(reverseName);
    setTimeout(print,2000)
}
function print(){
    section.innerText = reverseName
}