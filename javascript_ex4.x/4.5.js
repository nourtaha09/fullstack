function isItLeapYear(year){
    const divBy4 = year %4 === 0
    const divBy100 = year % 100 === 0
    const divBy400 = year % 400 === 0 
    if(divBy4 && (!divBy100 || divBy400)){
        console.log('It is indeed a leap year')
    }else{
        console.log('This is not a leap year.')
    }
}
isItLeapYear(2012)
isItLeapYear(2100)
isItLeapYear(2400)
