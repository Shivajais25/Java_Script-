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