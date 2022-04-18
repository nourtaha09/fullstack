const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id:13,
            name: "Houston",
            age: 21,
        },
    ],
   };

function findPerson(type, id){
    let person
    if(type === "teacher"){
        const personIndex = school.teachers.findIndex(e=>e.id === id)
        person = school.teachers[personIndex]
    }else if (type === "student"){
        const personIndex = school.students.findIndex(e=>e.id === id)
        person = school.students[personIndex]        
    }
    return person
}
console.log(findPerson("student", 12))


for(student of school.students){
    for(teacher of school.teachers){
        if(teacher.capacityLeft > 0){
            teacher.students.push(student)
            teacher.capacityLeft--
            break
        }
    }
}
console.log(school)


function assignStudent(id, subject){
    let found = false
    for(teacher of school.teachers){
        if(teacher.subjects.includes(subject) && teacher.capacityLeft > 0){
            teacher.students.push(student)
            teacher.capacityLeft--
            school.students.push({
                id:id
            })
            found = true
            break;
        }
    }
    if(!found){
        console.log('Sorry, no available teachers left')
    }
}
assignStudent(32,'history')
console.log(school)


function assignTeachersSubject(id, newSubject){
    const teacher = findPerson('teacher', id)
    if(!teacher.subjects.includes(newSubject)){
        teacher.subjects.push(newSubject)
    }
}
assignTeachersSubject(1,"Math")
console.log(school.teachers)



function giveMoreCapacity(id, plusCapacity){
    const teacher = findPerson('teacher',id)
    teacher.capacityLeft += plusCapacity
}
giveMoreCapacity(2,5)
console.log(school.teachers)