twemoji.parse(document.body)

const frame = () => {
    confetti({
      particleCount: 250,
      startVelocity: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 1 }
    })
  
    confetti({
      particleCount: 250,
      startVelocity: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 1 }
    })
}
  
(async () => {
    let delay = false
    const canvasConfetti = document.createElement('canvas')
    let one = document.querySelectorAll('img.emoji')
    one.forEach(e => {
      if (e.alt == '1️⃣') {
        e.style.cursor = 'pointer'
        e.addEventListener('click', () => {
          if (!delay) {
            requestAnimationFrame(frame)
            delay = true
          }
        })
      }
    })
  
    setInterval(() => delay = false, 2000)
    document.body.appendChild(canvasConfetti)
  
    confetti.create(canvasConfetti, {
      resize: true,
      useWorker: true
    })
})()