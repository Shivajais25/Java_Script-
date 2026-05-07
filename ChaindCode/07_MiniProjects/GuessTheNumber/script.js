let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#button')
const userInput = document.querySelector('#number')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.result')


const p = document.createElement('p')

let prevGuesses = []

let attempts = 1
let playGame = true

// check if user is available to play the game 

if (playGame)   {
    submit.addEventListener('click', function(e){
        e.preventDefault()

        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //
    if(guess < 1 || guess > 100){
        alert('Please Enter Number Between 1 and 100!')
    }

    else{
        prevGuesses.push(guess)
        if(attempts === 11){
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //

    if (guess === randomNumber){
        displayMessage(`You guessed it right!`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOO Low!`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Too High!`)
    }

}

function displayGuess(guess){
    //
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    attempts++
    remaining.innerHTML = `${11 - attempts}`
}

function displayMessage(message){
    //

    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function newGame(){
    //
    const buttons = document.querySelector('#newGame')
    buttons.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuesses = []
        attempts = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - attempts}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame(){
    //

    userInput.value = ''
    userInput.setAttribute('disabled', '')

    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame" style = "cursor: pointer">Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}