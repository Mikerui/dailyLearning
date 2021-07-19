  // 背景星空 启动 开场 动画
  function initOpenAnimation(id) {
    const canvas = document.getElementById(id)
    const ctx = canvas.getContext('2d')
    const w = (canvas.width = window.innerWidth)
    const h = (canvas.height = window.innerHeight)

    const hue = 217
    const stars = []
    let count = 0
    const maxStars = 1300 // 星星数量

    const canvas2 = document.createElement('canvas')
    const ctx2 = canvas2.getContext('2d')
    canvas2.width = 100
    canvas2.height = 100
    const half = canvas2.width / 2
    const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
    gradient2.addColorStop(0.025, '#CCC')
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
    gradient2.addColorStop(1, 'transparent')

    ctx2.fillStyle = gradient2
    ctx2.beginPath()
    ctx2.arc(half, half, half, 0, Math.PI * 2)
    ctx2.fill()

    // End cache

    function random(min, max) {
      if (arguments.length < 2) {
        max = min
        min = 0
      }

      if (min > max) {
        const hold = max
        max = min
        min = hold
      }

      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function maxOrbit(x, y) {
      const max = Math.max(x, y)
      const diameter = Math.round(Math.sqrt(max * max + max * max))
      return diameter / 2
      // 星星移动范围，值越大范围越小，
    }

    const Star = function() {
      this.orbitRadius = random(maxOrbit(w, h))
      this.radius = random(60, this.orbitRadius) / 8
      // 星星大小
      this.orbitX = w / 2
      this.orbitY = h / 2
      this.timePassed = random(0, maxStars)
      this.speed = random(this.orbitRadius) / 50000
      // 星星移动速度
      this.alpha = random(2, 10) / 10

      count++
      stars[count] = this
    }

    Star.prototype.draw = function() {
      const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
      const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
      const twinkle = random(10)

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05
      }

      ctx.globalAlpha = this.alpha
      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
      this.timePassed += this.speed
    }

    for (let i = 0; i < maxStars; i++) {
      new Star()
    }

    function animation() {
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 0.5 // 尾巴
      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)'
      ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter'
      for (let i = 1, l = stars.length; i < l; i++) {
        stars[i].draw()
      }

      window.requestAnimationFrame(animation)
    }

    animation()
  }
  // 启动球形动画
  function initSpherical(id) {
    const canvas = document.querySelector(`#${id}`)
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    // Store the 2D context
    const ctx = canvas.getContext('2d')

    if (window.devicePixelRatio > 1) {
      canvas.width = canvas.clientWidth * 2
      canvas.height = canvas.clientHeight * 2
      ctx.scale(2, 2)
    }

    /* ====================== */
    /* ====== VARIABLES ===== */
    /* ====================== */
    let width = canvas.clientWidth // Width of the canvas
    let height = canvas.clientHeight // Height of the canvas
    let rotation = 0 // Rotation of the globe
    const dots = [] // Every dots in an array

    /* ====================== */
    /* ====== CONSTANTS ===== */
    /* ====================== */
    /* Some of those constants may change if the user resizes their screen but I still strongly believe they belong to the Constants part of the variables */
    const DOTS_AMOUNT = 3000 // Amount of dots on the screen
    const DOT_RADIUS = 2 // Radius of the dots
    let GLOBE_RADIUS = width * 0.7 // Radius of the globe
    let GLOBE_CENTER_Z = -GLOBE_RADIUS // Z value of the globe center
    let PROJECTION_CENTER_X = width / 2 // X center of the canvas HTML
    let PROJECTION_CENTER_Y = height / 2 // Y center of the canvas HTML
    let FIELD_OF_VIEW = width * 0.8

    class Dot {
      constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z

        this.xProject = 0
        this.yProject = 0
        this.sizeProjection = 0
      }

      // Do some math to project the 3D position into the 2D canvas
      project(sin, cos) {
        const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z)
        const rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z
        this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ)
        this.xProject = rotX * this.sizeProjection + PROJECTION_CENTER_X
        this.yProject = this.y * this.sizeProjection + PROJECTION_CENTER_Y
      }

      getRandomColor() {
        const r = Math.round(Math.random() * 255)
        const g = Math.round(Math.random() * 255)
        const b = Math.round(Math.random() * 255)
        const color = (r << 16) | (g << 8) | b
        return '#' + color.toString(16)
      }

      // Draw the dot on the canvas
      //   在画布上画点
      draw(sin, cos, index) {
        this.project(sin, cos)
        // ctx.fillRect(this.xProject - DOT_RADIUS, this.yProject - DOT_RADIUS, DOT_RADIUS * 2 * this.sizeProjection, DOT_RADIUS * 2 * this.sizeProjection);
        ctx.beginPath()
        // const x = this.getRandomColor()
        // if (index < 3000) {
        //   ctx.fillStyle = '#3693FF'
        // } else {
        //   ctx.fillStyle = '#A8FBFF'
        // }
        ctx.fillStyle = '#3693FF'
        ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    function createDots() {
      // Empty the array of dots
      dots.length = 0

      // Create a new dot based on the amount needed
      for (let i = 0; i < DOTS_AMOUNT; i++) {
        const theta = Math.random() * 2 * Math.PI // Random value between [0, 2PI]
        const phi = Math.acos(Math.random() * 2 - 1) // Random value between [-1, 1]

        // Calculate the [x, y, z] coordinates of the dot along the globe
        const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta)
        const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta)
        const z = GLOBE_RADIUS * Math.cos(phi) + GLOBE_CENTER_Z
        dots.push(new Dot(x, y, z))
      }
    }

    /* ====================== */
    /* ======== RENDER ====== */
    /* ====================== */
    function render(a) {
      // Clear the scene
      ctx.clearRect(0, 0, width, height)

      // Increase the globe rotation
      rotation = a * 0.0004

      const sineRotation = Math.sin(rotation) // Sine of the rotation
      const cosineRotation = Math.cos(rotation) // Cosine of the rotation

      // Loop through the dots array and draw every dot
      for (let i = 0; i < dots.length; i++) {
        dots[i].draw(sineRotation, cosineRotation, i)
      }

      window.requestAnimationFrame(render)
    }

    // Function called after the user resized its screen
    function afterResize() {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      if (window.devicePixelRatio > 1) {
        canvas.width = canvas.clientWidth * 2
        canvas.height = canvas.clientHeight * 2
        ctx.scale(2, 2)
      } else {
        canvas.width = width
        canvas.height = height
      }
      GLOBE_RADIUS = width * 0.7
      GLOBE_CENTER_Z = -GLOBE_RADIUS
      PROJECTION_CENTER_X = width / 2
      PROJECTION_CENTER_Y = height / 2
      FIELD_OF_VIEW = width * 0.8

      createDots() // Reset all dots
    }

    // Variable used to store a timeout when user resized its screen
    let resizeTimeout
    // Function called right after user resized its screen
    function onResize() {
      // Clear the timeout variable
      resizeTimeout = window.clearTimeout(resizeTimeout)
      // Store a new timeout to avoid calling afterResize for every resize event
      resizeTimeout = window.setTimeout(afterResize, 4000)
    }
    window.addEventListener('resize', onResize)

    // Populate the dots array with random dots
    createDots()
    // Render the scene
    window.requestAnimationFrame(render)
  }