import throttle from '../utils/throttle'
import position from '../utils/position'

const showRipple = (evt, el, stopPropagation) => {
    if (stopPropagation) evt.stopPropagation()
    const container = document.createElement('span')
    const rippleNode = document.createElement('span')
    container.appendChild(rippleNode)
    container.className = 'su-ripple-container'

    const offset = el.getBoundingClientRect()
    let size = offset.width > offset.height ? offset.width : offset.height
    size = `${size * 2}px`
    rippleNode.className = 'su-ripple'
    rippleNode.style.height = size
    rippleNode.style.width = size

    const pos = position(evt)
    const x = pos.left - offset.left
    const y = pos.top - offset.top

    rippleNode.classList.add('su-ripple--enter', 'su-ripple--visible')
    rippleNode.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(.001)`

    el.appendChild(container)

    setTimeout(() => {
        rippleNode.classList.remove('su-ripple--enter')
        rippleNode.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`
        setTimeout(() => {
            rippleNode.classList.remove('su-ripple--visible')
            setTimeout(() => {
                rippleNode.parentNode.remove()
            }, 300)
        }, 400)
    }, 25)
}

export default {
    name: 'ripple_old',
    inserted(el, { value, modifiers }) {
        const ctx = {
            enabled: value !== false,
            click(evt) {
                if (ctx.enabled) {
                    showRipple(evt, el, modifiers.stop)
                }
            },
        }

        el.__ripple = ctx
        if (ctx.enabled)
            el.addEventListener('mousedown', throttle(ctx.click, 100), false)
    },
    update(el, { value, oldValue }) {
        if (el.__ripple && value !== oldValue) {
            el.__ripple.enabled = value !== false
        }
    },
    unbind(el, { modifiers }) {
        const ctx = el.__ripple
        el.removeEventListener('click', ctx.click, false)
        delete el.__ripple
    },
}
