/* use of getter and setter - maan lo tumhe db se user ka password fetch karna hai lekin jo 
   bhi banda fetch krega password use exact password na mile kuch change hoke mile ya encrypt hoke
   mile toh iss liye getter aur setter ka use hota hai ki -----

   "JO VALUE GET KARNI HAI USE PEHLE SET KRO FIR FETCH KRO!"

*/
// important - GETTER AUR SETTER BANTE SMAY JIS VAR KA BANA RHE HO SAME NAME LENA JAISE PASSWORD VARIABLE 
// KA HAI TOH PASSWORD HI METHOD BNEGA


class User{

    constructor(email, password){
        this.email = email
        this.password = password
    }

    /* ab scenario yeh hai jo bhi password fetch kre use uppercase mein mile */

    get password(){
        return `**%^${this._password}***`   // aur encrypt krke password return kr rhe 
    }

    set password(value){
        this._password = value.toUpperCase()
    }

}

const user = new User('user@gmail.com', 'shiv432@%$#^')

console.log(user.password)