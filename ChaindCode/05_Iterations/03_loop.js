// for-of loop

let arr = [10, 20, 30, 40, 50, 60]

for (const num of arr) {
    console.log(num)
}

let Greetings = "Morning!"
for (const greet of Greetings) {
    console.log(greet)
}

// Maps => used to store value in key value pair always store unique value 

const map = new Map()
map.set("IN", "India")
map.set("US", "United States")

console.log(map)

for (const [key] of map) {
    console.log([key])
}