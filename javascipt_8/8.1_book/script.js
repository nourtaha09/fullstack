const book = {
    title: "The Usefulness of Useless Knowledge",
    auther: 'Abraham Flexner',
    pages: 95,
    year: 2017,
    lanuage: "English"
}
function descripTheBook(book){
    return `The book ${book.title} was written by ${book.auther} in the year ${book.year}`
}
console.log(descripTheBook(book))