let greet = (username) => {
    return new Promise((resolve,reject)=>{
        let msg = `Hello ${username}`
        resolve(msg)
    })
}
greet('Soham').then((msg)=>{
    console.log(msg);
})