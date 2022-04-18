const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countTheLetters(array){
    const counter = {

    }
    for(let words of array){
        const wordsList = words.split(' ')
        for(let word of wordsList){
            for(let i = 0; i < word.length; i++){
                const letter = word[i].toLowerCase()
                counter[letter] = (counter[letter] || 0) + 1
            }
        }

    }
    return counter
}
console.log(countTheLetters(array))

//extra 
function mostOccurrenceLetter(array){
    const counter = {

    }
    for(let words of array){
        const wordsList = words.split(' ')
        for(let word of wordsList){
            for(let i = 0; i < word.length; i++){
                const letter = word[i].toLowerCase()
                counter[letter] = (counter[letter] || 0) + 1
            }
        }

    }

    let mostAccur 
    let mostAccurValue = 0
    Object.keys(counter).forEach(e=>{
        const value = counter[e]
        if(value > mostAccurValue){
            mostAccurValue = value
            mostAccur = e
        }
    })
    return mostAccur
    
}
console.log(mostOccurrenceLetter(array))