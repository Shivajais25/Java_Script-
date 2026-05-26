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


// now implementing promises through async and await - but yeh error ko sahise handle nhi krta 

const promiseFour = new Promise(function(resolve, reject){
     setTimeout(function(){
        let error = true    // if error exist - reject executed or if error false then resolve executed

        if(!error){
            resolve({username : "JAVASCRIPT", password : "JAVAscript@!21"})
        }

        else{
            reject({ Error : "Something went wrong in JS!"})
        }

    }, 8000)
})

// here if error exists so we have to use try ad catch to handle it gracefully

async function consumePromiseFour(){

    // if everything goes well then try block will be executed

    try {
    const response = await promiseFour
    console.log(response)

    // if error exists then catch will be executed

    } catch (error) {
        console.log(error)
    }
}

consumePromiseFour()