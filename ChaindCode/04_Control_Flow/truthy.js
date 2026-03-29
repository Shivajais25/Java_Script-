// truthy values => Rest all are truthy values like empty array, "0", "false", " ", {}, function(){}

// falsy values => false, empty string(without any space), 0, bigint = 0n, null, undefined, NaN

// to check whether array is empty or not 
const array = []

if(array.length === 0){
    console.log("Array is empty!")
}

// to check whether object is empty or not 
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty!")
}


// Null Coalescing Operator => it is uesd to handle null or undefined value agr glti se databse se null ya undefined
// value aa rhi toh isme ek backup value ya function likhte hai jisse code ko phaatne se roka jaa ske

let val1;
val1 = null ?? 10 // ab is case mein null aa gyi value toh yeh 10 return krega as a backup 

console.log(val1)

let val2;
val2 = undefined ?? console.log(10)


// ternary operator

const teaPrice = 10

teaPrice >= 100 ? console.log("Tea Price is equal or more than 100") : console.log("Tea price is less than 100")