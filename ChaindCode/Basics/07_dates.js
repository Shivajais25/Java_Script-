// Date in js is used by using Date
let myDate = new Date()
console.log(myDate) // gives output but not so readable

console.log(myDate.toDateString())  // much more readable than previous one

console.log(myDate.toISOString())

console.log(myDate.toJSON())

console.log(myDate.toLocaleDateString())    // gives date in dd/mm/yyyy

console.log(myDate.getDay())    // today is saturday so it's index is 6

console.log(myDate.toLocaleString('default', 
    {
        dateStyle: "full",
    }
))