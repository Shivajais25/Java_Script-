/* javascript is a portotyple language basically yeh agr apni language mein smjhe toh baal
    ki khaal tak jaata hai mtlb agr array banaya toh use browser se access kro toh prototype milega then 
    uske andar bhi proto mtlb array --> object (hi sabka papa hai)

*/

// making of their own prototype

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Username - ${this.username} and Score - ${this.score}`)
}

const User1 = new createUser('User1', 40)
const User2 = new createUser("User2", 340)

User1.printMe()

User2.printMe()