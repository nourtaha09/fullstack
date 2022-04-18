const arr = [1,7,3,0,-5,7,3,9];
for(let n of arr){
    console.log(n)
}

function arrayLength(){
    let count = 0
    for(let i in arr){
        count++
    }
    return count
}
console.log("length",arrayLength())


function arraySum(){
    let sum = 0
    for(let n of arr){
        sum+=n
    }
    return sum
}

console.log("sum", arraySum())


function arrayMulti(){
    let multi = 1
    for(let n of arr){
        multi *= n
    }
    return multi
}

console.log('multi',arrayMulti())