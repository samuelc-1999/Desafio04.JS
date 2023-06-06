export default function () {
  const audioTree = new Audio('audios/Floresta.wav')
  const audioRain = new Audio('audios/Chuva.wav')
  const audioCoffe = new Audio('audios/Cafeteria.wav')
  const audioFire = new Audio('audios/Lareira.wav') 
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  function timeEnd() {
    kitchenTimer.play()
  }
  
  function playAudioTree() {
    audioTree.play()
  }

  function playAudioRain() {
    audioRain.play()
  }

  function playAudioCoffee() {
    audioCoffe.play()
  }

  function playAudioFire() {
    audioFire.play()
  }

  function pauseAudioTree() {
    audioTree.pause()
  }

  function pauseAudioRain() {
    audioRain.pause()
  }

  function pauseAudioCoffee() {
    audioCoffe.pause()
  }
 
  function pauseAudioFire() {
    audioFire.pause()
  }

  return ({
    timeEnd,
    playAudioTree,
    playAudioRain,
    playAudioCoffee,
    playAudioFire,
    playAudioCoffee,
    pauseAudioTree,
    pauseAudioRain,
    pauseAudioCoffee,
    pauseAudioFire
  })
}

