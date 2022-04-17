function describeCountry(country, population, capitalCity){
    return `${country} has ${population} people and its capital city is ${capitalCity}`
}
let usa = describeCountry("United States", "330 million", "Washington, D.C.")
let mexico = describeCountry("Mexico", "129 million", "Mexico City")
let spain = describeCountry("Spain", "47.35 million", "Madrid")
console.log(usa)
console.log(mexico)
console.log(spain)