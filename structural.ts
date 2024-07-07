// Structural Typing 

// person 1 object
let person1 = {
    name: "Areeba",
    age: 22
}

// let name1: string = "saman"
// let age: number = 50;

// person 2 object
let person2 = {
    name: "Fatima",
    age: 16
}

console.log(person1); // output person 1


person1 = person2 // output person 2
console.log(person1);

person2 = person1 // output person 2
console.log(person2);


let student1 = {
    name: "saman",
    age: 50,
    isItStu: true,
    // rollNo: 11
}

let student2 = {
    name: "Rubab",
    age: 21,
    isItStu: true,
    rollNo: 12
}

student1 = student2 // this is assignable because this is stale object
// student2 = student1 // student 2 have rollNo property but student 1 not beacause this is not assignable 

// student1 = {
//     name: "Rubab",
//     age: 21,
//     isItStu: true,
//     rollNo: 12
// } // this is also not assignable because this is fresh object  