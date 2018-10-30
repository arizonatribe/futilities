/**
 * Checks if a given value is present in a String OR Array
 *
 * @func
 * @sig Number|String -> String|Array -> Boolean
 * @param {String|Number} val A value which may be present in the String/Array
 * @param {Array|String} arr An Array or String which may contain the provided value
 * @returns {Boolean} Whether or not the String|Array contains the provided value
 */
function contains(val, arr) {
  return Array.isArray(arr)
    ? arr.includes(val)
    : arr.indexOf(val) !== -1
}

export default contains