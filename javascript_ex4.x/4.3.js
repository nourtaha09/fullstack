const johnTeamScores = [89, 120, 103]
const mikeTeamScores = [116, 23, 123]

const johnTeamAverage = (johnTeamScores.reduce((a, b)=> a + b))/ johnTeamScores.length
const mikeTeamAverage= (mikeTeamScores.reduce((a, b)=> a + b))/ mikeTeamScores.length
console.log('johnTeamAverage: ', johnTeamAverage)
console.log('mikeTreamScores: ', mikeTeamAverage)

if(johnTeamAverage > mikeTeamAverage){
    console.log(`John Team is the winner, average: ${johnTeamAverage}`)
}else if(johnTeamAverage < mikeTeamAverage){
    console.log(`Mike Team is the winner, average: ${mikeTeamAverage}`)
}else{
    console.log('Draw')
}

