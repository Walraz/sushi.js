import { version } from '../package.json'
import core from './core'
import components from './components'
import './core/styles/main.scss'

class Sushi {
    constructor() {
        this.options = core.options
        this.version()
    }

    version() {
        console.info(
            `%c 🍣 Sushi.js ${version}`,
            'color: lightgreen; font-size: 14px; font-weight: bold;'
        )
        return version
    }

    install(Vue, options = {}) {
        for (let component of components) {
            const ns = options.namespace || this.options.namespace
            Vue.component(`${ns}-${component.name}`, component)
        }
    }
}

export default new Sushi()
