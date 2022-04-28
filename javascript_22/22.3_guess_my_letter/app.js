const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const letterBox = document.querySelector("#letterBox")
const message = document.querySelector("#message")
const keys = document.querySelector("#keys")
const button = document.querySelector("button")
const playAgain = document.querySelector('#playagain')
const keysGussed = document.querySelector('#keysGussed')
let guessedKeys = []
let randomLetter 
let done = false
document.addEventListener("keydown",(k)=>{
    if(!done){
        const key = k.key
        if(guessedKeys.includes(key)){
            guessedError(key)
        }else if(letters.includes(key)){
            guess(key)
        }else{
            validError()
        }
    }
})
button.addEventListener('click',()=>restart())

restart()
function restart(){
    letterBox.innerHTML = "?"
    message.innerHTML = 'Guess a letter'
    message.classList.remove('true','wrong')
    keys.innerHTML = ''
    guessedKeys = []
    randomLetter = letters[ Math.floor(Math.random() * letters.length)]
    done = false

    playAgain.setAttribute('class','hide')
    button.setAttribute('class','hide')
    keysGussed.classList.remove('hide')
    keys.classList.remove('hide')
}
function guess(key){
    guessedKeys.push(key)
    if(key === randomLetter){
        message.innerHTML = 'Right letter!'
        letterBox.innerHTML = randomLetter
        message.setAttribute('class','true')
        done = true

        keysGussed.setAttribute('class','hide')
        keys.setAttribute('class','hide')
        playAgain.classList.remove('hide')
        button.classList.remove('hide')

    }else{
        message.innerHTML = 'Nope, wrong letter'
        message.setAttribute('class','wrong')
        keys.innerHTML = guessedKeys
    }
}
function guessedError(key){
    message.setAttribute('class','wrong')
    message.innerHTML = `${key} has already been guessed!`
}
function validError(){
    message.setAttribute('class','wrong')
    message.innerHTML = `please enter a valid letter`
}
