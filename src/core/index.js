import options from './options'
import directives from './directives'
import mixins from './mixins'

export default class Core {
    constructor(Vue) {
        this.options = options
        this.Vue = Vue
        this.installMixins()
        this.installDirectives()
    }

    installMixins() {
        for (let mixin of mixins) {
            this.Vue.mixin(mixin)
        }
    }

    installDirectives() {
        for (let directive of directives) {
            this.Vue.directive(directive.name, directive)
        }
    }
}
