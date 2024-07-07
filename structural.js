"use strict";
// Structural Typing 
// Obj 1
let person1 = {
    name: "Areeba",
    age: 22
};
// let name1: string = "saman"
// let age: number = 50;
// Obj 2
let person2 = {
    name: "Fatima",
    age: 16
};
console.log(person1); // output person 1
person1 = person2; // output person 2
console.log(person1);
person2 = person1; // output person 2
console.log(person2);
let student1 = {
    name: "saman",
    age: 50,
    isItStu: true,
    // rollNo: 11
};
let student2 = {
    name: "Rubab",
    age: 21,
    isItStu: true,
    rollNo: 12
};
student1 = student2;
// student2 = student1
// student1 = {
//     name: "Rubab",
//     age: 21,
//     isItStu: true,
//     rollNo: 12
// }
