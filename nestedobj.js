"use strict";
// Nested Object 
let teacher = {
    name: "Sir Bilal",
    age: 25,
    isMarried: {
        single: true,
        married: false
    }
};
console.log(teacher.isMarried.single);
console.log(teacher["isMarried"]["married"]);
