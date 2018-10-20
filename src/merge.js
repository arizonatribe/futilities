import isNil from './isNil'
import isPrimitive from './isPrimitive'
import concat from './concat'
import forIn from './forIn'

/**
 * Merges the values from 2 or more Objects or Arrays together into a new Object/Array.
 * Null and Undefined values are handled gracefully, and if the second value is
 * a primitive it will be returned as-is, instead of trying to merge it onto the first.
 *
 * @func
 * @sig {k: v} -> {k: v} -> ... -> {k: v}
 * @param {Object|Array} val The first value to merge onto (will not get mutated though)
 * @param {Object|Array} val2 A value to merge onto the first
 * @returns {Object|Array} A new value that contains the combined values from
 * all the values passed in
 */
function merge(...vals) {
  const numOfVals = vals.length
  if (isNil(vals[0]) || isNil(vals[1])) {
    return vals[1] || vals[0]
  }
  if (Array.isArray(vals[0])) {
    return concat(vals[0], ...vals.slice(1).map(a => Array.isArray(a) ? a : [a]))
  }
  if (isPrimitive(vals[1]) && numOfVals === 2) {
    return vals[1]
  }
  const newObj = { }
  forIn((key, obj) => { newObj[key] = obj[key] }, vals[0])
  for (let i = 1; i < numOfVals; i++) {
    forIn((key, obj) => { newObj[key] = merge(newObj[key], obj[key]) }, vals[i])
  }
  return newObj
}

export default merge