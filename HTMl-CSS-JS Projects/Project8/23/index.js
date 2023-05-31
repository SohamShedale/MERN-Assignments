let getRandomColor = () => {
    let color = '0123456789ABCDEF'
    let colorCode = '#'
    for(let i=0;i<6;i++){
        colorCode += color[Math.floor(Math.random()*16)]
    }
    return colorCode
}
let change= () => {
    document.body.style.backgroundColor = getRandomColor()
}