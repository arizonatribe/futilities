const propAt = require('./propAt')
const isUndefined = require('./isUndefined')

function propOr(fallback, prop, obj) {
  const val = propAt(prop, obj)
  return isUndefined(val) ? fallback : val
}

module.exports = propOr