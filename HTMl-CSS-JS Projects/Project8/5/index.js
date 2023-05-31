// let uName = document.getElementById('uName').value
let heading = document.getElementById('heading')
function show(uName){
    let i=0
    if(uName[i].toUpperCase()==uName[i]){
        console.log(uName[i]);
        heading.innerText = 'Hello '+uName+'!!!'
    }
    else{
        uName = uName[i].toUpperCase()+uName.slice(1)
        heading.innerText = 'Hello '+uName+'!!!'
    }
}