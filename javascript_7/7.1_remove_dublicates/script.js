function removeDuplicates(array){
    const newArray = []
    for(let n of array){
        if(!newArray.includes(n)){
            newArray.push(n)
        }
    }
    return newArray
}
console.log(removeDuplicates([3,4,4,3,6,3] ))