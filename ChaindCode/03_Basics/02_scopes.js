let a = 200


if(true){
    let a = 2
    const b = 20
    console.log("Local or Block Scope : ", a)
}

console.log("Global Scope : ", a)


// Nested functions 

function one(){
    const username = "Shiva Jaiswal"


    function two(){
        const web = "github"
        console.log(username)
    }

    two()   // two() is called here 
}

one()


const addTwo = function addTwo(num){
    return num + 2
}


console.log(addTwo(5))