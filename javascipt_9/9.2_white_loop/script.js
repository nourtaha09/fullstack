function stringsLength(arr){
    
    let index = 0
    const lengths = []
    do{
        lengths.push(arr[index].length)
        index++
    }while(index < arr.length)

    return lengths
}
console.log(stringsLength(['boo','doooo','hoo','ro']))

//the for loop for this task is better becuase it need less code to get it done