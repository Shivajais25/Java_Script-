// MAP FUNCTION 

const arr = [10, 20, 30, 40, 50]

const newNum = arr.map( (num) => num + 10 )

console.log(newNum)


// chaining method means using map with map or map with filter


const newNumTwo = arr
                    .map( (num) => num * 10 )         
                    .map( (num) => num + 10)
                    .filter( (num) => num >= 210)

console.log(newNumTwo)