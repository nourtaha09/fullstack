var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];


function canBeReadLibrary(library){
    for(let book of library){
        if(book.readingStatus){
            console.log(`book name ${book.title} author name ${book.author} reading status ${book.readingStatus}`)
        }
    }
}

console.log(canBeReadLibrary(library))