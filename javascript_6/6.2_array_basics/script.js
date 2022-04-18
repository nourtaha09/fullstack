let people = ["Greg", "Mary", "Devon", "James"];

for(let person of people){
    console.log(person)
}

function remove(person){
    const index = people.indexOf(person)
    people.splice(index, 1)
}

remove("Greg")
console.log(people)

remove("James")
console.log(people)

people.push("Matt")
console.log(people)

people.push("Nour")
console.log(people)

for(let person of people){
    console.log(person)
    if(person === "Mary"){
        break
    }
}

const peopleCopy = [...people.slice(1,2) , ...people.slice(-1)]
console.log('peopleCopy',peopleCopy)

const maryIndex = people.indexOf("Mary")
console.log(maryIndex)

const fooIndex = people.indexOf("Foo")
console.log(fooIndex)

people = ["Greg", "Mary", "Devon", "James"]

const devonIndex = people.indexOf("Devon")
people.splice(devonIndex,1,"Elizabeth", "Artie")
console.log(people)

let withBob = [...people, "Bob"]
console.log(withBob)
