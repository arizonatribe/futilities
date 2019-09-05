import forIn from './forIn'

/**
 * Assigns the values from one or more Objects onto another Object.
 * This mutates the original Object.
 *
 * @function
 * @sig {k: v} ... -> {k: v}
 * @param {Object} obj An Object to mutate with the values from one (or more)
 * additionally supplied Objects
 * @param {Object} ...resOfObjects One or more Objects to extract from and assign
 * onto the first Object
 * @returns {Object} The first object mutated with the values from any other object passed in
 */
function assign(obj, ...resOfObjects) {
  const numOfObjs = resOfObjects.length
  for (let i = 0; i < numOfObjs; i++) {
    const currentObj = resOfObjects[i] || {}
    forIn((key, val) => {
      obj[key] = val
    }, currentObj)
  }
  return obj
}

export default assign
