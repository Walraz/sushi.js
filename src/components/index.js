const context = require.context('./', false, /\.vue$/)
export default context.keys().map(context)
