import isArrayish from './isArrayish'
import isObject from './isObject'
import mapString from './mapString'
import mapObject from './mapObject'

function map(fn, val) {
  if (Array.isArray(val)) return val.map(fn)
  if (isObject(val)) return mapObject(fn, val)
  if (typeof val === 'string') return mapString(fn, val)
  if (isArrayish(val)) return val.map(fn)
  return val
}

export default map
