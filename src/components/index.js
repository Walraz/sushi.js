const context = require.context('./', true, /\.vue$/)
export default context.keys().map(context)
