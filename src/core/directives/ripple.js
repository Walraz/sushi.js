import debounce from '../utils/debounce'

const isMobile = () => {
  return window.innerWidth < 420
}

const getPosition = (e, rect) => {
  const evt = (e.touches && e.touches[0]) ? e.touches[0] : e
  const x = Math.round(evt.clientX) - Math.round(rect.left)
  const y = Math.round(evt.clientY) - Math.round(rect.top)
  return { x, y }
}

const getDpi = () => {
  return window.devicePixelRatio
}

const getSize = (el) => {
  const rect = el.getBoundingClientRect()
  return {
    width: el.clientWidth,
    height: el.clientHeight,
    left: rect.left,
    top: rect.top,
  }
}

const initRipple = (el) => {
  const rect = getSize(el)
  const container = document.createElement('canvas')
  const dpi = 1
  container.classList.add('su-ripple')
  container.style.width = `${rect.width}px`
  container.style.height = `${rect.height}px`
  container.setAttribute('width', rect.width * dpi)
  container.setAttribute('height', rect.height * dpi)
  const ctx = container.getContext('2d')
  ctx.scale(dpi, dpi)
  el.appendChild(container)

  return { ctx, container }
}

const createRipple = (evt, el, modifiers) => {
  if (modifiers.stop) evt.stopPropagation()

  const rect = el.__ripple.rect
  const ctx = el.__ripple.ctx
  let color = '#000'
  let pos = {}

  requestAnimationFrame(() => {
    color = window.getComputedStyle(el, null).getPropertyValue('color')
    pos = getPosition(evt, getSize(el))
  })

  const maxSize = Math.round((rect.width > rect.height ? rect.width : rect.height) * 2)
  let initSize = 0

  const createWave = () => {
    initSize += Math.round((maxSize / 50))

    ctx.clearRect(0, 0, rect.width, rect.height)
    ctx.globalAlpha = .3 - (initSize / maxSize) * .3
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, initSize, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill();
    if (initSize >= maxSize) cancelAnimationFrame(animationLoop)
    else requestAnimationFrame(createWave)
  }

  const animationLoop = requestAnimationFrame(createWave)
}

export default {
  name: 'ripple',

  inserted(el, { value, modifiers }) {
    if (!value) return

    const { ctx, container } = initRipple(el)

    el.__ripple = {
      ctx,
      container,
      rect: getSize(el),
      click: (evt) => {
        createRipple(evt, el, modifiers)
      }
    }

    if (isMobile()) el.addEventListener('touchstart', debounce(el.__ripple.click, 100))
    else el.addEventListener('mousedown', debounce(el.__ripple.click, 100))
  },

  unbind(el) {
    if (!el.__ripple) return
    el.removeEventListener('mousedown', el.__ripple.click)
    el.removeEventListener('touchstart', el.__ripple.click)
    el.__ripple.container.parentNode.removeChild(el.__ripple.container)
    delete el.__ripple
  }
}