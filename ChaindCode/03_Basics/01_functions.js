// function to add two numbers

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}

let sum =addTwoNumbers(20, 10)
console.log(sum)


function loggedInUserMessage(username){
    if(username === undefined){
        console.log("PLease Enter your name!")
    }
    else{
        return `${username} just logged in`
    }
}

let userStatus = loggedInUserMessage("Shiva Jaiswal")
console.log(userStatus)


// to add multiple values in a function using single parameter 
function calculateCart(...num1){
    return num1
}

console.log(calculateCart(100, 200, 300, 400, 500, 600))    // return array 

// handling objects using function 

const user = {
    username: "Shiva Jaiswal",
    age: 20 
}
function handleObject(anyobject){
    return `Username is ${anyobject.username} and age is ${anyobject.age}`
}

let myobj = handleObject(user)
console.log(myobj)

// handling array using function 

const Arr1 = [100, 200, 400, 600, 800]

function handleArray(getArray){
    return getArray[2]  // return third value from array as index starts from 0
}

console.log(handleArray(Arr1))