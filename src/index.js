import { version } from '../package.json'
import Core from './core'
import components from './components'
import './core/styles/main.scss'

class Sushi {
    constructor() {
        this.core = null
        this.version = this.version.bind(this)
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
        this.core = new Core(Vue)
        for (let component of components) {
            const ns = options.namespace || this.core.options.namespace
            Vue.component(`${ns}-${component.name}`, component)
        }
    }
}

export default new Sushi()
