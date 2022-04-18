function swapped(object){
    const _object = {}
    const keys = Object.keys(object)
    const values = Object.values(object)
    do{
        const k = keys[Math.floor(Math.random() * keys.length)]
        const v = values[Math.floor(Math.random() * values.length)]
        console.log(k)
        console.log(v)
        _object[k] = v
        
        keys.splice(keys.indexOf(k),1)
        values.splice(values.indexOf(v), 1)
    }while(keys.length > 0)
    return _object

}

console.log(swapped({a: "a value", b: "b value", c:"c value"}))