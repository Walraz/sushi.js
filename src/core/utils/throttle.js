import debounce from './debounce'
import isObject from './isObject'

export default function throttle(func, wait, options) {
    let leading = true
    let trailing = true

    if (typeof func != 'function') {
        throw new TypeError('Expected a function')
    }
    if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading
        trailing = 'trailing' in options ? !!options.trailing : trailing
    }
    return debounce(func, wait, {
        leading: leading,
        maxWait: wait,
        trailing: trailing,
    })
}
