const mycountry = {
    country: "Finland",
    capital: "Helsinki",
    language: "Finnish",
    population: 6,
    neighbours: ['Norway', 'Russia', 'Sweden'],
    describe: function (){
        return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they
        have ${this.neighbours} neighbouring countries and a capital called ${this.capital}`
    },
    checkIsland: function(){
        this.island = this.neighbours.length == 0
    }
}
console.log(mycountry.describe())
console.log(mycountry)
mycountry.checkIsland()
console.log(mycountry)