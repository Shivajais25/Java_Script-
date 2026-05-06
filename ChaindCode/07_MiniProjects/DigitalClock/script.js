const clock = document.querySelector('.clock')

// it is used to refresh aur continue script after specific interval 
setInterval(function(){
    let date = new Date()

    clock.innerHTML = date.toLocaleTimeString()
}, 1000)