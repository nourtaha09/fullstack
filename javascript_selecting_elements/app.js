document.addEventListener("DOMContentLoaded", ()=>{


    //1
    let firstH1 = document.getElementsByTagName('h1')[0]
    let firstP = document.getElementsByTagName('p')[0]
    let firstA = document.getElementsByTagName('a')[0]
    let firstImg = document.getElementsByTagName('img')[0]
    let firstDivX = document.getElementsByClassName('x')[0]
    let firstDivY = document.getElementById('y')
    let firstInputOne 
    let firstInputTwo
    let firstInputThree
    let inputsTags = [...document.getElementsByTagName('input') ]


    inputsTags.forEach((element, i) => {
        switch(i){
            case 0 : firstInputOne = element
            break
            case 1: firstInputTwo = element
            break
            case 2: firstInputThree = element
            break
        }
    });
    console.log('h1',firstH1)
    console.log('p',firstP)
    console.log('a',firstA)
    console.log('img',firstImg)
    console.log('divX',firstDivX)
    console.log('divY',firstDivY)
    console.log('inputOne',firstInputOne)
    console.log('inputTwo',firstInputTwo)
    console.log('inputThree',firstInputThree)



    //2
    let h1 = document.querySelector('h1')
    let p = document.querySelector('p')
    let a = document.querySelector('a')
    let img = document.querySelector('img')
    let divX = document.querySelector('div.x')
    let divY = document.querySelector('#y')
    let inputOne 
    let inputTwo
    let inputThree
    let inputs = document.querySelectorAll('input')
    inputs.forEach((element, i) => {
        switch(i){
            case 0 : inputOne = element
            break
            case 1: inputTwo = element
            break
            case 2: inputThree = element
            break
        }
    });
    console.log('h1',h1)
    console.log('p',p)
    console.log('a',a)
    console.log('img',img)
    console.log('divX',divX)
    console.log('divY',divY)
    console.log('inputOne',inputOne)
    console.log('inputTwo',inputTwo)
    console.log('inputThree',inputThree)


})




