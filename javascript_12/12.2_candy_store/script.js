const candyStore = {
    candies: [
    {
        name: "mint gum",
        id: "as12f",
        price: 2,
        amount: 2
    },
    {
        name: "twix",
        id: "5hd7y",
        price: 5,
        amount: 4
    },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id){
    const index = candyStore.candies.findIndex(e => e.id === id)
    return candyStore.candies[index]
    
}

function getPrice(candyStore, id){
    const index = candyStore.candies.findIndex(e => e.id === id)
    return candyStore.candies[index].price
}

function addCandy(candyStore, id, name, price){
    candyStore.candies.push({
        name: name,
        price: price,
        id: id,
        amount: 1
    })
}

function buy(candyStore, id){
    const price = getPrice(candyStore,id)
    candyStore.cashRegister += price
    
    const item = getCandy(candyStore, id)
    item.amount -= 1
}


const candyItem = getCandy(candyStore, "5hd7y")
console.log(candyItem)



const price = getPrice(candyStore, "5hd7y")
console.log(price)


addCandy(candyStore,"aj037", '0p', 9)
console.log(candyStore)



buy(candyStore,'5hd7y')
console.log(candyStore)
