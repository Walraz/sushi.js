const isMobile = () => {
  return 'createTouch' in document
}

const setEventListener = el => {
  window.removeEventListener('resize', el.__ripple.resize)
  window.addEventListener('resize', el.__ripple.resize)

  if (isMobile()) el.addEventListener('touchstart', el.__ripple.click, false)
  else el.addEventListener('mousedown', el.__ripple.click, false)
}

const cleanUp = el => {
  el.removeEventListener('mousedown', el.__ripple.click, false)
  el.addEventListener('touchstart', el.__ripple.click, false)
}

const idleRipple = ctx => {
  if (ctx.container) {
    ctx.container.parentElement.removeChild(ctx.container)
    ctx.container = null
    delete ctx.waves
    ctx.waves = []
    ctx.booted = false
  }
}

const initRipple = el => {
  const container = document.createElement('span')
  container.classList.add('su-ripple')

  for (let i = 0; i < el.__ripple.maxWaves; i++) {
    const wave = document.createElement('span')
    wave.classList.add('su-ripple__wave')
    container.appendChild(wave)
    el.__ripple.waves.push(wave)
  }

  el.appendChild(container)
  el.__ripple.container = container
  el.__ripple.booted = true
}

const getRect = (evt, el) => {
  const rect = el.getBoundingClientRect()
  const size = Math.round(Math.max(rect.width, rect.height))
  const event = evt.touches && evt.touches[0] ? evt.touches[0] : evt
  const x = Math.round(event.clientX - rect.left)
  const y = Math.round(event.clientY - rect.top)
  return { x, y, size }
}

const createWave = (evt, el) => {
  const ctx = el.__ripple
  if (ctx.stop) evt.stopPropagation()
  if (!ctx.booted) initRipple(el)
  let idleTimeout = null
  const rect = getRect(evt, el)
  const wave = ctx.waves[ctx.current]

  requestAnimationFrame(() => {
    ctx.animating = true
    wave.style.width = `${rect.size}px`
    wave.style.height = `${rect.size}px`
    wave.style.left = `${rect.x - Math.round(rect.size / 2)}px`
    wave.style.top = `${rect.y - Math.round(rect.size / 2)}px`
    wave.classList.add('su-ripple__wave--animate')
    const id = setTimeout(() => {
      wave.classList.remove('su-ripple__wave--animate')
      wave.style = ''
      ctx.animating = false
      clearTimeout(id)
      idleTimeout = setTimeout(() => {
        if (!ctx.animating && ctx.booted) idleRipple(ctx)
        clearTimeout(idleTimeout)
      }, ctx.maxWaves * ctx.duration + 1000)
    }, ctx.duration)
  })

  ctx.current++
  if (ctx.current === ctx.maxWaves) ctx.current = 0
}

export default {
  name: 'ripple',

  inserted(el, { value, modifiers }) {
    el.__ripple = {
      enabled: Boolean(value),
      animating: false,
      booted: false,
      duration: 500,
      container: null,
      maxWaves: 4,
      waves: [],
      current: 0,
      stop: modifiers.stop,
      resize(evt) {
        cleanUp(el)
        setEventListener(el)
      },
      click(evt) {
        if (!el.__ripple.enabled) return
        createWave(evt, el)
      },
    }

    setEventListener(el)
  },

  updated(el, { value }) {
    el.__ripple.enabled = Boolean(value)
  },

  unbind(el) {
    cleanUp(el)
  },
}
