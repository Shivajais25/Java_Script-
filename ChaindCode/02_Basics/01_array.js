// array 
let Arr = [1, 2, 3, 4, 5, 6, 7] // first way to declare array 
let Arr2 = new Array("Python", "Java", "Flutter", "Go") // second way to declare array 

console.log(Arr2)

// array methods
Arr.push(8, 9)  // append value at the end of array 
console.log(Arr)

Arr.pop()
console.log(Arr)    // delete last value from the array 

console.log(Arr.includes(10))   // return boolean if 10 exist in array or not 
console.log(Arr.indexOf(2))     // return index of 2 in the existing array 



// slice and splice method 

const new_arr1 = Arr.slice(1, 4)
console.log(new_arr1)

const new_arr2 = Arr.splice(1, 4)       // it manipulate the original value of array by cutting out of values lie in the given range 
console.log(new_arr2)

console.log(Arr)

