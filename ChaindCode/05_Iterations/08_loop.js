// REDUCE FUNCTION 

// through function 

const arr = [1, 2, 3]

const newSum = arr.reduce( function(acc, currvalue){
    console.log(`acc: ${acc} and currvalue: ${currvalue}`)
    return acc + currvalue
}, 0)   // here 0 is initial value 

console.log(newSum)

// through arrow function 

const newTotal = arr.reduce( (acc, currvalue) => acc + currvalue, 0)

console.log(newTotal)


// real example of reduce given below 

// you have to fetch shopping cart data and add all the prices of products

const shoppingCart = [
    {
        itemName: "JS Course",
        itemPrice: 1999
    },
    {
        itemName: "Java Course",
        itemPrice: 5999
    },
    {
        itemName: "Python Course",
        itemPrice: 3999
    },
    {
        itemName: "MERN Course",
        itemPrice: 7999
    },
    {
        itemName: "Data Science Course",
        itemPrice: 20999
    }
]

const sumOfPrice = shoppingCart.reduce( (acc, Price) => acc + Price.itemPrice, 0)

console.log(sumOfPrice)