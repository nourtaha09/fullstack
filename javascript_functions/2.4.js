function getDate(){
    const date = new Date()
    const weekDay = date.getDay()
    const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const monthIndex = date.getMonth()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return `Today is ${weekDays[weekDay]} the ${date.getDate()} of ${months[monthIndex]}, ${date.getFullYear()}`
}
console.log(getDate())