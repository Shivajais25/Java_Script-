/* use of getownpropertydiscreptor to check whether object is
    changeable or not */

console.log(Math.PI)

// now to check behind the scene why its value cannot be rewritable

const math_obj = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(math_obj)

/* Now ab agr hme apne bnaaye hue object ko aise hi krna hai ki koi use cheed na paaye
    toh hme defineProperty ka use krna pdega 
    */

const user = {
    username: 'Shiva', 
    userID: 230454
}

const getUserDescriptor = Object.getOwnPropertyDescriptor(user, 'userID')

console.log(getUserDescriptor)  // ab yaha par user id change ho skti hai but hme iska access change krna pdega

Object.defineProperty(user, 'userID', {
    writable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(user, 'userID'))

// now try to change userID

user.userID = 0
console.log(user.userID)

// ab jo hai useID change nhi krskte ya overwrite nhi kar skte yaha par