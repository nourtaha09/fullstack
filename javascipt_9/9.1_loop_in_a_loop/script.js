const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for(let c of listOfNeighbours){
    for(let n of c){
        console.log("Neighbour:",n)
    }
}