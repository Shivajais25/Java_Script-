const buttons = document.querySelectorAll('.button')
// console.log(buttons)

const body = document.querySelector('body')
// console.log(body)

buttons.forEach( function(button){
    // console.log(button)

    button.addEventListener('click', function(e){
        //console.log(e.target)

        if (e.target.id === 'green') {
            body.style.backgroundColor = 'rgb(5, 177, 5)'
        }

        if(e.target.id === 'orange') {
            body.style.backgroundColor = 'orange'
        }
        
        if(e.target.id === 'blue') {
            body.style.backgroundColor = 'rgb(79, 79, 252)'
        }

        if(e.target.id === 'red') {
            body.style.backgroundColor = 'rgb(247, 18, 18)'
        }
        
        if(e.target.id === 'gray') {
            body.style.backgroundColor = 'gray'
        }
    })
})
