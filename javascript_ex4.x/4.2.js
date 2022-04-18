function gradeAssigner(score){
    if(score < 65){
        return "F"
    }else if(score < 70){
        return "D"
    }else if(score < 80){
        return "C"
    }else if(score < 90){
        return "B"
    }else{
        return "A"
    }
}

console.log(gradeAssigner(89))

console.log(gradeAssigner(60))

console.log(gradeAssigner(71))

console.log(gradeAssigner(68))

console.log(gradeAssigner(95))
