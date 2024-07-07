// Intersection types 

type Student = {
    name: string,
    age: number,
    institute: string
}

type SeniorStu = {
    coTeacher: boolean,
}

let student: Student & SeniorStu = { // this is intersection type
    name: "Areeba",
    age: 22,
    institute: "GIAIC",
    coTeacher: true
}

console.log(student);
