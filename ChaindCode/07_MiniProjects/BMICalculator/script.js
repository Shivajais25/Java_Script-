const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()  // stop redirecting when submiting the data

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('.result')
    
    if (height <= 0 || height > 228) {
        result.innerHTML = "Please Enter Valid Height!"
    } else if (weight <= 0 || weight > 200) {
        result.innerHTML = "Please Enter Valid Weight!"
    } else {
        // formula to calculate BMI
        const bmi = (weight / ((height * height) / 10000) ).toFixed(2)

        // show the result

        result.innerHTML = `<span> Your BMI is ${bmi} </span>`
    }

})