async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data2 = await data.json()
    console.log(data2);
}
fetchData()
