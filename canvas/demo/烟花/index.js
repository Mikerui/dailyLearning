!(function () {
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas)
  const context = canvas.getContext('2d')
  function resizeCanvas() {
    const height = window.innerHeight
    const width = window.innerWidth
    canvas.height = height
    canvas.width = width
    clearCanvas(width, height)
  }
  function clearCanvas(width, height) {
    context.fillStyle = '#000000'
    context.fillRect(0, 0, width, height)
  }
  //   绘制canvas
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  //   绘制烟花逻辑
  function mouseDownHandler(event) {
    // 获取鼠标位置
    const x = event.clientX
    const y = event.clientY
    createFireworls(x, y)
  }
  document.addEventListener('mousedown', mouseDownHandler)
  let particles = []
  //   绘制烟花粒子
  function createFireworls(x, y) {
    let count = 10
    // 烟花的圆心
    const radius = 0
    const hue = Math.floor(Math.random() * 51) + 150 // 基础色度
    const hueVariance = 30 // 变化的幅度
    // 计算当前圆心的角度
    for (let i = 0; i < count; i++) {
      // 角度
      const angle = Math.floor(Math.random() * 360)
      const radians = (angle * Math.PI) / 180
      const p = {}
      p.sx = x
      p.sy = y
      p.radians = radians
      p.radius = radius
      p.size = Math.floor(Math.random() + 3) + 1
      p.speed = Math.random() * 5 + 0.4
      // 随机色度值
      p.hue =
        Math.floor(Math.random() * (hue + hueVariance - (hue - hueVariance))) +
        (hue - hueVariance)
      p.brightness = Math.floor(Math.random() * 31) + 50
      p.alpha = (Math.floor(Math.random() * 61) + 40) / 100
      // 添加到粒子管理器
      particles.push(p)
    }
  }
  //
  function drawFireworks() {
    // 绘制前清空
    clearCanvas()
    console.log(particles.length, 44545)
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i]
      // 当前粒子的弧度
      const vx = Math.cos(p.radians) * p.radius
      const vy = Math.sin(p.radians) * p.radius + 0.4
      p.x += vx
      p.y += vy
      p.radius *= 1 - p.speed / 100
      p.alpha -= 0.005
      // 屏幕外的清楚掉
      if (p.alpha <= 0) {
        // 删除数组记录的
        particles.splice(i, 1)
        continue
      }
      // 开始绘制
      context.beginPath()
      context.arc(p.x, p.y, p.size, 0, Math.PI * 2, false)
      context.closePath()
      context.fillStyle = `hsla(${p.hue},100%,${p.brightness}%,${p.alpha})`
      context.fill()
    }
  }
  // 动画 requestAnimationFrame
  // 获得和当前浏览器刷新率同步的消息机制
  function tick() {
    context.globalCompositeOperation = 'destination-out'
    context.fillStyle = 'rgba(0,0,0,0)'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.globalCompositeOperation = 'lighter'
    // 渲染
    drawFireworks()
    requestAnimationFrame(tick)
  }
  tick()
})()
