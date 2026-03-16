// Immediately Invoked Function Expression (IIFE)

// benefit of iife to proteect your code from polluted variables

(function one(name){
    console.log(`${name} DB Connected`)
}) ("MySQL");      // to end iife we must use ;


// with arrow function 
( (name) => {
    console.log(`${name} DB Configurated`)
})("PostgreSQL");