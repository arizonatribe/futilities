import forIn from './forIn'

/**
 * Swaps the values for keys in a given object. So the values in that object should be the kind that _can_ be converted to unique string values
 *
 * @function
 * @sig {k: v} -> {v: k}
 * @param {Object<string, string|number>} obj An object whose values _can_ be swapped for keys
 * @returns {Object<string, string>} A new object whose keys were the values from the original object
 */
function flipKeyValues(obj) {
  const newObj = {}
  forIn((key, val) => {
    newObj[String(val)] = key
  }, obj)
  return newObj
}

export default flipKeyValues
