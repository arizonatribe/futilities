/**
 * Checks a value to see if it is a String containing either no characters OR no characters _except_ for whitespace.
 *
 * @function
 * @name isBlankString
 * @param {*} val A value of any type
 * @returns {boolean} Whether or not the value is a blank string
 */
function isBlankString(val) {
  return typeof val === "string" && (val.length === 0 || /^\s*$/.test(val))
}

export default isBlankString
