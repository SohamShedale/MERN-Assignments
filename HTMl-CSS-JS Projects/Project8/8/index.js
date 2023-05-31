function show(){
    let number = document.getElementById('num').value,i,j,str=''
    let pat = document.getElementById('pattern')
    for(i=1;i<=number;i++){
        for(j=i;j<=number;j++){
            str += '*'
            console.log('*');
        }
        str += '\n'
    }
    pattern.innerText = str
    str = ''
}