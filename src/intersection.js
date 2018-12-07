import { _includes } from './_internal/_includes'

/**
 * Compares two lists of Strings/Numbers and returns the values that are in common (intersect) between the two lists
 *
 * @func
 * @sig [Number|String] -> [Number|String] -> [Number|String]
 * @param {String[]|Number[]} arr1 An Array of Strings/Numbers
 * @param {String[]|Number[]} arr2 An Array of Strings/Numbers
 * @returns {String[]|Number[]} The values in common between the two lists
 */
function intersection(arr1, arr2) {
  const diff = []
  const len1 = arr1.length
  const len2 = arr2.length
  if (len1 === 0 && len2 === 0) {
    return diff
  } else if (len1 === 0) {
    return arr2
  } else if (len2 === 0) {
    return arr1
  }

  for (let i = 0; i < len1; i++) {
    const val = arr1[i]
    if (_includes(val, arr2)) {
      diff.push(val)
    }
  }
  for (let j = 0; j < len2; j++) {
    const val = arr2[j]
    if (_includes(val, arr1) && !_includes(val, diff)) {
      diff.push(val)
    }
  }
  return diff
}

export default intersection