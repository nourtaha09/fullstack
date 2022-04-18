const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
];


function allTheNames(array){
    return array.map(e=>e.name)
}
console.log(allTheNames(data))



function before1990(array){
    const movies = []
    for(let movie of array){
      const _birthday = movie.birthday.split('-')
      const year = Number(_birthday[_birthday.length - 1])
      if(year < 1990){
          movies.push(movie)
      }
    }
    return movies
}
console.log(before1990(data))




function foodCounter(array){
    const counter = {}
    for(let movie of array){
        console.log(movie)
        for(let meat of movie.favoriteFoods.meats){
            counter[meat] = (counter[meat] || 0) + 1
        }
        for(let fish of movie.favoriteFoods.fish){
            counter[fish] = (counter[fish] || 0) + 1
        }
    }
    return counter
}
console.log(foodCounter(data))