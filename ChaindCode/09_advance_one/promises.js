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