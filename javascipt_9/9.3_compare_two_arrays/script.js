const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function compare(arr1, arr2){
    const items = []
    for(let item1 of arr1){
        for(let item2 of arr2){
            if(item1 === item2){
                items.push(item1)
            }
        }
    }
    if(items.length === 0) return false
    return items
}
console.log(compare(food, food1))