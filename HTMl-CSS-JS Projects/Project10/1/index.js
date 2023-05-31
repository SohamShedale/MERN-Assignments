const count = (str1) => {
    const words = str1.split(" ")
    const map1 = new Map()

    for(let word of words){
        if(map1.has(word)){
            map1.set(word,map1.get(word)+1)
        }
        else{
            map1.set(word,1)
        }
    }
    return map1
}

console.log(count("I am Soham. I am a Student. I am a learner.")); 