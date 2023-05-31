let regex, url, msg
const checkURL = () => {
    url = document.getElementById('url')
    msg = document.getElementById('message')
    regex = /^(http:\/\/ | https:\/\/) [a-zA-Z0-9]+\.[a-zA-Z]+ /
    if(url.value.match(regex))
        msg.innerText = 'URL is Valid'
    else
        msg.innerText = 'URL is Invalid'
}