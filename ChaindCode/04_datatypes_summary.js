// Primitive types
/* 7 types - String, Number, Boolean, Null, undefined, Symbol(for making values unique used in advanced js),
            BigInt  */


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


/* ++++++++++++++++++++++++++++++++++++++++++++++
    Stack memory(Primitive) ==> store copy (does not change original value)
    , Heap memory(Non-primitive or reference)   ==> give reference or original value 

    Below is the example of Stack */
    let my_lang = "Javascript"
    your_lang = my_lang
    console.log(your_lang)      // here we get the copy of my_lang which is primitive type so if we do any
                                // change in your_lang so my_lang value will always be "Javascript"
    your_lang = "typescript"
    console.log(your_lang)

    // Below is the example of Heap 

    let userOne = {
        email : "230354@kit.ac.in",
        course : "BCA"
    }
    let userTwo = userOne      // here we get the original values because it is stored in heap memory
    console.log(userTwo)    // here we get the original value 
    userTwo.email = "shivajais25@gmail.com"     // here original value is changed so the userOne and userTwo mail now will be same
    console.log(userOne)
    console.log(userTwo)