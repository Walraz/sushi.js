import debounce from '../utils/debounce'

const isMobile = () => {
  return window.innerWidth < 420
}

let animateRipple = (e, rippleWave) => {
  const rect = rippleWave.parentNode.getBoundingClientRect()
  const evt = (e.touches && e.touches[0]) ? e.touches[0] : e
  const x = Math.round(evt.clientX) - Math.round(rect.left)
  const y = Math.round(evt.clientY) - Math.round(rect.top)
  requestAnimationFrame(() => {
    rippleWave.style.top = `${y}px`
    rippleWave.style.left = `${x}px`
    rippleWave.classList.add('su-ripple__wave--animate')
  })
}

const createRipple = el => {
  const rect = el.getBoundingClientRect()
  const rippleContainer = document.createElement('span')
  const rippleWave = document.createElement('span')
  rippleContainer.classList.add('su-ripple')
  rippleWave.classList.add('su-ripple__wave')
  const size = Math.round(rect.width > rect.height ? rect.width : rect.height)
  rippleWave.style.height = `${size}px`
  rippleWave.style.width = `${size}px`

  const removeWave = () => {
    rippleWave.removeEventListener('transitionend', removeWave)
    requestAnimationFrame(() => {
      rippleWave.classList.remove('su-ripple__wave--animate')
    })
  }

  const click = (evt) => {
    rippleWave.addEventListener('transitionend', removeWave)
    animateRipple(evt, rippleWave)
  }

  el.__ripple = {
    click,
  }

  rippleContainer.appendChild(rippleWave)

  requestAnimationFrame(() => {
    el.appendChild(rippleContainer)

    if (isMobile())
      el.addEventListener('touchstart', debounce(el.__ripple.click, 100), false)
    else
      el.addEventListener('mousedown', el.__ripple.click, false)
  })
}

const removeRipple = el => {
  const ripple = el.querySelector('.su-ripple');
  if (ripple) el.removeChild(ripple)
  requestAnimationFrame(() => {
    el.removeEventListener('touchstart', el.__ripple.click)
    el.removeEventListener('mousedown', el.__ripple.click)
    delete el.__ripple
  })

}

export default {
  name: 'ripple',

  inserted(el, { value, modifiers }) {
    if (value && !el.__ripple) createRipple(el)
  },

  update(el, { value }) {
    if (value && !el.__ripple) createRipple(el)
    else if (!value && el.__ripple) removeRipple(el)
  },

  unbind(el) {
    if (el.__ripple) removeRipple(el)
  }
}