function steps(n){
    for(let i = 1; i <= n; i++){
        let toLog = ''
        for(let e = 1; e <= n; e++){
            if(e <= i){
                toLog += "#"
            }else{
                toLog += " "
            }
        }
        console.log(toLog)
    }
}
steps(2)
steps(3)
steps(4)
