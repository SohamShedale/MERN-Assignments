function filterTitles(obj,log){
    const newList = obj.map(book=>book.title)
    logTitle(newList)
}

const object = [
    {
        title:'Atomic Habits',
        author:'Soham',
        year:2012
    },
    {
        title:'Rich Dad, Poor Dad',
        author:'Chirag',
        year:2018
    },
    {
        title:'DoglaPan',
        author:'Ashneer',
        year:2021
    }
]

function logTitle(titles){
    titles.sort()
    console.log(titles);
}

filterTitles(object,logTitle)