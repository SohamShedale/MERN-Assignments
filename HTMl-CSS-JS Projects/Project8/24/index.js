let details = document.getElementById('info')
let i=0, str1, str2 = ' ', words
let show = () => {
    words = details.innerText.split(" ")
    while(i<words.length){
        if(words[i].length>=8){
            str1 = '<mark>'+words[i]+'</mark>'
            str2 = str2+' '+str1
        }
        else{
            str2 = str2+' '+words[i]
        }
        i++
    }
    details.innerHTML = str2
}
