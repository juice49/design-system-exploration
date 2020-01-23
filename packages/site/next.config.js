const tm = require('next-transpile-modules')

const withTM = tm([
  '@cssinjs/design-system'
])

module.exports = withTM()
