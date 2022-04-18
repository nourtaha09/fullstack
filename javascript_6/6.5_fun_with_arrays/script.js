const array = Array(100).fill("item")
console.log(array, array.length)

const rangeArray = Array.from({length: 100},(_,i)=>i + 1)
console.log(rangeArray)

const object = {name: "Luna", age: 2, type: "cat", color: "white"}
const objectValues = Object.values(object)
console.log("objectValues",objectValues)

const backToObject = {}
objectValues.forEach(e=>backToObject[e] = e)
console.log("backToObject",backToObject)


const oneArray = []
const oneObject = {}
console.log("is array", Array.isArray(oneArray) )
console.log("is array", Array.isArray(oneObject) )

const copyArray = array.slice()
copyArray[0] = "n"
console.log("origin array",array)
console.log("copy array", copyArray)


const effectedArray = array
effectedArray[0] = "g"
console.log("origin array",array)
console.log("effectedArray ", effectedArray)
