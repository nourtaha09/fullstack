function isString(string, callback){
    
    callback(typeof string === 'string')
    
}

function firstWordUpperCase(string, callback){
    const upperCaseString = string.toUpperCase()
    callback(upperCaseString)
}

isString('word', (isIt)=>{console.log(isIt)})
isString(["b","a","33"], (isIt)=>{console.log(isIt)})

firstWordUpperCase("baby yoda grogu",(upperCase)=>{

    console.log(upperCase.replaceAll(' ','_'))

})


firstWordUpperCase("first word is a string", (upperCase)=>{
    console.log(upperCase.replaceAll(" ", "#") + ".")
})


function surfaceOfASphere(radius, callback){
    const pi = 3.14
    const a =  4 * pi * radius * radius
    callback(a)
}
surfaceOfASphere(6371, (a)=>{
    const halfSurafce = a / 2
    console.log(`half the surface is ${halfSurafce} km`)
})