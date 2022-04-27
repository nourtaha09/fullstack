document.addEventListener("DOMContentLoaded",()=>{
    const button = document.querySelector('button')
    button.addEventListener('click',()=>{
        const input = document.querySelector('input')
        const p = document.querySelector('p')
        const age = parseInt(input.value)
        if(age >= 18){
            p.innerHTML = "your can drink appear"
        }else{
            p.innerHTML = "you'r too young"
        }
    })
})