function getEvent(e) {
    return e || window.event
}

export default function position(e) {
    let posx, posy
    e = getEvent(e)

    if (e.touches && e.touches[0]) {
        e = e.touches[0]
    } else if (e.changedTouches && e.changedTouches[0]) {
        e = e.changedTouches[0]
    }

    if (e.clientX || e.clientY) {
        posx = e.clientX
        posy = e.clientY
    } else if (e.pageX || e.pageY) {
        posx =
            e.pageX -
            document.body.scrollLeft -
            document.documentElement.scrollLeft
        posy =
            e.pageY -
            document.body.scrollTop -
            document.documentElement.scrollTop
    }

    return {
        top: posy,
        left: posx,
    }
}
