// object singleton / constructor way 

const User = new Object()   // singleton 

User.id = "123abx"
User.name = "John Doe"
User.isLoggedIn = false
User.location = "Gurugram"

const ChildUser = {
    cName: "Jimmy",
    fullname: {
        first_name: "James",
        last_name: "Doe"
    },
    age: 11,
}
console.log(ChildUser.fullname)
console.log(User)

// merge two object in a new object 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}     //using spread operator 

console.log(obj3)

console.log(Object.keys(User))  // to extract keys from object 

console.log(Object.values(User))    // to extract values from object

// to check whether key or values exist or not 

console.log(User.hasOwnProperty('isLoggedIn'))

// de-structuring of object mostly used in react 

const {isLoggedIn: loggeduser} = User       // de-structuring done in {}

console.log(loggeduser)