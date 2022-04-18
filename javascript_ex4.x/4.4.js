function boom(n){
    for(let i = 1; i <= n; i++){
        const divisibleBy7 = i % 7 === 0
        const includes7 = i.toString().includes('7')
        if(divisibleBy7 && includes7 ){
            console.log("Boom-Boom")
        }else if(divisibleBy7){
            console.log("Boom")
        }else{
            console.log(i)
        }
    }
}
boom(30)