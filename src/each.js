/**
 * A faster forEach that provides the same API as native.
 *
 * @function
 * @name each
 * @param {function} fn A Function to execute for each iteration. It will receive the value, index and full array (respectively) as args
 * @param {Array<*>} arr An Array to iterate over (any value will be passed into the iterate Function)
 */
function each(fn, arr) {
  for (let i = 0, count = arr.length; i < count; i++) {
    fn(arr[i], i, arr)
  }
}

export default each
