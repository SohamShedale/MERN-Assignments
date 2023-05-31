let uName = document.getElementById('name'),total=0, info = document.getElementById('info')
function count(){
    console.log(uName.value);
    for(let i=0;i<(uName.value).length;i++){
        if(uName.value.charAt(i)=='a' || uName.value.charAt(i)=='e' || uName.value.charAt(i)=='i' || uName.value.charAt(i)=='o' || uName.value.charAt(i)=='u'){
            total++
        }
        else if(uName.value.charAt(i)=='A' || uName.value.charAt(i)=='E' || uName.value.charAt(i)=='I' || uName.value.charAt(i)=='O' || uName.value.charAt(i)=='U'){
            total++
        }
    }
    info.innerText = 'Total number of vowels present in name is '+total
    total = 0
}