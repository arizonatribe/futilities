import forIn from "./forIn"

/**
 * Applies a mapping function you provide over every value in a given Object.
 *
 * @function
 * @name mapObject
 * @param {function} fn A mapping function that is invoked on every value in the provided Object
 * @param {object} obj An Object whose values will be mapped over
 * @returns {object} A new Object that is the result of the mapping operation over all the values in the original Object
 */
function mapObject(fn, obj) {
  const newObj = {}
  forIn((key, val, ob) => {
    newObj[key] = fn(val, key, ob)
  }, obj)
  return newObj
}

export default mapObject
