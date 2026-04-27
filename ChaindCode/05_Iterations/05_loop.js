// for-each loop widely used in array 

const pl = ["java", "python", "cpp", "swift", "golang"]

// here function is used in foreach loop its parameter store array value as it use callback(), so we don't need to specify function name

pl.forEach( function(arr_value){
    console.log(arr_value)
})

// foreach through arrow function 


pl.forEach( (item) => {
    console.log(`Values through arrow function ${item}`)
})


pl.forEach( (item, index, array) => {
    console.log(item, index, array)
})

// access value from array inside object 

const arr = [
    {
        language : "python",
        file_extension : ".py"
    },
    {
        language : "java",
        file_extension : ".java"
    },
    {
        language : "javascript",
        file_extension : ".js"
    }
]

// access language from array inside obj


arr.forEach( (item) => {
    console.log(`Language is ${item.language} and its file extension is ${item.file_extension}`)
})