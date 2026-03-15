// objects store data in key value pair, below is the object literal way 

// task is to add symbol primitive type in object and print it 
let mySymbol = Symbol("Symbol_value")
let myObj = {
    name: "Shiva Jaiswal",
    age: 20,
    location: "Kanpur",
    isLoggedin: false,
    [mySymbol]: "Symbol_value"
}

// two ways to access values from object :

console.log(myObj.name) // first way 
console.log(myObj["name"])  // second way 

console.log(myObj[mySymbol])

// change location from kanpur to gurugram 
myObj.location = "Gurugram"
console.log(myObj)
// if you want to make your object not mutable just use freeze()
// Object.freeze(myObj)
// myObj.age = 10
// console.log(myObj)  // value doesn't change because the object is freezed now 

myObj.greeting = function(){
    console.log(`Hello Developer ${this.name}`)
}

console.log(myObj.greeting())