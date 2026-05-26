// Promises in javascript

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task executed!")
    }, 1000)

    resolve()   // to make promise work we have to call resolve()
})

promiseOne.then(function(){
    console.log("Async task resolved!")
})

// promise with parameters

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Shiva Jaiswal", email : "shivajais25@gmail.com"})  //passing parameters in resolve 
    }, 3000)
})

promiseTwo.then(function(user){
    console.log(user)
})


// using of reject and resolve both - then and catch 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false    // if error exist - reject executed or if error false then resolve executed

        if(!error){
            resolve({username : "SHIVA JAISWAL", password : "SHIVA@JAIS25j"})
        }

        else{
            reject({ Error : "Something went wrong!"})
        }

    }, 5000)
})

promiseThree.then((user) => {        // then executed when error is false otherwise catch executed
    console.log(user)
    return user.username
}).then((username) => {     // here we get username through chaining method 
    console.log(username)
}).catch((error) => {       // catch to handle error
    console.log(error)
})    