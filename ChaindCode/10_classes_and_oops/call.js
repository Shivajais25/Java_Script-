// use of call for global context 

function setUsername(username){
    this.username = username
}

function createUsername(username, email, password){

    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const user = new createUsername('User1', 'user1@gmail.com', '2343211e')

console.log(user)