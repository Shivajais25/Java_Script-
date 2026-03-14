const score = 100
console.log(score)

const num = new Number(100)
console.log(num)
console.log(num.toFixed(3))
// console.log(num.toString())

const otherNumber = 34.55644
console.log(otherNumber.toFixed(2))


console.log(otherNumber.toPrecision(3))

console.log(otherNumber.toPrecision(1))     // return in exponential

const balance = 3456532    // it is difficult to read this number so localestring()  is used to make it readable
console.log(balance.toLocaleString())   // depends on system setting
console.log(balance.toLocaleString('en-IN'))   // converts in IND format 


// +++++++++++++++++++++    MATHS +++++++++++++++++++++++++

console.log(Math.abs(-5))    // converts -ve int +ve always
console.log(Math.round(4.5)) // round the values
console.log(Math.ceil(5.1)) // select the top value always ==> 6
console.log(Math.floor(5.9))    // select the low value ==> 5
console.log(Math.random())  // always give any random value between 0 and 1 

// to find random number between 10 and 20 
const min = 10 
const max = 20 

console.log(Math.floor((Math.random() * (max - min +1)) + min))
