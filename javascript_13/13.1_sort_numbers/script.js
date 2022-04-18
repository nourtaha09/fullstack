const numbers = [1, -5, 666, 2, 400, 11];
numbers.sort((a,b)=>b-a)
console.log("descending",numbers)

numbers.sort((b,a)=>b-a)
console.log('ascending',numbers)