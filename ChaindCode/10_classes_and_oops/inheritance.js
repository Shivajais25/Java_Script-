// Use of inheritance in JS - 'extends'

class User{
    constructor(username){
        this.username = username
    }

    display(){
        console.log(`username - ${this.username}`)
    }
}

class Language extends User{
    constructor(username, language){
        super(username)
        this.language = language
    }
    
    logme(){
        console.log(`A ${this.language} was learnt by ${this.username}`)
    }
}

const lang = new Language('Shiva', 'python')
lang.display()
lang.logme()

const user = new User('Hitesh')
user.display()

