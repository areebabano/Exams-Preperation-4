// Nested Object 

// type Alias 

type Person = {
    name: string,
    age: number,
    isMarried: {
        single: boolean,
        married: boolean
    }
}

let teacher: Person = {
    name: "Sir Bilal",
    age: 25,
    isMarried: {
        single: true,
        married: false
    }
}

console.log(teacher.isMarried.single); // get object with . notation
console.log(teacher["isMarried"]["married"]); // get object with square bracket [] notation



