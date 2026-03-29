// if - else statement

const UserLoggedIn = true
const debitCard = true
const creditCard = false

const loggedInFromGoogle = true
const loggedInFromEmail = false

// allow user to access the below block when userloggedin & have debit or credit card
if (UserLoggedIn && debitCard || creditCard){
    console.log("Allow User for Shopping")
}

// check if user logged in from mail or google
if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in!")
}