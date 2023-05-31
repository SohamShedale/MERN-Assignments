let show
let generate = () => {
    let randomNumber = Math.random()*101
    show = document.getElementById('number')
    show.innerText = Math.floor(randomNumber)
}