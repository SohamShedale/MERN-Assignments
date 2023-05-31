let taskName
let list = document.getElementById('toDoList')
list.innerHTML += 'Your To-Do List <br>'
let add = () => {
    taskName = document.getElementById('task').value
    document.getElementById('task').value = ' '
    
    let x = document.createElement('input')
    x.setAttribute('type','checkbox')
    x.setAttribute('id', 'check1')
    x.setAttribute('value', taskName)

    let y = document.createElement('label')
    y.htmlFor='check1'
    y.appendChild(document.createTextNode(taskName))

    list.appendChild(x)
    list.appendChild(y)
    list.innerHTML += '<br>'
}