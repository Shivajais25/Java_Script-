// Primitive types
// 7 types - String, Number, Boolean, Null, undefined, Symbol(for making values unique used in advanced js),
//              BigInt


const id = Symbol('123')    // it returns false because it makes it unique whether the values are similar 
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 34334889938985n   // using n in last it automatically makes it bigint
console.log(typeof bigNumber)

// Non-primitive (reference)
// Arrays, Objects, Functions

const languages = ["C", "C++", "Java", "Python", "Ruby", "Go", "C#"]    //array declaration 

let myObj = {
    name : "Shiva",
    age: 20,

}               // objects in js

const myFunction = function(){
    console.log("Hello JS");
}

console.log(typeof languages)
console.log(typeof myObj)
console.log(typeof myFunction)