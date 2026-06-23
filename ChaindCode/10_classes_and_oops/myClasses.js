// EC6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){  // method in JS 
        return `${this.password}123@#ascbf`
    }

    // convert user name into upper case

    changeNameCase(){
        return `${this.username.toUpperCase()}`
    }
}

// creating object
const user = new User("User1", "user1@gmail.com", "124shiva")

console.log(user.encryptPassword())

console.log(user.changeNameCase()uses)