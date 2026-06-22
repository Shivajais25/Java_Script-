/* Now our goal is to make a trueLength named method which is used to remove extra spaces from
    the string without using pre-defined functions like trim 
*/


// without using .trim().length

let username = "ShivaJaiswal   " // we have to return true length of the string and to make trueLength()

String.prototype.trueLength = function(){
    console.log(`String - ${this} and true length is ${this.trim().length}`)
}

username.trueLength()

"user1".trueLength()


// another example with array

let arr = ['js', 'python', 'django']

Array.prototype.shiva = function(){
    console.log("shiva is present in array")
}

arr.shiva()
