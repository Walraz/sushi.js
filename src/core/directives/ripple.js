const isMobile = () => {
  return 'createTouch' in document
}

const removeRipple = ctx => {
  if (ctx.container) {
    ctx.container.parentElement.removeChild(ctx.container)
    ctx.container = null
    ctx.booted = false
  }
}

const initRipple = el => {
  const container = document.createElement('span')
  container.classList.add('su-ripple')

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

const initWave = (evt, el) => {
  const ctx = el.__ripple
  if (ctx.stop) evt.stopPropagation()
  if (!ctx.booted) initRipple(el)

  const rect = getRect(evt, el)
  const wave = document.createElement('span')
  wave.classList.add('su-ripple__wave')

  const preQue = () => {
    wave.style.willChange = 'transform, opacity'
    wave.removeEventListener('animationstart', preQue)
  }

  const removeQue = () => {
    ctx.que--
    wave.removeEventListener('animationend', removeQue)
    wave.style.willChange = 'auto'
    if (ctx.que === 0 && ctx.booted) removeRipple(ctx)
  }

  wave.addEventListener('animationstart', preQue)
  wave.addEventListener('animationend', removeQue)

  ctx.container.appendChild(wave)

  requestAnimationFrame(() => {
    ctx.que++
    wave.style.width = `${rect.size}px`
    wave.style.height = `${rect.size}px`
    wave.style.left = `${rect.x - Math.round(rect.size / 2)}px`
    wave.style.top = `${rect.y - Math.round(rect.size / 2)}px`
    wave.classList.add('su-ripple__wave--animate')
  })
}

export default {
  name: 'ripple',

  inserted(el, { value, modifiers }) {
    el.__ripple = {
      enabled: Boolean(value),
      booted: false,
      container: null,
      que: 0,
      stop: modifiers.stop,
      click(evt) {
        if (!el.__ripple.enabled) return
        initWave(evt, el)
      },
    }

    if (isMobile()) el.addEventListener('touchstart', el.__ripple.click, false)
    else el.addEventListener('mousedown', el.__ripple.click, false)
  },

  updated(el, { value }) {
    el.__ripple.enabled = Boolean(value)
  },

  unbind(el) {
    el.removeEventListener('mousedown', el.__ripple.click, false)
    el.addEventListener('touchstart', el.__ripple.click, false)
  },
}
