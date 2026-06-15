// Use of this concept

const user = {
    username: 'Shiva Jaiswal',
    signedIn: true,
    userAge: 20,

    getUserDetails: function(){
        console.log(`Username - ${this.username}`)     // here if we print username so we have to use this keyword to give current context to this method
    }
}

user.getUserDetails()

// Here if we have to make one more user with same data so we have to rewrite the object structure
// again which makes the code lengthy so to reduce it constructor concept is introduced

// constructor function - new 

function User(username, isLoggedIn, loginCount){
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount

    return this
}

// creating new instance which creates reusability

const userOne = new User('User1', true, 12)

const userTwo = new User('User2', false, 0)

console.log(userOne)
console.log(userTwo)


// to check whether userOne is instance of User or not
console.log(userOne instanceof User)


/*

STEP 1 - this likhne se new object create hota hai 

STEP 2 - new keyword likhne se constructor function call hote hai 

STEP 3 - jo this ke andar inject ho jaati hai values 

STEP 4 - woh hme mil jaate hai as per use like console.log krne se

*/