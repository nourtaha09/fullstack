const book1 = {
    name: 'How to Avoid a Climate Disaster',
    auther: 'Bill Gates',
    year: 2021
}
const book2 = {
    name: 'Bad Blood',
    auther: 'John Carreyrou',
    year: 2018
}
const bookUtils = {
    getFirstPublished: function (b1, b2){
        if(b1.year < b2.year){
            return b1
        }else if(b2.year < b1.year){
            return b2
        }else{
            return null
        }
    },
    setNewEdition: function (book, editionYear){
        return book.editionYear = editionYear
    },
    setLanguage: function(book, language){
        return book.language = language
    },
    setTranslation: function(book, language, translator){
        book.translation = {
            translator: translator,
            language: language
        }
    },
    setPublisher: function(book, name, location){
        book.publisher = {
            name: name,
            location: location
        }
    },
    isSamePublisher: function(b1, b2){
        if(b1.publisher.name === b2.publisher.name && b1.publisher.location === b2.publisher.location){
            return true
        }else{
            return false
        }
    }
}
console.log(book1)
console.log(book2)

console.log("first published", bookUtils.getFirstPublished(book1, book2))

bookUtils.setNewEdition(book1, 2022)
bookUtils.setNewEdition(book2, 2022)
console.log(book1)
console.log(book2)



bookUtils.setLanguage(book1, "Spanish")
bookUtils.setLanguage(book2, "Spanish")
console.log(book1)
console.log(book2)


bookUtils.setTranslation(book1, "English", 'Finnish')
bookUtils.setTranslation(book2, "English", 'Finnish')
console.log(book1)
console.log(book2)


bookUtils.setPublisher(book1, "Amazon", 'USA')
bookUtils.setPublisher(book2, "Amazon", 'USA')
console.log(book1)
console.log(book2)


console.log("is the same publisher", bookUtils.isSamePublisher(book1, book2))
