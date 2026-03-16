// this is used to refer current context 

const user = {
    username: "Shiva Jaiswal",
    age: 20,
    location: "Gurugram",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to this website`)    // 'this' is used for current object
    }
}

user.welcomeMessage()
user.username = "John Doe"
user.welcomeMessage()

console.log(this)   // if we print this in any editor so we get an empty object but if we run in browser so we get window
                    // but if you print this any function you get so many values 

function thiskeyword(){
    let username = "John"
    console.log(this.username)  // it return undefined because this works only in object context
}

thiskeyword()


// ++++++++ ARROW FUNCTION ++++++++

const variable_one = () => {
    let username = "Shiva"
    console.log(this.username)  // this is the reason why this keyword not work with function in js
}
variable_one()

// create an arrow function to add two numbers

const sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(40, 10))

// another way to make arrow () it is most used in react    (implicit return)

const sub = (num1, num2) => (num1 - num2)

console.log(sub(40, 10))