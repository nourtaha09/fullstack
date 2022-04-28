const button = document.querySelector('button')
const p = document.querySelector('p')

function formSubmit(){
    const inputs = document.querySelectorAll('form input')
    const [name, age, email] = [...inputs]
    const nameValue = name.value
    const ageValue = parseInt(age.value)
    const emailValue = email.value

    const con = confirm(`name: ${nameValue} age: ${ageValue} email: ${emailValue}`)
    
    if(con){
        const divNode = document.createElement('div')
        divNode.classList.add("done")
        divNode.innerHTML = 'congratulations you successfully sent this form'

        document.querySelector('center').appendChild(divNode)
        name.value = ''
        age.value = ''
        email.value = ''
    }
}