function doubleValues(array){
    return array.map(e=>e * 2)
}
console.log(doubleValues([1,2,3,4]))

function onlyEvenValues(array){
    return array.filter((e)=>e % 2 === 0)
}
console.log(onlyEvenValues([1,2,3,4,5,6,7,8,9,10,11,12]))

function showFirstAndLast(array){
    const firstLast = [array[0], array[array.length - 1]]
    return firstLast.filter((e)=> typeof e === "string")
}
console.log(showFirstAndLast(['a','b','c','d','e']))
console.log(showFirstAndLast(['a','b','c',5]))


function vowelCount(string){
    const count = {}
    const vowels = ['a','e','i','o','u']
    for(let i = 0; i < string.length; i++){
        const letter = string[i].toLowerCase()
        if(vowels.includes(letter)){
            count[letter] = (count[letter] || 0) + 1
        }
    }
    return count
}
console.log(vowelCount("worksheet"))



function capitalize(string){
    const words = string.split(' ')
    let capitalizeWord = ''
    
    for(let word of words){
        let w = word[0].toUpperCase() + word.substring(1)
        capitalizeWord+=`${w} `
    }
    return capitalizeWord.trim()
}

console.log(capitalize('capitalize this sentence'))


function shiftLetters(string){
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let encoded = ''
    for(let i = 0; i < string.length; i++){
        const letter = string[i].toLowerCase()
        let index = alphabet.indexOf(letter) - 1
        if(index < 0) index = alphabet.length - 1
        encoded += alphabet[index]
    }
    return encoded
}
console.log(shiftLetters("javascript"))


function swapCase(string){
    let res = ""
    const words = string.split(' ')
    for(let w of words){
        if(w === "other"){
            res+= `${capitalize(w)} `
        }else{
            res+= `${w} `
        }
       
    }
    return res.trim()
}

console.log(swapCase('I bought this book the other day'))