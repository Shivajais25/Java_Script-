// merging two arrays
let p_languages = ["python", "java", "c#", "c++", "c"]
let sql = ["MySQL", "PostgreSQL", "SQLserver"]
let cloud_platforms = ["Render", "Railway", "NeonDB", "Cloudinary"]

const tech_stack = p_languages.concat(sql)
console.log(tech_stack)

// using most popular spread operator (...)

const new_tech_stack = [...p_languages, ...sql, ...cloud_platforms]
console.log(new_tech_stack)

// creating array from variables

let pl1 = "GO"
let pl2 = "Ruby"
let pl3 = "Flutter"

console.log(Array.of(pl1, pl2, pl3))    // return new array 