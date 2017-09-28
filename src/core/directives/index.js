const context = require.context('./', false, /^(?!.*index).*\.js$/)
export default context
    .keys()
    .map(context)
    .map(c => c.default)
