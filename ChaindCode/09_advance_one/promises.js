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


// using of reject 