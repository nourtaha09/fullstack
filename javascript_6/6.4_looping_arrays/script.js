const populations = [100, 1400, 300, 6]
function populationPercentages(populations){
    function percetnage(p){
        return `${(p/(7900)) * 100}%`
    }
    const percentages = []
    for(let population of populations){
        percentages.push(percetnage(population))
    }
    return percentages
}
console.log(populationPercentages(populations))