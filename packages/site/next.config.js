const tm = require('next-transpile-modules')

const withTM = tm([
  'design-system'
])

module.exports = withTM()
