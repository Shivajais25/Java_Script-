// generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color
}

// console.log(randomColor())
const changeBgColor = function(){
    document.body.style.backgroundColor = randomColor() //it gives random generated value of colors
}
document.querySelector('.start').addEventListener('click', function(){
    const stopchange = setInterval(changeBgColor, 1000)

    document.querySelector('.stop').addEventListener('click', function(){
        clearInterval(stopchange)
    })
})