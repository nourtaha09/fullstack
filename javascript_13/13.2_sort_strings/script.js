const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
//a
foods.sort((a,b)=>b > a  ? 1 : -1)
console.log('descending',foods)

foods.sort((a,b)=>a > b ? 1 : -1)
console.log('ascending',foods)

//b
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];
foodsWithUpperCase.sort((a,b)=>b.toLowerCase() > a.toLowerCase()  ? 1 : -1)
console.log('descending',foodsWithUpperCase)

foodsWithUpperCase.sort((a,b)=>a.toLowerCase() > b.toLowerCase() ? 1 : -1)
console.log('ascending',foodsWithUpperCase)
   

//c
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
words.sort((a,b)=>b.length > a.length ? 1 : -1)
console.log("longest word", words)