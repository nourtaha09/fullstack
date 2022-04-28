let player1Pos = 1
let player2Pos = 1
let done = false
const playerOneRace = document.querySelector('#player1-race')
const playerTwoRace = document.querySelector('#player2-race')
const button = document.querySelector('button')
const winner = document.querySelector('#winner')

document.addEventListener("keyup",(k)=>{
    if(!done){
        if(k.key === 'ArrowUp'){
            movePlayerOne()
        }else if(k.key === 'ArrowDown'){
            movePlayerTwo()
        }
    }
    
})
button.addEventListener('click',()=>restart())
function movePlayerOne(){

    if(player1Pos === 11){
        done = true
        winner.innerHTML = 'Red is the winner'
        winner.setAttribute('class','red')
        button.classList.remove('hide')
    }
    player1Pos++
    playerOneRace.querySelector('td.active').classList.remove('active')
    playerOneRace.querySelector(`td:nth-child(${player1Pos})`).classList.add('active')
    
}
function movePlayerTwo(){
    if(player2Pos === 11){
        done = true
        winner.innerHTML = 'Yellow is the winner'
        winner.setAttribute('class','yellow')
        button.classList.remove('hide')

    }
    player2Pos++
    playerTwoRace.querySelector('td.active').classList.remove('active')
    playerTwoRace.querySelector(`td:nth-child(${player2Pos})`).classList.add('active')
}
function restart(){
    player1Pos = 1
    player2Pos = 1
    done = false
    playerOneRace.querySelector('td.active').classList.remove('active')
    playerTwoRace.querySelector('td.active').classList.remove('active')
    playerOneRace.querySelector('td:nth-child(1)').classList.add('active')
    playerTwoRace.querySelector('td:nth-child(1)').classList.add('active')
    winner.innerHTML = ''
    winner.setAttribute('class','hide')
    button.setAttribute('class','hide')
}

