import { cardFire, cardHouse, cardRain, cardTree } from './variables.js'

export function Cards ({ sound }) {

  function offSondsCards(sound) {
    sound.pauseAudioTree() 
    sound.pauseAudioCoffee()
    sound.pauseAudioRain()
    sound.pauseAudioFire()
    
  
    cardFire.classList.remove('color-fire')
    cardTree.classList.remove('tree-color')
    cardRain.classList.remove('color-rain')
    cardHouse.classList.remove('color-coffe')
  }





cardTree.addEventListener('click', () => {  

  if(cardTree.classList.contains('tree-color')){
    offSondsCards(sound)
    return
  }

  offSondsCards(sound)
  cardTree.classList.add('tree-color')
  sound.playAudioTree()

})

cardRain.addEventListener('click', () => { 
  if(cardRain.classList.contains('color-rain')){
    offSondsCards(sound)
    return
  }

  offSondsCards(sound)
  cardRain.classList.add('color-rain')
  sound.playAudioRain()

})

cardHouse.addEventListener('click', () => {
  if(cardHouse.classList.contains('color-coffe')){
    offSondsCards(sound)
    return
  }

  offSondsCards(sound)
  cardHouse.classList.add('color-coffe')
  sound.playAudioCoffee()

})

cardFire.addEventListener('click', () => {
  if(cardFire.classList.contains('color-fire')){
    offSondsCards(sound)
    return
  }

  offSondsCards(sound)
  cardFire.classList.add('color-fire')
  sound.playAudioFire()
})

return {
  offSondsCards
}

}


