const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }

    this.velocity = {
      x: 0,
      y: 1
    }

    this.width = 30
    this.height = 30
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.position.y = this.velocity.y
    this.draw()
  }
}

// console.log(c)
const player = new Player()
player.update()

function animate() {
  console.log('go')
  requestAnimationFrame(animate)
}

animate()