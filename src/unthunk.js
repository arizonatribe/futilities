/**
 * Transforms a thunk (of however many levels deep) into a single function that will received all the args at once
 *
 * @function
 * @name unthunk
 * @param {function} thunk A function that returns a function (which may return a function, and so on)
 * @returns {function} A single function that is ready to receive all the arguments at once
 */
function unthunk(thunk) {
  return function inner(...args) {
    return args.reduce((f, a) => f(a), thunk)
  }
}

export default unthunk
