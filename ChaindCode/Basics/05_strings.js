const name = "Shiva"    // String declaration 
const repoCount = 12
// Modern way to use string and its values stored in any variable
console.log(`Hello my name is ${name} and my repo count in github is ${repoCount}`)

// Another way to declare string in object format
const gameName = new String("Cricket")
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('t'))

const newSubstr = gameName.substring(0,4)
console.log(newSubstr)

const nameOne = "     Shiva Jaiswal              "
console.log(nameOne)
console.log(nameOne.trim())
