const array = [1,4,7,8,22,2,3,21,43,63,21,5, 81]
const max = array.reduce((a,b)=>Math.max(a,b))
console.log('max',max)

const sum = array.reduce((a,b)=>a + b)
console.log('sum',sum)

const average = array.reduce((a,b)=> a + b) / array.length
console.log('average',average)
