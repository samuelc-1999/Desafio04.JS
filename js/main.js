import {minutesDisplay, secondsDisplay, buttonMore, buttonPLayOne, 
  buttonPause, buttonStop, buttonless} from './variables.js'
import sounds from './sounds.js'
import {Cards} from './cards.js'

const sound = sounds()
const cards = Cards({sound})



let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes ?? minutes
  seconds = seconds ?? 0
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let timeUp = minutes <= 0 && seconds <= 0


    if ( timeUp ) {
      sound.timeEnd()
      offSondsCards(sound)
      updateDisplay()
      buttonPLayOne.classList.remove('hide')
      buttonPause.classList.add('hide')
      return
    }
    
    if( seconds <= 0 ) {
      seconds = 60
      --minutes
    }
    
    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

buttonPLayOne.addEventListener('click', () => {

  buttonPLayOne.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
  countdown() 
})

buttonPause.addEventListener('click', () => {
  buttonPLayOne.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPLayOne.classList.remove('hide')
  updateDisplay(minutes, 0)
  
  clearTimeout(timerTimeOut)
  cards.offSondsCards(sound)

})

buttonMore.addEventListener('click', () => { 
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  minutes += 5 

  updateDisplay(minutes, seconds)
})

buttonless.addEventListener('click', () => {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  minutes -= 5

  if(minutes <= 0 ) {
    minutesDisplay.textContent
    return
  }
  updateDisplay(minutes, seconds)

})





