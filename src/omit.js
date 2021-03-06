import forIn from "./forIn"
import { _includes } from "./_internal/_includes"

/**
 * Removes specified keys from an object (after cloning the Object).
 *
 * @function
 * @name omit
 * @param {Array<string>} keys An array of keys to search for in the Object and exclude from the output
 * @param {object} obj An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but without the specified keys
 */
function omit(keys, obj) {
  const newObj = {}
  forIn((key, val) => {
    if (!_includes(key, keys)) {
      newObj[key] = val
    }
  }, obj)
  return newObj
}

export default omit
