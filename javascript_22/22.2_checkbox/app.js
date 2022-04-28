
function change(){
    const img = document.querySelector("img")
    const check = document.querySelector('#check')
    if(check.checked){
        img.classList.remove('hide')

    }else{
        img.classList.add('hide')
    }
}